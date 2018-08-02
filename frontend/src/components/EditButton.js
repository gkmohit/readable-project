import React from 'react'
import { Link } from 'react-router-dom'

class EditButton extends React.Component {
  render() {
    return (
      <Link to={`/edit/${this.props.id}`} className="create-button">
        <i className="fa fa-pencil fa-2x"></i>
      </Link>
    );
  }
}

export default EditButton;
