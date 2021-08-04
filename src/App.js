import React, {useEffect, useState} from "react"
import DisplayList from "./components/displayList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WatchListNav from './components/navbar';
import Footer from'./components/footer';
import Searchbar from "./components/searchbar";
import Login from "./components/login";
import {
  BrowserRouter as Router
} from "react-router-dom"


function App() {
  const [watchListToggle, setWatchListToggle] = useState(null)
  const [sessionToken, setSessionToken] = useState(undefined)
 
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

  
let watchListToggler = () => {
  setWatchListToggle(!watchListToggle)
}

let logoToggler = () => {
  setWatchListToggle(false)
}
  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  const clearSession = () => {
    setWatchListToggle(false)
    localStorage.clear()
    setSessionToken(undefined)
  }

  // const renderController = () => {
  // return watchListToggle === false ? <Searchbar sessionToken={sessionToken}/>
  //  : <DisplayList sessionToken={sessionToken}/>
  // }

  return (   
    <div className="App">
    <Router>
    <WatchListNav  sessionToken={sessionToken} clearSession = {clearSession} token={sessionToken} toggler={watchListToggler} logoToggler={logoToggler}/>
    </Router>
    {
      sessionToken === undefined &&
      <Login updateLocalStorage= {updateLocalStorage}/>
    }
    {/* {
      (sessionToken) &&
      renderController()
    } */}
    <Footer />
    </div>
  );
}

export default App;
