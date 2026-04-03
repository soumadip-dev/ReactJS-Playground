import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { ShoppingCartProvider } from './context/index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </BrowserRouter>
);

// https://youtu.be/dz458ZkBMak?si=4e-bT3jS3zPyZveL&t=24277
