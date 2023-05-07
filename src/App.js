import SignUp from './components/SignUp.js';
import Dashboard from './components/Dashboard.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route exact path={'/'} element={<SignUp/>}/>
        <Route exact path={'/dashboard'} element={<Dashboard/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
