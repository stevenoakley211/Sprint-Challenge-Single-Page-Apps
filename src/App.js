import React from "react";
import Header from "./components/Header.js";
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import CharacterList from "./components/CharacterList"
import WelcomePage from './components/WelcomePage';
import SearchForm from "./components/SearchForm.js";
export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/character-list">Characters</Link>
        </nav>
        <Header />
        <Route exact Path="/" component={WelcomePage}/>
        <Route path="/character-list" component={SearchForm} />
      </main>
    </Router>
  );
}
