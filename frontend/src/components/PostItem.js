import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as action from '../actions/Post'
import Comments from './Comments'
import { dispatchComments } from '../actions/Comments'

class PostItem extends React.Component {

  state = {
    postId: null,
    listPage: false
  }

  componentWillMount() {

    if (this.props.store.posts.length) {

      if (typeof this.props.match !== 'undefined') {
        this.setState(
          {
            postId: this.props.match.params.id, 
            listPage: false
          });
        this.props.dispatch(dispatchComments(this.props.match.params.id));
      } else if (typeof this.props.post !== 'undefined') {
        this.setState(
          {
            postId: this.props.post.id, 
            listPage: true
          });
        this.props.dispatch(dispatchComments(this.props.post.id));
      }
    } else {
      this.props.history.push('/404');
    }
  }

  updatePostVote = (post, option) => {
    const delta = option.option === "upVote" ? 1 : -1;
    post.voteScore = delta + post.voteScore;
    this.props.dispatch(action.updatePostVote(post, option));
  }

  deletePost = (post) => {
    this.props.dispatch(action.deletePost(post));
    this.props.history.push('/');
  }



  render() {
    const store = this.props.store;

    return (
      <section className="post-info">
        {store.posts.map( (post) =>
          post.id === this.state.postId && (
          <section key={post.id}>
            <article className="post" >
              <div className="post-controls">
                <Link to={`/edit/${post.id}`} className="post-control">
                  <i className="fa fa-edit fa-2x" ></i>
                </Link>
                <button 
                  onClick={(event) => this.deletePost(post)} 
                  className="post-control">
                  <i className="fa fa-trash fa-2x"></i>
                </button>
              </div>
              <div className="post-data">
                <button 
                  onClick={ (event) => 
                    this.updatePostVote( post, {
                      option: "upVote"
                    })
                  }  
                  className="post-control">
                    <i className="fa fa-plus fa-2x" ></i>
                </button>
                <button 
                  onClick={ (event) => 
                      this.updatePostVote(post, {
                        option: "downVote"
                      })
                    } 
                  className="post-control">
                    <i className="fa fa-minus fa-2x"></i>
                </button>
                <span className="post-data-vote">
                  {
                    post.voteScore} &nbsp;
                  Score
                </span>
              </div>
              { this.state.listPage ? (
              <Link to={`/${post.category}/${post.id}`}>
                <h2 className="post-title">{post.title}</h2>
              </Link>) : (
                <h2 className="post-title">{post.title}</h2>
              )}

              <div className="post-published">
                By&nbsp;<span className="post-author">
                  {post.author}
                </span>&nbsp;on&nbsp;
                <span className="post-date">
                  {new Date(post.timestamp).toDateString()}
                </span>
              </div>
              <p className="post-body">{post.body}</p>
              { this.state.listPage && (
                <p className="text-center">{ post.comments.length } Comments</p>
              )}

            </article>
            { !this.state.listPage && (
              <Comments post={ post }></Comments>
            )}
          </section>
          )

        )}

      </section>
    );
  }
}

function mapStateToProps(store) {
  const postKeys = Object.keys(store.posts);

  return {
    store: {
      posts: postKeys.map((key) => {
        const commentKeys = (typeof store.posts[key].comments === 'object' ? Object.keys(store.posts[key].comments) : []);
        return {
          ...store.posts[key],
          comments: commentKeys.map((k) => ({
              ...store.posts[key].comments[k]
          }))
        }
      })
    }
  }
}

export default connect(mapStateToProps)(PostItem);
