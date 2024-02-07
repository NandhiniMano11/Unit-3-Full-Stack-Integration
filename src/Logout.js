import React from 'react';
import axios from 'axios';

function Logout() {
  const handleLogout = async () => {
    try {
      // Make a request to logout endpoint
      await axios.post('https://localhost:3000/logout');
      // Handle successful logout (e.g., clear JWT token from local storage)
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error.response.data);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
