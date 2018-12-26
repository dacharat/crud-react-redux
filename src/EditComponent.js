import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleSubmit = e => {
    e.preventDefault(); // ไม่ให้ browser refresh หน้า
    const name = this.getName.value;
    const message = this.getMessage.value;
    const data = {
      name,
      message,
      editing: false
    };
    this.props.dispatch({
      type: 'UPDATE_COMMENT',
      id: this.props.comment.id,
      data: data
    })    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Enter your name"
            defaultValue={this.props.comment.name}
            ref={input => (this.getName = input)}
          />
          <br />
          <br />
          <textarea
            required
            row="5"
            cols="28"
            placeholder="Enter your message"
            defaultValue={this.props.comment.message}
            ref={input => (this.getMessage = input)}
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
