import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RouterComponent from './Routers/router';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-center" />
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
