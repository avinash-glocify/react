import React  from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'user' : [], 'isLoading': true };
  }
  componentDidMount() {
    const userId = this.props.match.params.id
    fetch(`http://gis.co/api/auth/users/${userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: result.data,
            isLoading: false,
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
            error
          });
        }
      )
  }
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3 mt-5">
          <div className="card">
            <div className="card-header">
              Register
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Firs Name:</label>
                  <input type="text" name="first_name"  className="form-control"  placeholder="Enter First Name" id="first_name" onChange={this.onChange} value={this.state.first_name === null ? '' : this.state.first_name}/>
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.first_name: ''}
                  </div>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" name="last_name" placeholder="Enter Last Name" onChange={this.onChange} value={this.state.last_name === null ? '' :this.state.last_name} id="last_name" />
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.last_name: ''}
                  </div>
                </div>
                <div className="form-group">
                  <label>Email address:</label>
                  <input type="email" className="form-control" placeholder="Enter email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.email: ''}
                  </div>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" name="password" id="pwd" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.password: ''}
                  </div>
                </div>
                <div className="form-group">
                  <label> Confirm Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" name="password_confirmation" id="pwd2" onChange={this.onChange} value={this.state.password_confirmation === null ? '' : this.state.password_confirmation} />
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
export default Profile;
