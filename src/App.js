import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgRef: "",
    };
  }
  fileSelectHandler(e) {
    const file = e.target.files[0];
    this.setState({
      imgRef: URL.createObjectURL(file),
    });
  }

  render() {
    return (
      <div>
        <input
          type="file"
          name="photo"
          onChange={this.fileSelectHandler.bind(this)}
        />
        <img src={this.state.imgRef} alt="" />
      </div>
    );
  }
}

export default App;
