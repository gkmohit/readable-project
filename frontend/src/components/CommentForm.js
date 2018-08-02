import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/CommentForm';

class CommentForm extends React.Component {

  addComment = () => {
    this.props.dispatch(action.addComment(this.props.comment));
  };


  updateComment = () => {
    this.props.dispatch(action.updateComment(this.props.comment));
  };


  render() {
    const comment = this.props.comment;
    const edit = this.props.edit;

    return (
      <div className="add-comment">
        <form id="commentForm">
          <div className="form-group">
            <div className="form-input">
              <label>Your Comment</label>
              <textarea 
                name="body" 
                value={comment.body} 
                onChange={(event) => this.props.updateComment({
                  body: event.target.value
                })}>
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="form-input">
              <label>Your Name</label>
              <input 
                name="author" 
                value={comment.author} 
                type="text" 
                onChange={(event) => this.props.updateComment({
                  author: event.target.value
                })} />
            </div>
          </div>
          <div className="form-group">
            <div className="form-input">
              { edit ? (
                <button onClick={(event) => {
                  event.preventDefault()
                  this.updateComment()
                } }>Update Comment</button>
              ): (
                <button onClick={(event) => {
                  event.preventDefault()
                  this.addComment()
                } }>Add Comment</button>
              )}

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm)
