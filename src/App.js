
import './App.css';
import './index.css';
import EntryMedia from './components/EntryMedia';
import Header from './components/Header';

function App() {



  

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/list"></Route>
            <Route path="/"></Route>
            <Route path="/user/:userId" element={<UserPage users={users} />} />
            
          </Routes>
        </Router>
      </div>
    </>
  );
}



export default App;
