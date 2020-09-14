import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
  };

  return (
    <div className="form-container">
      <h1>Add book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input type="submit" value="Add books" />
      </form>
    </div>
  );
}
