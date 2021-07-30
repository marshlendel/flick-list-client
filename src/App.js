import React from "react"
import './App.css';
import WatchListNav from './components/navbar';
import List from './components/watchlist';
import Login from './components/login';
import Footer from'./components/footer';


function App() {
  return (
    <div className="App">

     <WatchListNav />
     <List />

      <Login />
      {/* <Navbar /> */}
      {/* <Searchbar /> */}
      {/* <Watchlist /> */}
      <Footer />

    </div>
  );
}

export default App;
