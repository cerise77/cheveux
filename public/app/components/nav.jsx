import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';


class Nav extends React.Component{
    render(){
        return <div className="sticky">
            <label for="menu-trigger" className="img">

            </label>

            <input type="checkbox" id="menu-trigger" />

            <ul>
              <li><Link to="/" className="name">Главная</Link></li>
              <li><Link to="/services" className="name">Услуги</Link></li>
              <li><Link to="/brends" className="name">Бренды</Link></li>
              <li><Link to="/connect" className="name">Связаться с нами</Link></li>
              <li><Link to="/contact" className="name">Контакты</Link></li>
            </ul>
          </div>;
    }
}
module.exports = Nav;
