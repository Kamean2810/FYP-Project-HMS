import React, { createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

export const Context = createContext({ isAuthenticated: false });
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setuser] = useState({});

  return(
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setuser }}>
       <App />

    </Context.Provider>
  )

}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
   
  </React.StrictMode>,
)
