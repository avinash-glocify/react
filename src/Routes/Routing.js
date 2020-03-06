import React from 'react';
import Users from '../Components/User/index.jsx';
import User from '../Components/User/view.jsx';
import Profile from '../Components/User/profile.jsx';
import Contact from '../Components/contact.jsx';
import Posts from '../Components/Post/index.jsx';
import Post from '../Components/Post/view.jsx';
import CreatePost from '../Components/Post/create.jsx';
import Login from '../Components/Auth/login.jsx';
import Gallery from '../Components/gallery.jsx';
import Navebar from '../Components/Common/navebar.jsx';
import Home from '../Components/home.jsx';
import Register from '../Components/Auth/register.jsx';
import Footer from '../Components/Common/footer.jsx';
import PrivateRoute from './PrivateRoute.js';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const token = localStorage.getItem('_token');

const routing = (
    <Router>
      <Navebar />
      <div>
        <Route exact path="/" component={Home}></Route >
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register}/>
        <PrivateRoute exact path="/posts" component={Posts} isLoggedIn={token} />
        <PrivateRoute path="/posts/create" component={CreatePost} isLoggedIn={token} />
        <PrivateRoute path="/post/:id" component={Post} isLoggedIn={token} />
        <PrivateRoute path="/user/:id" component={User} isLoggedIn={token} />
        <PrivateRoute path="/users" component={Users} isLoggedIn={token} />
        <PrivateRoute path="/user/profile" component={Profile} isLoggedIn={token} />
        <PrivateRoute path="/gallery" component={Gallery} isLoggedIn={token} />
      </div>
      <Footer />
    </Router>
)
export default routing;
