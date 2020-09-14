import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Lord of the rings", author: "Tolkien", id: 1 },
    { title: "The final empire", author: "Brandon Sanderson", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // get data from localstorage if already sth here
  useEffect(() => {
    const data = localStorage.getItem("books");
    if (data) {
      setBooks(JSON.parse(data));
    }
  }, []);

  // update local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};
