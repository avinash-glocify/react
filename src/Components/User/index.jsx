import React  from 'react';
import { Link } from 'react-router-dom'

class Users extends React.Component {
  constructor() {
    super();
    this.state = { 'data' : [] };
  }
  componentDidMount() {
    fetch(`http://gis.co/api/auth/users`,{ method: 'get'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return <div className="container">
      <div className="card">
        <div className="card-header">
        <h2>Users</h2>
        </div>
        <div className="card-body">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            { this.state.data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><Link className="nav-link" to={`/user/${item.id}`}>View</Link></td>
              </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>;
  }
};
export default Users;
