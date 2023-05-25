import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import "./app.scss";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
const App = () => {
  return (
  <Router>
   <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
  )
}

export default App;

