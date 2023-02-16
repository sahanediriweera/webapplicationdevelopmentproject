import React from 'react';
import './MovieCard.css';

function MovieCard({ title, imageUrl, description }) {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MovieCard;