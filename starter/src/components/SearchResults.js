import React from 'react';
import Book from './Book';

const SearchResults = (props) => {
  const { searchBooks, changeShelf } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchBooks.map((book) => (
          <Book
            book={book}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
