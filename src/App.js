import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Category from './category.js'

class BooksApp extends React.Component {

 categorizeBooks = function(books){
    const booksByCategory = {};
    for (let i = 0; i < books.length; i++) {
      const bookCategory = books[i].shelf;
      if(booksByCategory.hasOwnProperty(bookCategory)){
        booksByCategory[bookCategory].push(books[i]);
      }
      else{
        booksByCategory[bookCategory]=[];
        booksByCategory[bookCategory].push(books[i]);
      }
    }

    this.setState(booksByCategory);
  };

  componentDidMount(){
    BooksAPI.getAll().then(books => this.categorizeBooks(books));
  }

  state = {}

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Category title='Currently Reading' books={this.state.currentlyReading} />
              <Category title='Want To Read' books={this.state.wantToRead} />
              <Category title='Read' books={this.state.read} />
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
