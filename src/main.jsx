import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure App.js exists in the src directory
import Story from './Story';
import './index.css'; // Optional: if you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
