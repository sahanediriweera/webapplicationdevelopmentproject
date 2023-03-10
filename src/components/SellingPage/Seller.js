import React, { useEffect } from 'react';
import YourMovies from './YourMovies';
import SellerMovieList from './SellerMovieList';
import RegisterNow from './RegisterNow';
import Pic1 from './../../Graphics/loki.jpg';
import Pic2 from './../../Graphics/avengers.jpg';
import Pic3 from './../../Graphics/antman.jpg';
import { useState } from 'react';
import axios from 'axios';

const Seller = () => {

  const [movies,setMovies] = useState([
    {
      id: 1,
      title: 'The Godfather',
      image: 'https://via.placeholder.com/150',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },
    {
      id: 2,
      title: 'Star Wars',
      image: 'https://via.placeholder.com/150',
      description: 'The epic space opera film series created by George Lucas.',
    },
    {
      id: 3,
      title: 'The Avengers',
      image: 'https://via.placeholder.com/150',
      description: 'A team of superheroes, the Avengers, band together to fight off intergalactic threats.',
    },
  ]);

  const getMovies = ()=> {
    axios.get('https://localhost:7035/api/Home/getmovies')
    .then(response=> {
      setMovies(response.data);
    })
    .catch(err=> {
      console.log(err);
    });
  };

  const [yourMovies,setYourMovies] = useState([]);

  const getYourMovies = ()=> {
    axios.get('https://localhost:7035/api/Home/yourmovies')
    .then(response=> {
      setYourMovies(response.data);
    })
    .catch(err=> {
      console.log(err);
    });
  }


  const deleteMovies = (id)=> {
    axios.delete(`/api/Seller/deletemovie?id=${id}`)
    .then((response) => {
      console.log(response);
      // handle success
    }, (error) => {
      console.log(error);
      // handle error
    });
  } 

  useEffect(()=>{
    getMovies();
    getYourMovies();
  },[])


  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '33.33%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic3} alt="backpic3" style={{ position: 'absolute', top: 0, left: '66.66%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <div>
          <YourMovies movies = {yourMovies}  deleteMovies = {deleteMovies}/>          
        </div>
        <div>
          <SellerMovieList movies={movies}/>
        </div>
        <div>
          <RegisterNow/>
        </div>
      </div>
    </div>
  )
}

export default Seller