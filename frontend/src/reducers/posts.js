import { ADD_POST, UPDATE_POST, DELETE_POST, RETRIEVE_POSTS } from '../constatns/postsConstants';
import { RETRIEVE_COMMENTS } from '../constatns/commentConstants';

export function posts(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case UPDATE_POST:
        return {
          ...state,
          [action.post.id]: action.post
        }
    case DELETE_POST:
        delete state[action.post.id];
        return {
          ...state,
        };
    case RETRIEVE_POSTS:
      const posts_obj = {};

      for (let post of action.posts) {
        posts_obj[post.id] = post;
      }

      return posts_obj;
    case RETRIEVE_COMMENTS:
      const comments_object = {};

      for (let comment of action.comments) {
        comments_object[comment.id] = comment;
      }

      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          comments: comments_object
        }
      }
    default:
      return state;
  }
}

export default posts;
