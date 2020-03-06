import React  from 'react';
import Api from '../../Api';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'data' : [], 'isLoading': true };
  }
  componentDidMount() {
    const postId = this.props.match.params.id;
    Api.get(`posts/${postId}`).then(res => {
      this.setState({
          data: res.data.data,
          isLoading: false
      });
    }).catch( error => {console.log(error)});
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
      <h2 className="bg-success p-1">Post: {this.state.data.title}</h2>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.data.id}</td>
              <td>{this.state.data.title}</td>
              <td>{this.state.data.description}</td>
              </tr>
          </tbody>
        </table>
      </div>;
    }
  }
};
export default Post;
