import React from 'react'
import Book from './book.js'

class ListBooks extends React.Component {
    render() {
        return (<ol className='books-grid'>
            {this.props.books && this.props.books.map((book) => (
                <Book key={book.id} book={book}
                    onBookUpdate={(book, shelf) => this.props.onBookUpdate(book, shelf)} />
            ))}
        </ol>)
    }
}
export default ListBooks;