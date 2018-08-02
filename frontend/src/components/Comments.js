import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import * as action from '../actions/Comments';

const uuidv1 = require('uuid/v1');

class Comments extends React.Component {
  state = {
    comment: {},
    edit: false
  };

  componentWillMount() {
    this.props.dispatch(action.dispatchComments(this.props.post.id));
    this.resetComment();
  }

  resetComment = () => {
    this.setState({
      comment: {
        id: uuidv1(),
        parentId: this.props.post.id,
        timestamp: Date.now(),
        body: "",
        author: "",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    })
  }

  updateComment = (item) => {
    this.setState({
      comment: {
        ...this.state.comment,
        ...item
      }
    })
  }

  updateCommentVote = (comment, option) => {
    const delta = option.option === "upVote" ? 1 : -1;
    comment.voteScore = delta + comment.voteScore;
    this.props.dispatch(action.updateCommentVote(comment, option))
  }

  editComment = (comment) => {
    comment.timestamp = Date.now()

    this.setState({
      comment: comment,
      edit: true
    })
  }

  deleteComment = (comment) => {
    this.props.dispatch(action.deleteComment(comment))
  }


  render() {
    const store = this.props.store;
    const post = this.props.post;

    
    store.comments.sort(function(a, b) {
        return b['voteScore'] - a['voteScore']
    })

    return (
      <aside className="post-comments">
        <h3 className="comments-title">   
          {store.comments.length} Comments
        </h3>
        {
          store.comments.map( (comment) =>
            <div className="post-comment" key={comment.id}>
              <div className="post-comment-button-bar">
                <button 
                  onClick={(event) => this.editComment(comment)} 
                  className="post-comment-control">
                    <i className="fa fa-edit fa-2x" ></i>
                </button>
                <button 
                  onClick={(event) => this.deleteComment(comment)} 
                  className="post-comment-control">
                    <i className="fa fa-trash fa-2x" ></i>
                </button>
              </div>
              <div 
                className="comment-author">
                  {comment.author}&nbsp;&nbsp;
                  <span className="comment-date">
                    {new Date(comment.timestamp).toDateString()}
                  </span>
              </div>
              <div className="comment-vote">
                <button 
                  onClick={ ( event ) => this.updateCommentVote(comment, {
                    option: "downVote"
                  })} 
                  className="post-comment-control">
                    <i className="fa fa-minus" ></i>
                </button>
                <button 
                  onClick={ ( event ) => this.updateCommentVote(comment, {
                    option: "upVote"
                  })} 
                  className="post-comment-control"><i className="fa fa-plus" ></i></button>
                  &nbsp;
                  {comment.voteScore}
              </div>
              <div className="comment-body">
                {comment.body}
              </div>

            </div>
        )}
        <CommentForm 
          parentId={post.id} 
          comment={this.state.comment} 
          updateComment={this.updateComment} 
          edit={this.state.edit} />
      </aside>
    )
  }
}

function mapStateToProps(store) {

  const commentsKeys = Object.keys(store.comments);
  return {
    store: {
      comments: commentsKeys.map((key) => {
        return {
          ...store.comments[key]
        }
      })
    }
  }
}

export default connect(mapStateToProps)(Comments);
