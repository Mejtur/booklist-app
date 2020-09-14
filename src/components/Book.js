import React from "react";

export default function Book({ author, title, removeBook, id }) {
  return (
    <div className="book" onClick={() => removeBook(id)}>
      <li className="author">{author}</li>
      <li className="title">{title}</li>
      <hr />
    </div>
  );
}
