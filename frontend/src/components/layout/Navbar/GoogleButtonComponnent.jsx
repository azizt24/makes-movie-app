import { LogoutBtn } from './Navbar.styles';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { CONSTANTS } from '../../../features/movies/utils/constants/constants';

const GoogleButtonComponent = () => {
  const [user, setUser] = useState({});
  // const onSuccess = (response) => {
  //   var userObject = jwtDecode(response.credential);
  //   console.log(userObject); // Check the decoded JWT payload
  //   setUser(userObject);
  // };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        size: 'large',
        shape: 'pill',
      }
    );
  }, [user]);

  function handleCallbackResponse(response) {
    var userObject = jwtDecode(response.credential);
    console.log(userObject); // Check the decoded JWT payload
    setUser(userObject);
    const idToken = response.credential; // Get the ID token
    document.getElementById('signInDiv').hidden = true;

    fetch(CONSTANTS.AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: idToken }),
    })
      .then(res => {
        console.log('Response status:', res.status); // Log the response status
        const contentType = res.headers.get('content-type');
        if (res.ok) {
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return res.json(); // Process it as JSON
          } else {
            return res.text(); // Process it as text
          }
        } else {
          return res.text().then(text => {
            throw new Error(text);
          });
        }
      })
      .then(data => {
        console.log('User authenticated:', data); // This should log the user data or message
      })
      .catch(error => {
        console.error('Error during authentication:', error);
      });
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  return (
    <div>
      <div
        id="signInDiv"
        style={{ marginLeft: '-200px', marginRight: '20px' }}
      ></div>
      {Object.keys(user).length !== 0 && (
        <LogoutBtn onClick={handleSignOut}>Sign Out</LogoutBtn>
      )}
    </div>
  );
};

export default GoogleButtonComponent;
