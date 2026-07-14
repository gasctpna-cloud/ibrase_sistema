import React, { useState } from 'react';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import '../src/css/';

export default function App() {
  // O estado gerencia se o usuário está ou não logado no sistema
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}