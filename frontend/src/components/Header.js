import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/App.css';


class Header extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/"><i className="fa fa-home fa-2x" ></i></Link>
          </li>
          { store.categories.map((category) =>
            <li 
              className="nav-item" 
              key={category.name}>
                <Link 
                  to={`/${category.path}`}>
                    {category.name}
                </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(store) {
  const categoriesKeys = Object.keys(store.categories);
  return {
    store: {
      categories: categoriesKeys.map((key) => ({
        name: store.categories[key].name,
        path: store.categories[key].path
      }))
    }
  }
}

export default connect(mapStateToProps)(Header);
