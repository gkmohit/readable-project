import * as PostsAPIUtil from '../util/posts_api_util';
import {CREATE_POST, UPDATE_POST, ADD_POST, EDIT_POST} from '../constatns/postsConstants';

const uuidv1 = require('uuid/v1');

export function createPost () {
  return {
    type: CREATE_POST,
    post: {
      id: uuidv1(),
      timestamp: Date.now(),
      title: "",
      body: "",
      author: "",
      catagory: "",
      voteScore: 1,
      deleted: false
    }
  }
}

export function updatePost (post) {
  putPost(post);
  return {
    type: UPDATE_POST,
    post
  }
}

const putPost = function(post) {
  PostsAPIUtil.updatePost(post)
    .then((res) => { return res.text() })
}


export function addPost (post) {
  publishPost(post);
  return {
    type: ADD_POST,
    post
  }
}

const publishPost = function(post) {
  PostsAPIUtil.addPost(post)
    .then((res) => { return res.text() })
}


export function editPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

