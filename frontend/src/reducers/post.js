import { EDIT_POST, RETRIEVE_POST, CREATE_POST, } from '../constatns/postsConstants';

export function post(state = {}, action) {
  switch(action.type) {
    case RETRIEVE_POST:
      return {[action.post.id]: action.post}
    case EDIT_POST:
      return {[action.post.id]: action.post}
    case CREATE_POST:
      return {[action.post.id]: action.post}
    default:
      return state
  }
}

export default post
