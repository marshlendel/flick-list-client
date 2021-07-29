import React from "react"
import './App.css';
import Login from './components/login';
// import Navbar from './components/navbar';
// import Searchbar from'./components/searchbar';
// import Watchlist from'./components/watchlist';
import Footer from'./components/footer';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Navbar /> */}
      {/* <Searchbar /> */}
      {/* <Watchlist /> */}
      <Footer />
    </div>
  );
}

export default App;
