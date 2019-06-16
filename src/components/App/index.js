import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import HomePage from '../Home';
import AboutPage from '../About';

//FrontEndProjects
import CipherPage from '../Cipher';
import MeetPokemonPage from '../MeetPokemon';
import MDlinksPage from '../MDlinks';
import BurgerQueenPage from '../BurgerQueen';

//Arts projects
import EternidadPage from '../Eternidad';
import ObraGrisPage from '../ObraGris';
import MoviestillPage from '../MoviestillProject';





function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/cipher" component={CipherPage} />
      <Route path="/meetpokemon" component={MeetPokemonPage} />
      <Route path="/mdlinks" component={MDlinksPage} />
      <Route path="/burgerqueen" component={BurgerQueenPage} />
      <Route path="/eternidad" component={EternidadPage} />
      <Route path="/obragris" component={ObraGrisPage} />
      <Route path="/moviestillproject" component={MoviestillPage} />
    </Router>
  );
}

export default App;
