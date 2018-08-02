//Get Posts
export const getPosts = () => fetch(
  "http://localhost:3001/posts",
  { 
    headers: { 
      'Authorization': 'auth' }
    
    }
)

//Get Posts by Id
export const getPostById = (id) => fetch(
  `http://localhost:3001/posts/${id}`,
  { 
    headers: { 
      'Authorization': 'auth' 
    }
  }
)

//Add Post
export const addPost = (data) => {
  return fetch(
    "http://localhost:3001/posts",
    {
      headers: { 
      'Authorization': 'auth', 
      'Content-Type': 
      'application/json' 
    }, 
      method: "POST",
      body: JSON.stringify(data)
    }
  )
}

//Update exisiting post
export const updatePost = (data) => {
  return fetch(
    `http://localhost:3001/posts/${data.id}`,
    {
      headers: { 
      'Authorization': 'auth', 
      'Content-Type': 'application/json' 
    }, 
      method: "PUT",
      body: JSON.stringify(data)
    }
  )
}

//Update Post votes
export const updatePostVote = (id, option) => {
  return fetch(
    `http://localhost:3001/posts/${id}`,
    {
      headers: { 
      'Authorization': 'auth', 
      'Content-Type': 'application/json' 
    }, 
      method: "POST",
      body: JSON.stringify(option)
    }
  )
}

//Delete post
export const deletePost = (data) => {
  return fetch(
    `http://localhost:3001/posts/${data.id}`,
    {
      headers: { 
      'Authorization': 'auth', 
      'Content-Type': 'application/json' 
    },
      method: "DELETE"
    }
  )
}
