import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

export default function BookList() {
  const { books, removeBook } = useContext(BookContext);

  return (
    <div className="books-container">
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            removeBook={removeBook}
          />
        ))}
      </ul>
    </div>
  );
}
