import React from 'react';
import Image from 'react-bootstrap/Image';


const Heading = () => {
  const headingStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginTop:'40px'
  };

  const imageStyle = {
    width: '100%',
    height: '85vh',
    filter: 'grayscale(100%)',
    objectFit: 'cover',
  };

  return (
    <div style={headingStyle}>
      <Image  src="./assets/homepage.jpeg" style={imageStyle} fluid/>
      <div className="textStyle-responsive">Revolutionize Your Product with Superior Plating.</div>
    </div>
  );
};

export default Heading;
