// import React, { useState } from 'react';
// import './MovieSearch.css';
// import MovieCard from './MovieCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


function MovieSearch() {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [movies, setMovies] = useState([
  //   {
  //     title: 'Movie 1',
  //     imageUrl: 'https://via.placeholder.com/150',
  //     description: 'This is a description of Movie 1.'
  //   },
  //   {
  //     title: 'Movie 2',
  //     imageUrl: 'https://via.placeholder.com/150',
  //     description: 'This is a description of Movie 2.'
  //   },
  //   {
  //     title: 'Movie 3',
  //     imageUrl: 'https://via.placeholder.com/150',
  //     description: 'This is a description of Movie 3.'
  //   }
  // ]);

  // const handleSearchTermChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSearchClick = () => {
  //   // Here, you could perform a search using the search term
  //   // and update the list of movies accordingly.
  // };

  // return (
  //   <div className="movie-search-container">
  //     <div className="movie-search">
  //       <input
  //         type="text"
  //         value={searchTerm}
  //         onChange={handleSearchTermChange}
  //         placeholder="Search for movies..."
  //       />
  //       <button onClick={handleSearchClick}>Search</button>
  //     </div>
  //     <div className="movie-card-list">
  //       {movies.map((movie, index) => (
  //         <MovieCard
  //           key={index}
  //           title={movie.title}
  //           imageUrl={movie.imageUrl}
  //           description={movie.description}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query !== '') {
      axios.get(`https://localhost:7035/api/Home/search?name=${query}`)
        .then(response => {
          setSearchResults(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [query]);

  return (
    <div>
      <h2>Movie Search</h2>
      <input type="text" value={query} onChange={handleInputChange} />
      {searchResults.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imageUrl={movie.imgUrl}
          description={movie.description}
          category={movie.category}
          purchases={movie.purchases}
        />
      ))}
    </div>
  );
  
}

export default MovieSearch;