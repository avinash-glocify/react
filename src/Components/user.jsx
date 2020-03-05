import React  from 'react';

class User extends React.Component {
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
    if(this.state.isLoading) {
    return <div className="container">
              <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>;
    } else {
      return <div className="container">
      <h2 className="bg-success p-1">User Name: {this.state.user.first_name } { this.state.user.last_name}</h2>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
      <tbody>
        <tr key={this.state.user.id}>
          <td>{this.state.user.id}</td>
          <td>{this.state.user.first_name}</td>
          <td>{this.state.user.last_name}</td>
          <td>{this.state.user.email}</td>
        </tr>
      </tbody>
      </table>
      </div>;
    }
  }
};
export default User;
