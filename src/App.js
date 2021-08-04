import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import WatchListNav from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const clearSession = () => {
    localStorage.clear();
    setSessionToken(undefined);
  };

  return (
    <div className="App">
      <Router>
        <WatchListNav
          sessionToken={sessionToken}
          clearSession={clearSession}
          token={sessionToken}
        />
      </Router>
      {sessionToken === undefined && (
        <Login updateLocalStorage={updateLocalStorage} />
      )}
      <Footer />
    </div>
  );
}

export default App;
