import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

const template = <nav class="navbar bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 3</a>
    </li>
  </ul>

</nav>

class SIdebar extends React.Component {
  render() {
    return template;
  }
};
export default SIdebar;
