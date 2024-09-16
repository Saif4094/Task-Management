import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext'; // Keep the UserProvider context
import App from './App';

ReactDOM.render(
  // Wrapping only with the UserProvider for context management
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
