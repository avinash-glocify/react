import React from 'react';
import Users from '../Components/users.jsx';
import User from '../Components/user.jsx';
import Contact from '../Components/contact.jsx';
import Posts from '../Components/posts.jsx';
import Post from '../Components/post.jsx';
import Login from '../Components/login.jsx';
import Gallery from '../Components/gallery.jsx';
import Navebar from '../Components/Common/navebar.jsx';
import Home from '../Components/home.jsx';
import Register from '../Components/register.jsx';
import Footer from '../Components/Common/footer.jsx';
import PrivateRoute from './PrivateRoute.js';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// localStorage.setItem('_token', '');
const token = localStorage.getItem('_token');

const routing = (
    <Router>
      <Navebar />
      <div>
        <Route exact path="/" component={Home}></Route >
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register}/>
        <PrivateRoute path="/posts" component={Posts} isLoggedIn={token} />
        <PrivateRoute path="/post/:id" component={Post} isLoggedIn={token} />
        <PrivateRoute path="/user/:id" component={User} isLoggedIn={token} />
        <PrivateRoute path="/gallery" component={Gallery} isLoggedIn={token} />
        <PrivateRoute path="/users" component={Users} isLoggedIn={token} />
      </div>
      <Footer />
    </Router>
)
export default routing;
