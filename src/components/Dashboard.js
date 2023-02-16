import React from 'react'

const dashboard = () => {
  return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={require('./../Graphics/antman.jpg')} alt="Photo 1" style={{ width: '33.33%' }} />
        <img src="photo2.jpg" alt="Photo 2" style={{ width: '33.33%' }} />
        <img src="photo3.jpg" alt="Photo 3" style={{ width: '33.33%' }} />
      </div>
    );
}

export default dashboard