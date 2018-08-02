import * as PostsAPIUtil from '../util/posts_api_util';
import * as CategoriesAPIUtil from '../util/categoryies_api_util';
import { RETRIEVE_CAT } from '../constatns/categoriesContants';
import { RETRIEVE_POSTS } from '../constatns/postsConstants';

/* Actions related to posts */
export const retrievePosts = posts => ({
  type: RETRIEVE_POSTS,
  posts
})

export const dispatchPosts = function() {
  return function (dispatch) {
    return PostsAPIUtil.getPosts()
      .then( (res ) => {
        return(res.json())
      }).then(function(posts) {
        return dispatch(retrievePosts(posts))
      }
    )
  }
}

/* Actions related to catagories */
export const retrieveCat = categories => ({
  type: RETRIEVE_CAT,
  categories
})

export const dispatchCat = function() {
  return function (dispatch) {
    return CategoriesAPIUtil.getCategories()
      .then((res) => {return(res.json())})
      .then(function(data) {
        return dispatch(retrieveCat(data.categories))
      }
    )
  }
}
