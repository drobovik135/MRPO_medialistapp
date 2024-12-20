
import './App.css';
import './index.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useEffect,
} from 'react-router-dom';
import EntryMedia from './components/EntryMedia';
import Header from './components/Header';
import User from './components/User'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/allmedia" element = {<AllMedia/>}></Route>
            <Route path="/"></Route>
            <Route path="/user" element={<User/>} />
            
          </Routes>
        </Router>
      </div>
    </>
  );
}



export default App;
