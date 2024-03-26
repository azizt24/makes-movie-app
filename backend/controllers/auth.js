const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Login route
const login = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const { email, given_name, family_name, picture } = payload;

  let user = await User.findOne({ email });

  if (!user) {
    // Creating new user with Google data
    user = new User({
      email,
      firstName: given_name,
      lastName: family_name,
      picture: picture || null,
    });
    await user.save();
  }

  const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '6d',
  });

  res
    .cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    .sendStatus(200);
});

// Get current user route
const current_user = asyncHandler(async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ user });
});

module.exports = { login, current_user };
