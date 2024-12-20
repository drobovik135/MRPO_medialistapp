
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
import UserList from './components/UserList'
import MyListTable from './pages/MyListTablePage';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/test" element ={<MyListTable/>}></Route>
            <Route path="/" element={<UserList/>}></Route>
            <Route path="/user" element={<User/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}



export default App;
