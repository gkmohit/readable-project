import * as CommentsAPIUtil from '../util/comments_api_util'
import { UPDATE_COMMENT,ADD_COMMENT} from '../constatns/commentConstants'

export const addComment = comment => {
  CommentsAPIUtil.addComment(comment)

  return {
    type: ADD_COMMENT,
    comment: comment
  }
}

export const updateComment = (comment) => {
  CommentsAPIUtil.updateComment(comment)

  return {
    type: UPDATE_COMMENT,
    comment: comment
  }
}
