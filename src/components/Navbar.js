import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="nav">
      <h1>Personal booklist app</h1>
      <p>You have {books.length} to read</p>
    </div>
  );
}
