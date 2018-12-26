import React, { Component } from "react";
import { connect } from "react-redux";

class CommentForm extends Component {
  handleSubmit = e => {
    e.preventDefault(); // ไม่ให้ browser refresh หน้า
    const name = this.getName.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      name,
      message
    };
    this.getName.value = "";
    this.getMessage.value = "";
    this.props.dispatch({
      type: "ADD_COMMENT",
      data
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Add Comment</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Enter your name"
            ref={input => (this.getName = input)}
          />
          <br />
          <br />
          <textarea
            required
            row="5"
            cols="28"
            placeholder="Enter your message"
            ref={input => (this.getMessage = input)}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
