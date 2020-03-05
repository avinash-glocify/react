import React  from 'react';
import { NavLink } from 'react-router-dom'

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { 'data' : [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
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
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        { this.state.data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td><NavLink  activeClassName="active" className="nav-link" to={`/post/${item.id}`}>View</NavLink></td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>;
  }
};
export default Posts;
