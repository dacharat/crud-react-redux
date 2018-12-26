import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";

class ShowComment extends Component {
  render() {
    return (
      <div>
        <h1>Show All Commment</h1>
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state
  };
};

export default connect(mapStateToProps)(ShowComment);
