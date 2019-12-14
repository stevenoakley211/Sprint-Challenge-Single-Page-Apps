import React from "react";
import Header from "./components/Header.js";
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import CharacterList from "./components/CharacterList"
import WelcomePage from './components/WelcomePage';
export default function App() {
  return (
    <Router>
      <main>
        <Header />
        <Route exact Path="/" components={WelcomePage}/>
      </main>
    </Router>
  );
}
