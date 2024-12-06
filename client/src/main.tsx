import React from 'react';
import ReactDOM from 'react-dom/client';  // Stelle sicher, dass du 'react-dom/client' importierst
import App from './App';
import './index.css'; // Für Tailwind CSS und globale Styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Verwende createRoot statt render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
