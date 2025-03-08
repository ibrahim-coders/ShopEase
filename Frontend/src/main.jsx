import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RouterComponent from './Routers/router';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </StrictMode>
);
