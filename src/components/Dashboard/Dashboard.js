import React from 'react'
import Pic1 from './../../Graphics/interstella.jpg';
import Pic2 from './../../Graphics/spider.jpg';
import Pic3 from './../../Graphics/batman.jpg';
import MovieList from './MovieList';
import UpcomingMovies from './UpComingMovies';
import MovieSearch from './MovieSearch';

const dashboard = () => {
  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '33.33%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic3} alt="backpic3" style={{ position: 'absolute', top: 0, left: '66.66%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', justifyContent:'space-between',flexDirection:'row' }}>
        <div style={{flex:1, margin:'0 10px',width:'33%'}}>
          <MovieList/>          
        </div>
        <div style={{width:'33%',marginLeft:'33%'}}>
          <MovieSearch style={{flex:1, margin:'0 10px'}}/>
        </div>
        <div style={{width:'33%'}}>
        <UpcomingMovies style={{flex:1, margin:'0 10px'}}/>
        </div>
      </div>
    </div>

    );
}

export default dashboard