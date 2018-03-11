import React from 'react'
import Book from './book.js'
import PropTypes from 'prop-types'
class Category extends React.Component{

	render(){
		return(<div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books && this.props.books.map((book) => (
                      	<Book key={book.id} book={book}
                      	onBookUpdate={(book, shelf) => this.props.onBookUpdate(book, shelf)} />
                      	))}
                    </ol>
                  </div>
                </div>

              </div>)
	}
}

Category.propTypes={
	title:PropTypes.string.isRequired,
	books:PropTypes.array,
	onBookUpdate:PropTypes.func.isRequired
}

export default Category;