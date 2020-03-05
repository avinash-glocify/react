import React  from 'react';
import './App.css';
import Navebar from './Components/Common/navebar.jsx';

const template = <div className="App">
    <Navebar />
  </div>;

class App extends React.Component {
  render() {
    return template;
  }
}

export default App;
