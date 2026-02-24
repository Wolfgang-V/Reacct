import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import appsplice from './redux/appSlice';
import { Provider } from 'react-redux';

const store=   configureStore({
  reducer: appsplice,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <App />
     </Provider>
    </BrowserRouter>
  </StrictMode>,
)
