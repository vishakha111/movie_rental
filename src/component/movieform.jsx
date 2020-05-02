import React, { Component } from "react";

class MoviesDetails extends Component {
  handleSave = () => {
    //Navigate to /moviess
    // this.props.history.push('/movies');
    this.props.history.replace('/movies');
  };

  render() {
    return (
      <div>
        <h1>Movies Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MoviesDetails;
