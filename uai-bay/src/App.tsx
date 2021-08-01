import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Dashboard />
      </Router>
      
    </React.StrictMode>
  );
}

export default App;
