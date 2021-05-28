import React, { useState } from 'react';
import './style.css';

const Book = ({ id, title, author, year, cover, read, changeInRead }) => {
  const handleClick = () => {
    changeInRead(id);
  };

  return (
    <div className="book">
      <img
        className="book__cover"
        src={`/assets/book-covers/${cover}`}
        alt={cover}
      />
      <div className="book__info">
        <h2 className="book__title">{title}</h2>
        <p className="book__meta">
          {author}, {year}
        </p>
        <button className="book__read" onClick={handleClick}>
          {read ? 'přečteno' : 'nepřečteno'}
        </button>
      </div>
    </div>
  );
};

export default Book;
