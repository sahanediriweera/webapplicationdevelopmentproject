import React from 'react';
import './MovieCard.css';
import Addresses from '../../Graphics/graphics';

function MovieCard({ title, imageUrl, description }) {

  const img = Addresses();

  return (
    <div className="movie-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MovieCard;