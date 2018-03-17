import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import InputBoxDoneTyping from 'react-input-box-done-typing'

class SearchBook extends React.Component {

    state = { query: '', booksMatched: [] }

    clearBooks = () => {
        this.setState({ booksMatched: [] });
    }

    searchByQuery = (newQuery) => {
        this.clearBooks();
        if (newQuery) {
            this.findMatchingBooks(newQuery);
        }
    }

    findMatchingBooks = (newQuery) => {
        BooksAPI.search(newQuery).then(books => {
            this.mergeWithBooksInShelf(books);
        })
            .catch((err) => {
                this.clearBooks();
            });
    }

    mergeWithBooksInShelf(books) {
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            this.replaceBook(book.id);
        }
    }

    replaceBook(bookId) {
        BooksAPI.get(bookId).then(book => {
            this.setState((prevState) => {
                const idx = prevState.booksMatched.findIndex((prevBook) => prevBook.id === book.id);
                if (idx !== -1) {
                    prevState.booksMatched[idx] = book;
                }
                else {
                    prevState.booksMatched.push(book);
                }
                return { booksMatched: prevState.booksMatched };
            });
        });
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => { this.replaceBook(book.id) });
    }

    updateQuery = (newQuery) => {
        this.setState({ query: newQuery });
    }

    render() {
        const { query, booksMatched } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <InputBoxDoneTyping
                            value={query}
                            onChange={(value) => this.updateQuery(value)}
                            doneTyping={(value) => this.searchByQuery(value)}
                            doneTypingInterval={500}
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    {booksMatched && <ListBooks books={booksMatched}
                        onBookUpdate={(book, shelf) => this.updateBook(book, shelf)} />}
                </div>
            </div>)
    }
}
export default SearchBook;