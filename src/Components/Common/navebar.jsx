import React from 'react';
import { NavLink } from 'react-router-dom';

class Navebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : localStorage.getItem('_token') ? true : false
    };
  }
  logout = e => {
    localStorage.setItem('_token', '');
    window.location.href="/"
  }
  render() {
    return  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
      { this.state.isLoggedIn &&
        <li className="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
        </li>
      }
      { this.state.isLoggedIn &&
        <li className="nav-item">
          <NavLink  activeClassName="active" className="nav-link" to="/users">User</NavLink>
        </li>
      }
      { this.state.isLoggedIn &&
        <li className="nav-item">
         <NavLink  activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
      }
      </ul>
      <ul className="navbar-nav float-right">
      { !this.state.isLoggedIn &&
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        </li>
      }
      { !this.state.isLoggedIn &&
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/register">Regiser</NavLink>
        </li>
      }
        { this.state.isLoggedIn &&
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/posts">Posts</NavLink>
        </li>
      }
      { this.state.isLoggedIn &&
        <li className="nav-item">
          <button className="btn nav-link" onClick={this.logout}>Logout</button>
        </li>
      }
      </ul>
    </nav>;
  }
};
export default Navebar;
