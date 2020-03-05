import React  from 'react';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { 'data' : [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
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
      <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>
      <div className="row text-center text-lg-left">
      { this.state.data.map(item => (
        <div className="col-lg-3 col-md-4 col-6" key={item.id}>
          <button  className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src={ `${item.thumbnailUrl}`} alt="" />
          </button>
        </div>
      ))}
      </div>
    </div>;
  }
};
export default Gallery;
