import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/login'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="" component={LoginPage}/>
        </Switch>
      </Router>
    </React.StrictMode>
  )
}

export default App;
