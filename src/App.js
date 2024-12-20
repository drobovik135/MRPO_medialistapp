
import './App.css';
import './index.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useEffect,
} from 'react-router-dom';
import Header from './components/Header';

import User from './components/User';
import UserList from './components/UserList';
import MyListTable from './components/MyListTablePage';
import AllCategories from './components/AllCategories';
import AllMedia from './components/AllMedia';
import AddEntry from './components/AddEntry';
import AddMedia from './components/AddMedia';
import AddTable from './components/AddTable';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<UserList/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/table" element={<MyListTable/>}></Route>
            <Route path="/add_entry" element={<AddEntry/>}></Route>
            <Route path="/add_table" element={<AddTable/>}></Route>
            <Route path="/add_entry_sucess" element={<AddTable/>}></Route>
            <Route path="/add_table_sucess" element={<AddTable/>}></Route>

            <Route path="/categories" element={<AllCategories/>}></Route>
            <Route path="/medias" element={<AllMedia/>}></Route>
            <Route path="/add_media" element={<AddMedia/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}



export default App;
