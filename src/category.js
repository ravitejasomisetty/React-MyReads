import React from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
class Category extends React.Component {

  render() {
    return (<div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ListBooks books={this.props.books}
            onBookUpdate={(book, shelf) => this.props.onBookUpdate(book, shelf)} />
        </div>
      </div>
    </div>)
  }
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  onBookUpdate: PropTypes.func.isRequired
}

export default Category;