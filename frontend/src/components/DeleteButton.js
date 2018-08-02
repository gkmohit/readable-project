import React from 'react';

class DeleteButton extends React.Component {
  render() {
    return (
      <button 
        onClick={ (event) => 
          this.props.deleteItem(this.props.item)
        } 
        className="create-button">
        <i className="fa fa-trash fa-2x"></i>
      </button>
    );
  }
}

export default DeleteButton;
