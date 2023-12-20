import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [account, setAccount] = useState<string>("");

  return (
    <div className="app">
      <Header />
      <Main account={(address) => setAccount(address)}/>
      <Footer displayCurrentAccount={account}/>
    </div>
  );
}

export default App;
