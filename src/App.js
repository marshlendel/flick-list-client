import React, {useEffect, useState} from "react"
import DisplayList from "./displayList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WatchListNav from './components/navbar';
import Footer from'./components/footer';
import Searchbar from "./components/searchbar";
import Login from "./components/login";


function App() {
  const [watchListToggle, setWatchListToggle] = useState(false)
  const [sessionToken, setSessionToken] = useState(undefined)
 
  useEffect(() => {
    if(localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

  
let watchListToggler = () => {
  setWatchListToggle(!watchListToggle)
}

  const updateLocalStorage = newToken => {
    localStorage.getItem("token", newToken)
    setSessionToken(newToken)
  }

  const clearSession = async () => {
    await setWatchListToggle(false)
    localStorage.clear()
    setSessionToken(undefined)
  }

  const renderController = () => {
  return watchListToggle === false ? <Searchbar sessionToken={sessionToken}/>
   : <DisplayList />
  }

  return (   
    <div className="App">
    <WatchListNav clearSession = {clearSession} token={sessionToken} toggler={watchListToggler}/>
    {
      sessionToken === undefined &&
      <Login updateLocalStorage= {updateLocalStorage} />
    }
    {
      (sessionToken) &&
      renderController()
    }
    <Footer />
    </div>
  );
}

export default App;
