import React, {useEffect, useState} from 'react'
import Pic1 from './../../Graphics/interstella.jpg';
import Pic2 from './../../Graphics/spider.jpg';
import Pic3 from './../../Graphics/batman.jpg';
import MovieList from './MovieList';
import UpcomingMovies from './UpComingMovies';
import MovieSearch from './MovieSearch';
import axios from 'axios';

const Dashboard = () => {

  const [englishMovies,setEnglishMovies] = useState([
    { name: 'Movie 1', purchases: 10 },
    { name: 'Movie 2', purchases: 20 },
    { name: 'Movie 3', purchases: 5 },
  ]);
  const [sinhalaMovies,setSinhalaMovies] = useState([
    { name: 'සිංහල චිත්‍රපට 1', purchases: 15 },
    { name: 'සිංහල චිත්‍රපට 2', purchases: 8 },
    { name: 'සිංහල චිත්‍රපට 3', purchases: 12 },
  ]);
  const [tamilMovies,setTamilMovies] = useState([
    { name: 'தமிழ் திரைப்படம் 1', purchases: 25 },
    { name: 'தமிழ் திரைப்படம் 2', purchases: 18 },
    { name: 'தமிழ் திரைப்படம் 3', purchases: 6 },
  ]);



  useEffect(()=>{
    axios.get('https://localhost:7035/api/Home/english')
    .then(response => {
        setEnglishMovies(response.data);
    })
    .catch(error=> {
      console.log(error);
    });
    axios.get('https://localhost:7035/api/Home/sinhala')
    .then(response => {
        setSinhalaMovies(response.data);
    })
    .catch(error=> {
      console.log(error);
    });
    axios.get('https://localhost:7035/api/Home/tamil')
    .then(response => {
        setTamilMovies(response.data);
    })
    .catch(error=> {
      console.log(error);
    });
  },[]);

  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '33.33%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic3} alt="backpic3" style={{ position: 'absolute', top: 0, left: '66.66%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', justifyContent:'space-between',flexDirection:'row' }}>
        <div style={{flex:1, margin:'0 10px',width:'33%'}}>
          <MovieList englishMovies = {englishMovies} sinhalaMovies = {sinhalaMovies} tamilMovies = {tamilMovies}/>          
        </div>
        <div style={{width:'33%',marginLeft:'30%'}}>
          <MovieSearch style={{flex:1, margin:'0 10px'}}/>
        </div>
        <div style={{width:'33%'}}>
        <UpcomingMovies style={{flex:1, margin:'0 10px'}}/>
        </div>
      </div>
    </div>

    );
}

export default Dashboard