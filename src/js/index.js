import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './styles/tailwind.css';
// import './styles/index.css';
import App from './app';


const root = createRoot(document.getElementById('root'));
root.render(<App />);