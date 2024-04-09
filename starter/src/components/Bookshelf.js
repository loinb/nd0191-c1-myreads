import ShelfSection from "./ShelfSection";
const Bookshelf = (props) => {
  const { bookList, changeShelf, shelfTitles } = props

  return (
    <div>
      <div className="list-books-content">
        {bookList.length > 0 && (
          <div>
            {shelfTitles.map((shelfTitle, index) => {
              const booksByShelf = bookList.filter(
                (book) => book.shelf === shelfTitle.type
              );
              return (
                <div className="bookshelf" key={index}>
                  <h2 className="bookshelf-title">{shelfTitle.title}</h2>
                  <ShelfSection
                    key={index}
                    books={booksByShelf}
                    shelfTitles={shelfTitles}
                    changeShelf={changeShelf}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
