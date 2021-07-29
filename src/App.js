import React from "react"
import './App.css';
import WatchListNav from './components/navbar';
import List from './components/watchlist';

function App() {
  return (
    <div className="App">
     <WatchListNav />
     <List />
    </div>
  );
}

export default App;
