import * as PostsAPIUtil from '../util/posts_api_util';
import { ADD_POST, CREATE_POST, EDIT_POST, UPDATE_POST, DELETE_POST, RETRIEVE_POST, } from '../constatns/postsConstants';

const uuidv1 = require('uuid/v1');


export function deletePost (post) {
  PostsAPIUtil.deletePost(post)
    .then( (res) => { 
      return res.text() 
    })
  return {
    type: DELETE_POST,
    post
  }
}


export const retrievePost = post => ({
  type: RETRIEVE_POST,
  post
})

export const dispatchPost = function(id) {
  return function (dispatch) {
    return PostsAPIUtil.getPostById(id)
      .then( (res) => {
        return(res.json())
      })
      .then(function(post) {
        return dispatch( retrievePost(post) )
      }
    )
  }
}


export const updatePostVote = (post, option) => {
  PostsAPIUtil.updatePostVote(post.id, option)
  return {
    type: UPDATE_POST,
    post
  }
}

