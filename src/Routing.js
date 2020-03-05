import React from 'react';
import Users from './Components/users.jsx';
import User from './Components/user.jsx';
import Contact from './Components/contact.jsx';
import Posts from './Components/posts.jsx';
import Post from './Components/post.jsx';
import Login from './Components/login.jsx';
import Gallery from './Components/gallery.jsx';
import Navebar from './Components/Common/navebar.jsx';
import Home from './Components/home.jsx';
import Register from './Components/register.jsx';
import Footer from './Components/Common/footer.jsx';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const routing = (
  <Router>
    <Navebar />
    <div>
      <Route exact path="/" component={Home}></Route >
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Posts} />
      <Route path="/post/:id" component={Post} />
      <Route path="/users" component={Users} />
      <Route path="/user/:id" component={User} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/Register" component={Register} />
    </div>
    <Footer />
  </Router>
)
export default routing;
