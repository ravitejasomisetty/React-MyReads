import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Category from './category.js'

class BooksApp extends React.Component {
  componentDidMount(){
    BooksAPI.getAll().then(data => console.log(data))
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Category title='Currently Reading' books={[]} />
              <Category title='Want To Read' books={[]} />
              <Category title='Read' books={[]} />
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
