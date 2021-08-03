import React, {useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WatchListNav from './components/navbar';
import List from './components/watchlist';
import Footer from'./components/footer';
import Search from "./components/searchbar";
import Login from "./components/login";



function App() {
  const [sessionToken, setSessionToken] = useState(undefined)

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

      

  const updateLocalStorage = newToken => {
    localStorage.getItem("token", newToken)
    setSessionToken(newToken)
  }

  const clearLocalStorage = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  const renderController = () => {
    return sessionToken !== undefined ?
    <Search sessionToken={sessionToken}/>
    : <Login updateLocalStorage= {updateLocalStorage} />
  }
  
  return (
    <div className="App">
    <WatchListNav clearSession = {clearLocalStorage} token={sessionToken}/>
   {renderController()}
   <List />
   <Footer />
    </div>
  );
}

export default App;
