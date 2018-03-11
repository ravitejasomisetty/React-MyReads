import React from 'react'
import Book from './book.js'
class Category extends React.Component{

	render(){
		return(<div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book />
                    </ol>
                  </div>
                </div>

              </div>)
	}
}

export default Category;