// src/components/Home.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import the Link component for navigation
import BookCard from "./components/BookCard"; // Assuming BookCard is in the same directory
import books from "./booksData"; // Assuming booksData is in the same directory
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      {/* Add Book Button */}
      <Link to="/add" className="add-book-button">
        Add New Book
      </Link>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
