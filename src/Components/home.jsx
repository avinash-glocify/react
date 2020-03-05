import React  from 'react';
import Service from './service.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'data' : [] };
  }
  render() {
    return <div className="container-fluid bg-1 text-center">
      <h3>Who Am I?</h3>
      <img src="https://www.w3schools.com/bootstrap/bird.jpg" className="img-circle" alt="Bird" width="350" height="350" />
      <h3>I'm an adventurer</h3>
      <div className="container-fluid bg-2 text-center">
        <h3>What Am I?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="container-fluid bg-3 text-center">
          <h3>Where To Find Me?</h3>
          <div className="row">
            <div className="col-sm-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <img src="https://www.w3schools.com/bootstrap/birds1.jpg" alt="Image1" width="350" height="300" />
            </div>
            <div className="col-sm-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <img src="https://www.w3schools.com/bootstrap/birds2.jpg" alt="Image2" width="350" height="300" />
            </div>
            <div className="col-sm-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <img src="https://www.w3schools.com/bootstrap/birds3.jpg" alt="Image3" width="350" height="300" />
            </div>
          </div>
        </div>
      </div>
      <Service />
    </div>;
  }
};
export default Home;
