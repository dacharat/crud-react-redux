import React from "react";
import { connect } from "react-redux";

class Comment extends React.Component {
  handleDelete = () => {    
    this.props.dispatch({ type: "DELETE_COMMENT", id: this.props.comment.id });
  };

  render() {
    return (
      <div>
        <h2>{this.props.comment.name}</h2>
        <p>{this.props.comment.message}</p>
        <button>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default connect()(Comment);
