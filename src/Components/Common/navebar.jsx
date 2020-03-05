import React from 'react';
import { NavLink } from 'react-router-dom'

const template = <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink  activeClassName="active" className="nav-link" to="/users">User</NavLink>
    </li>
    <li className="nav-item">
     <NavLink  activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
    </li>
  </ul>
  <ul className="navbar-nav float-right">
    <li className="nav-item">
      <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact activeClassName="active" className="nav-link" to="/register">Regiser</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact activeClassName="active" className="nav-link" to="/posts">Posts</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact activeClassName="active" className="nav-link" to="/gallery">Gallery</NavLink>
    </li>
  </ul>
</nav>;

class Navebar extends React.Component {
  render() {
    return template;
  }
};
export default Navebar;
