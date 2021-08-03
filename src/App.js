import React, {useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WatchListNav from './components/navbar';
import Footer from'./components/footer';
import Search from "./components/searchbar";
import Login from "./components/login";
import List from './components/watchlist';



function App() {

  const [sessionToken, setSessionToken] = useState("")

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

      

  const updateLocalStorage = (newToken) => {
    localStorage.getItem("token", newToken)
    setSessionToken(newToken)
    console.log(sessionToken)
  }

  const clearLocalStorage = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  // const renderController = () => {
  //   return sessionToken !== undefined ?
  //   <Search sessionToken={sessionToken}/>
  //   : <Login updateLocalStorage= {updateLocalStorage} />
  // }
  const renderController = () => {
    return sessionToken === localStorage.getItem("token") ?
    <Search sessionToken = {sessionToken} /> : 
    <Login updateLocalStorage = {updateLocalStorage} />
  }
  
  return (
    <div className="App">
    <WatchListNav token={sessionToken}/>
   {renderController()}
   <List token = {sessionToken}/>
   <Footer />
    </div>
  );
}

export default App;
