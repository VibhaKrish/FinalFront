import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <AppRoutes />
      
    </Router>
  );
}

export default App;

