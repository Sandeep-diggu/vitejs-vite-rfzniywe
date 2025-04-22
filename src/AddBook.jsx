import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Book details:', { title, author, description, coverImageUrl });
    alert('Book added (hypothetically)!');
    // Optionally, navigate back to the home page after submission
    // navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
        />

        <label htmlFor="coverImageUrl">Cover Image URL:</label>
        <input
          type="url"
          id="coverImageUrl"
          value={coverImageUrl}
          onChange={(e) => setCoverImageUrl(e.target.value)}
          style={{ padding: '8px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}>
          Submit
        </button>

        <Link to="/" style={{ textDecoration: 'none', color: '#6c757d' }}>
          Back to Home
        </Link>
      </form>
    </div>
  );
}

export default AddBook;