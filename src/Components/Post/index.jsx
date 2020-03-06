import React  from 'react';
import { NavLink } from 'react-router-dom'
import Api from '../../Api';


class Posts extends React.Component {
  constructor() {
    super();
    this.state = { 'data' : [] };
  }
  componentDidMount() {
    Api.get('posts').then(res => {
      this.setState({ data: res.data.data })
    }).catch(error => { console.log(error) })
  }
  render() {
    return <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <h2 className="d-inline">Posts</h2>
          <NavLink  className="nav-link btn btn-success float-right" to={`/posts/create`}>New Post</NavLink>
        </div>
        <div className="card-body">
          <table className="table table-dark table-striped">
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
                <td>{item.description}</td>
                <td><NavLink  activeClassName="active" className="nav-link" to={`/post/${item.id}`}>View</NavLink></td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>;
  }
};
export default Posts;
