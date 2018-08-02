import * as CommentsAPIUtil from '../util/comments_api_util'
import { RETRIEVE_COMMENTS, UPDATE_COMMENT, DELETE_COMMENT } from '../constatns/commentConstants'

export const retrieveComments = (parentId,comments) => ({
  type: RETRIEVE_COMMENTS,
  parentId,
  comments
})


export const dispatchComments = function(id) {
  return function (dispatch) {
    return CommentsAPIUtil.getComments(id)
      .then((res) => {
        return(res.json())
      })
      .then(function(comments) {
        return dispatch(retrieveComments(id, comments))
      })
  };
}


export const updateCommentVote = (comment, option) => {
  CommentsAPIUtil.updateCommentVote(comment.id, option);
  return {
    type: UPDATE_COMMENT,
    comment: comment
  }
}

export function deleteComment (comment) {
  CommentsAPIUtil.deleteComment(comment)
    .then((res) => { return res.text() })
  return {
    type: DELETE_COMMENT,
    comment
  }
}