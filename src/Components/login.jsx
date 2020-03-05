import React from 'react';
import axios from 'axios';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  onSubmit = () => {
    console.log(this.state);
    axios.post('http://gis.co/api/auth/login', this.state ).then(res => {
      console.log(res);
    }).catch(error => { console.log(error)})

  }
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3 mt-5">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Email address:</label>
                  <input type="email" className="form-control" name ="email" placeholder="Enter email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}/>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" id="pwd" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                  </label>
                </div>
                <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
};
export default User;
