import Bookshelf from "../components/Bookshelf";
import { Link } from "react-router-dom";

const ListBookPage = (props) => {
  const { bookList, changeShelf, shelfTitles } = props
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Bookshelf
        bookList={bookList}
        changeShelf={changeShelf}
        shelfTitles={shelfTitles}
      />
      <div className="open-search">
        <Link to="/search"></Link>
      </div>
    </div>
  );
};
export default ListBookPage;
