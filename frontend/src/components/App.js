import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import CreateNewPost from './CreateNewPost';
import Posts from './Posts';
import PostItem from './PostItem';
import Sorter from './Sorter';
import PostForm from './PostForm';
import '../css/App.css';
import FourOFour from './FourOFour';


class App extends React.Component {
  state = {
    posts: {
      sort: 'voteScore',
      desc: true,
      options: [
        {text: "Sort By Votes", value: 'voteScore'},
        {text: "Sort by Date", value: 'timestamp'}
      ]
    },
    post:[]
  };

  sortPosts = (sort) => {
    const desc = this.state.posts.sort === sort ? !this.state.posts.desc : this.state.posts.desc

    this.setState({
      posts: {
        ...this.state.posts,
        sort: sort,
        desc: desc
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <div className="button-bar">
            <CreateNewPost />
          </div>
        )} />

        <Route exact path="/:category" render={() => (
          <div className="button-bar">
            <CreateNewPost />
          </div>
        )} />

        <Route exact path="/" render={() => (
          <section>
            <Sorter 
              options={this.state.posts.options} 
              sortPosts={this.sortPosts} 
              sort={this.state.posts.sort} />
            <Posts 
              sort={this.state.posts.sort} 
              desc={this.state.posts.desc} />
          </section>
        )} />

        <Route exact path="/:category" render={({match}) => (
          <section>
            <Sorter 
              options={this.state.posts.options} 
              sortPosts={this.sortPosts} 
              sort={this.state.posts.sort} />
            <Posts 
              match={match} 
              sort={this.state.posts.sort} 
              desc={this.state.posts.desc} />
          </section>
        )} />

        <Route exact path="/:category/:id" render={({match, history}) => (
          <PostItem 
            match={match} 
            history={history} />
        )} />

        <Route exact path="/createPost" render={({history}) => (
          <PostForm history={history}/>
        )} />

        <Route exact path="/edit/:id" render={({match, history}) => (
          <PostForm 
            match={match} 
            history={history} />
        )} />
        
        <Route exact path="/404" render={() => (
          <FourOFour />
        )} />
      </div>
    );
  }
}

export default App;
