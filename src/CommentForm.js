import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <div>
        <h1>Add Comment</h1>
        <form>
          <input required type="text" placeholder="Enter your name" />
          <br />
          <br />
          <textarea
            required
            row="5"
            cols="28"
            placeholder="Enter your message"
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
