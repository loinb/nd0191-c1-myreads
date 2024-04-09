import { Link } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import React from "react";

const SearchPage = (props) => {
  const { searchBooks, searchForBooks, changeShelf, resetSearch } = props;

  const handleChange = event => {
    const val = event.target.value;
    searchForBooks(val);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={resetSearch}>
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>
      <SearchResults
        searchBooks={searchBooks}
        changeShelf={changeShelf}
      />
    </div>
  );
};

export default SearchPage;
