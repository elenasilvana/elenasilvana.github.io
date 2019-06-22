import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

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
      <Navigation />
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
};


const Navigation = () => (
  <div className="NavBar">
    <nav>
      <ul>
        <li>
        <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
        <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
        <Link to={ROUTES.CIPHER}>cipher</Link>
        </li>
        <li>
        <Link to={ROUTES.MEETPOKEMON}>meet pokemon</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
  
  

export default App;
