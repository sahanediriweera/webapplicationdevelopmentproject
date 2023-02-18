import React from 'react';
import YourMovies from './YourMovies';
import SellerMovieList from './SellerMovieList';
import RegisterNow from './RegisterNow';
import Pic1 from './../../Graphics/loki.jpg';
import Pic2 from './../../Graphics/avengers.jpg';
import Pic3 from './../../Graphics/antman.jpg';

const Seller = () => {
  return (
    <div>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '33.33%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
        <img src={Pic3} alt="backpic3" style={{ position: 'absolute', top: 0, left: '66.66%', height: '100%', width: '33.33%', objectFit: 'cover' }} />
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
        <YourMovies/>
        <SellerMovieList/>
        <RegisterNow/>
      </div>
    </div>
  )
}

export default Seller