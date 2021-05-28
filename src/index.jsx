import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Book from './Book';
import { books } from './books.js';

const App = () => {
  const [library, setLibrary] = useState(books);

  // const [booksRead, setBooksRead] = useState(
  //   library.filter((book) => book.read).length,
  // );

  const newBookRead = (id) => {
    const newLibrary = [].concat(library);
    const myBook = newLibrary.find((book) => book.id === id);
    // Tady bacha!! Tímto nacházíme odkaz na prvek pole, takže když ho pomocí tohoto odkazu změníme, změní se rovnou i v tom poli! :-)
    myBook.read = !myBook.read;
    setLibrary(newLibrary);
  };

  return (
    <>
      <header className="header">
        <h1>Moje knihovnička</h1>
        <div className="icon">
          <img src="/assets/book.svg" alt="" />
        </div>
      </header>

      <div className="numberBooksRead">
        Přečteno {library.filter((book) => book.read).length} knih
      </div>

      <div className="library">
        {library.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            cover={book.cover}
            read={book.read}
            changeInRead={newBookRead}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
