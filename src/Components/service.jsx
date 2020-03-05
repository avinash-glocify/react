import React from 'react';

const template = <div className="container-fluid text-center bg-3 ">
      <h2 className="mb-4">SERVICES</h2>
      <div className="row">
          <div className="col-sm-4">
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <h4>LOVE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <h4>CERTIFIED</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="col-sm-4">
          <h4 >HARD WORK</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>;

class Service extends React.Component {
  render() {
    return template;
  }
};
export default Service;
