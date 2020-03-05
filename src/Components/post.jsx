import React  from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'data' : [], 'isLoading': true };
  }
  componentDidMount() {
    const postId = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            isLoading: false
          });
        },
        (error) => {
          this.setState({
            isLoading: false
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
              <td>{this.state.data.body}</td>
              </tr>
          </tbody>
        </table>
      </div>;
    }
  }
};
export default Post;
