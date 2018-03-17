import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {

  categoryChange = (book, onBookUpdate, event) => {
    onBookUpdate(book, event.target.value);
  }

  render() {
    const { book, onBookUpdate } = this.props;
    const bookShelf = book.shelf ? book.shelf : 'none';
    return (<li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={bookShelf} onChange={this.categoryChange.bind(this, book, onBookUpdate)}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>)
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookUpdate: PropTypes.func.isRequired
}

export default Book