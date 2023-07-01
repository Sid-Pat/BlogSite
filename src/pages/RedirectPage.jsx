import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const RedirectPage = () => {
  useEffect(() => {
    firebase.auth().getRedirectResult()
      .then((result) => {
        // Authentication successful
        const user = result.user;
        console.log("User:", user);
      })
      .catch((error) => {
        // Handle authentication errors
        console.log("Authentication error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Redirect Page</h1>
      {/* Add your content here */}
    </div>
  );
};

export default RedirectPage;
