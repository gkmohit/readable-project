import * as PostsAPIUtil from '../util/posts_api_util'
import { UPDATE_POST } from '../constatns/postsConstants'


export const updatePostVote = (post, option) => {
  PostsAPIUtil.updatePostVote(post.id, option)

  return {
    type: UPDATE_POST,
    post
  }
}
