import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {
    const { book, changeShelf } = props
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(e) => changeShelf(book, e.target.value)}
                            value={book.shelf ? book.shelf : 'none'}>
                            <option value="moveTo" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title ? book.title : ""}</div>
                {book.authors &&
                    book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                    ))}
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Book;