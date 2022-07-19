import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";

function App() {
  
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const [walletAddress, setAddress] = useState();

  useEffect(() => {
    if (isAuthenticated) {
      // add logic here
    }
    // eslint-disable-next-line
  }, [isAuthenticated]
  );


  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({signingMessage: "Log in using Moralis"})
        .then(function (user) {
          console.log("logged in user: ", user);
          console.log(user!.get("ethAddress"));
          alert(user!.get("ethAddress"))
          setAddress(user?.get("ethAddress"))
          

        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  return (
    
    
    <div className="App">

    <div>
      <h1>Hi Jax and Raghav!</h1>
      <h1>Address: {walletAddress}</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
    </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
