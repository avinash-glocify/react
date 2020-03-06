import React from 'react';
import Api from '../../Api';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Post : {
          title : '',
          description : '',
        },
        Errors: []
    };
  }
  onSubmit = (event) => {
    Api.post('posts/create', this.state.Post ).then(res => {
      this.props.history.push('/posts')
    }).catch(error => {
      this.setState({
        Errors: error.response.data.errors
      });
    })
  }
  onChange = e => {
    console.log(e.target);
    const column = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      Post: {
        ...prevState.Post,
        [column] : value
      }
    }))
  }
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3 mt-5">
          <div className="card">
            <div className="card-header">
              Post
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Title:</label>
                  <input type="text" name="title"  className="form-control"  placeholder="Enter Post Title" id="title" onChange={this.onChange} value={this.state.Post.title === null ? '' : this.state.Post.title}/>
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.title: ''}
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" name="description" placeholder="Enter Post Description" onChange={this.onChange} value={this.state.Post.description === null ? '' : this.state.Post.description} id="description" />
                  <div className="invalid-feedback d-block">
                    { this.state.Errors ? this.state.Errors.description: ''}
                  </div>
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
export default CreatePost;
