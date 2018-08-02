import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/Posts';
import PostItem from './PostItem';
import '../css/App.css';


class Posts extends React.Component {

  updatePostVote = (post, option) => {
    const delta = option.option === "upVote" ? 1 : -1;
    post.voteScore += delta;
    this.props.dispatch(action.updatePostVote(post, option))
  }

  render() {
    let posts = [];
    const match = this.props.match;
    const sort = this.props.sort;
    const store = this.props.store;
    const desc = this.props.desc;

    
    if (match) {
      posts = store.posts.filter((post) => {
        return post.category === match.params.category
      })
    } else {
      posts = store.posts;
    }

    posts.sort(function(a, b) {
      if (desc) {
        return b[sort] - a[sort]
      } else {
        return a[sort] - b[sort]
      }
    })

    return (
      <section className="all-posts">
        {posts.map((post) =>
          <PostItem key={post.id} post={post}></PostItem>
        )}
      </section>
    );
  }
}

function mapStateToProps(store) {


  const postKeys = Object.keys(store.posts);

  return {
    store: {
      posts: postKeys.map((key) => ({
        ...store.posts[key]
      }))
    }
  }
}

export default connect(mapStateToProps)(Posts);
