import { RETRIEVE_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../constatns/commentConstants';

export function comments(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_COMMENTS:
      const comments_object = {};

      for (let comment of action.comments) {
        comments_object[comment.id] = comment;
      }

      return comments_object

    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case DELETE_COMMENT:
        delete state[action.comment.id]
        return {
          ...state,
        }
    default:
      return state
  }
}

export default comments
