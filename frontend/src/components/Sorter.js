import React from 'react'


class Sorter extends React.Component {

  render() {
    const options = this.props.options;
    const sortPosts = this.props.sortPosts;
    const sort = this.props.sort;

    return (
      <ul className="sorter">
        {
          options.map( (option) =>
            <li 
              key={option.value} 
              className={
                "sorter-option " + (option.value === sort ? 'active' : '')
              } 
              onClick={ () => 
                (sortPosts(option.value))
              }
            >
              {option.text}
            </li>
        )}
      </ul>
    );
  }
}

export default Sorter;
