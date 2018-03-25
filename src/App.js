import React from 'react'
import './App.css'
import { Route } from 'react-router'
import BooksApp from './BooksApp';
import SearchBook from './SearchBook';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BooksApp} />
        <Route path='/search' component={SearchBook} />
      </div>
    )
  }
}

export default App
