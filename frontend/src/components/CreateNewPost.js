import React from 'react'
import { Link } from 'react-router-dom'

class CreateNewPost extends React.Component {
  render() {
    return (
      <Link to="/createPost" className="create-button">
        <i className="fa fa-plus fa-2x"></i>
      </Link>
    );
  }
}

export default CreateNewPost;
