import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ReactFragment from 'react'; // Import ReactFragment explicitly
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';

function App() {


  return (
    <Router>
      <Routes>
          <Route path="/" element = {<RegisterPage />}>
          </Route>
          <Route path="/login" element = {<LoginPage />}>
            
          </Route>
          <Route path="/signup" element = {<RegisterPage />}>
            
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
