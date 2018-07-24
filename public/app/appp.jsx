import _ from 'lodash';

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';
import Connect from './components/connect.jsx';
import Brends from './components/brends.jsx';
import NotFound from './components/notfound.jsx';

/*import LeftNav from './components/leftnav.jsx';
import MenuLeft from './components/menuleft.jsx';*/

//import Flower from './components/flowers.jsx';

import './style.css';
import './animate.css';
import './animations.css';

//import './apper.js';
//import apper from './apper.js';

ReactDOM.render(
    <Router>
        <div>
           <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/brends" component={Brends} />
                <Route path="/connect" component={Connect} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)
