import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from "./Context/AppContext.jsx";
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
)
