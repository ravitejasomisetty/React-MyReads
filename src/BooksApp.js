import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Category from './category.js'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {

    state = {}

    componentDidMount() {
        BooksAPI.getAll().then(books => this.categorizeBooks(books));
    }

    categorizeBooks = function (books) {
        const booksByCategory = {};
        for (let i = 0; i < books.length; i++) {
            const bookCategory = books[i].shelf;
            if (booksByCategory.hasOwnProperty(bookCategory)) {
                booksByCategory[bookCategory].push(books[i]);
            }
            else {
                booksByCategory[bookCategory] = [];
                booksByCategory[bookCategory].push(books[i]);
            }
        }

        this.setState(booksByCategory);
    };

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() =>
            BooksAPI.getAll().then(books => this.categorizeBooks(books)));
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Category title='Currently Reading' books={this.state.currentlyReading}
                        onBookUpdate={(book, shelf) => this.updateBook(book, shelf)} />
                    <Category title='Want To Read' books={this.state.wantToRead}
                        onBookUpdate={(book, shelf) => this.updateBook(book, shelf)} />
                    <Category title='Read' books={this.state.read}
                        onBookUpdate={(book, shelf) => this.updateBook(book, shelf)} />
                </div>
                <div className="open-search">
                    <Link to='/searchBook'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksApp