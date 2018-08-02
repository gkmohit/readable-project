import React from 'react'
import { connect } from 'react-redux'
import { dispatchPost } from '../actions/Post'
import * as action from '../actions/PostForm'

class PostForm extends React.Component {
  create = false

  componentWillMount() {
    if (typeof this.props.match !== 'undefined') {
      this.props.dispatch(dispatchPost(this.props.match.params.id))
    } else {
      this.props.dispatch(action.createPost())
      this.create = true
    }
  }

  
  editPost = (post, option) => {
    this.props.dispatch(action.editPost({
      ...post,
      ...option
    }))
  }

  
  addPost = (post) => {
    this.props.dispatch(action.addPost(post))
    this.props.history.push('/')
  }

  
  updatePost = (post) => {
    this.props.dispatch(action.updatePost(post))
    this.props.history.push('/')
  }

  render() {
    const { store, button } = this.props
    return (
      <section className="post-form">
        { this.create ? (
          <h1 className="post-title">Create Post</h1>
        ) : (
          <h1 className="post-title">Edit Post</h1>
        )}
        {store.post.map((post) =>
          <form key={ post.id } id="postForm">
            { this.create && (
              <div className="form-group">
                <div className="form-input">
                  <label>Post Author</label>
                  <input type="text" value={post.author} onChange={(e) => this.editPost(post, {author: e.target.value})} />
                </div>

                <div className="form-input">
                  <label>Category</label>
                  <select onChange={(e) => this.editPost(post, {category: e.target.value})}>
                    <option value="">Select a Category</option>
                    {store.categories.map((category) => (
                      <option key={category.path} value={category.path}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            <div className="form-group">
              <div className="form-input">
                <label>Post Title</label>
                <input type="text" value={post.title} onChange={(e) => this.editPost(post, {title: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
                <label>Post Body</label>
                <textarea value={post.body} onChange={(e) => this.editPost(post, {body: e.target.value})}></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
              { this.create ? (
                <button onClick={(e) => {
                  e.preventDefault()
                  this.addPost(post)
                }}>Create Post</button>
              ): (
                <button onClick={(e) => {
                  e.preventDefault()
                  this.updatePost(post)
                }}>Update Post</button>
              )}
              </div>
            </div>
          </form>
        )}
      </section>
    )
  }
}

function mapStateToProps(store) {
  const postKeys = Object.keys(store.post);
  const catKeys = Object.keys(store.categories);
  return {
    store: {
      post: postKeys.map((key) => {
        return {
          ...store.post[key]
        }
      }),
      categories: catKeys.map((key) => ({
        name: store.categories[key].name,
        path: store.categories[key].path
      }))
    }
  }
}

export default connect(mapStateToProps)(PostForm)
