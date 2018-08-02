//Get Comments
export const getComments = (id) => fetch(
  `http://localhost:3001/posts/${id}/comments`,
    { 
      headers: { 
        'Authorization': 'auth' 
      }
    }
);

//Post Comments
export const addComment = (data) => {
  return fetch(
    "http://localhost:3001/comments",
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

//Update Comment Votes
export const updateCommentVote = (id, option) => {
  return fetch(
    `http://localhost:3001/comments/${id}`,
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

//Update Comments
export const updateComment = (data) => {
  return fetch(
    `http://localhost:3001/comments/${data.id}`,
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

//Delete Comments
export const deleteComment = (data) => {
  return fetch(
    `http://localhost:3001/comments/${data.id}`,
    {
      headers: { 
        'Authorization': 'auth', 
        'Content-Type': 'application/json' 
      },
      method: "DELETE"
    }
  )
}
