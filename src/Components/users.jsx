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
      <table className="table table-dark table-striped mt-5">
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
    </div>;
  }
};
export default Users;
