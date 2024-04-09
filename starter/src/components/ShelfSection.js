import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const ShelfSection = (props) => {
    const { books, shelfTitles, changeShelf } = props;
  return (
    <div>
      <div className="bookshelf-books" key={shelfTitles}>
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} changeShelf={changeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
}

ShelfSection.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default ShelfSection;