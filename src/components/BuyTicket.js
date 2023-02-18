import React from 'react'

const BuyTicket = () => {
  return (
    <div className="App" style={{display: 'flex'}}>
      <div style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}>
        <img src={Pic1} alt="backpic1" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '50%', objectFit: 'cover' }} />
        <img src={Pic2} alt="backpic2" style={{ position: 'absolute', top: 0, left: '50%', height: '100%', width: '50%', objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default BuyTicket