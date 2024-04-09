import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBookPage from "./page/ListBookPage";
import SearchPage from "./page/SearchPage";
import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [bookList, setBookList] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const getBookList = async () => {
      const res = await BooksAPI.getAll();
      setBookList(res);
    };

    getBookList();
  }, []);

  const changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      if (newShelf === "none") {
        setBookList((prevBooks) =>
          prevBooks.filter((b) => b.id !== book.id),
        );
      } else {
        book.shelf = newShelf;
        setBookList((prevBooks) =>
          prevBooks.filter((b) => b.id !== book.id).concat([book])
        );
      }
    });
  };
  const shelfTitles = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" },
  ];

  const searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        setSearchBooks(books);
      });
    } else {
      setSearchBooks([]);
    }
  };

  const resetSearch = () => {
    setSearchBooks([]);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListBookPage
            bookList={bookList}
            changeShelf={changeShelf}
            shelfTitles={shelfTitles}
          />
        }
      />
      <Route
        path="/search"
        element={
          <SearchPage
            searchBooks={searchBooks}
            bookList={bookList}
            searchForBooks={searchForBooks}
            changeShelf={changeShelf}
            resetSearch={resetSearch}
          />
        }
      />
    </Routes>
  );
}

export default App;
