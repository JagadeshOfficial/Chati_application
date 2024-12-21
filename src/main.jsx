//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Add this import
import './index.css';
import App from './App.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>

  //</StrictMode>
);
 