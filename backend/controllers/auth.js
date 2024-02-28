import jwt from 'jsonwebtoken';
import User from '../models/User';

async function login(req, res) {
  // Code for Google login and JWT token generation
}

async function current_user(req, res) {
  // Get current user based on JWT token
}

export { login, current_user };
