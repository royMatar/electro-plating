import React from 'react';

const Heading = () => {
  const headingStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginTop:'40px'
  };

  const imageStyle = {
    width: '100%',
    height: '80vh',
    filter: 'blur(3px)',
  };

  return (
    <div style={headingStyle}>
      <img src="image1.jpg" style={imageStyle} />
      <div className="textStyle-responsive">Revolutionize Your Industry with Superior Plating.</div>
    </div>
  );
};

export default Heading;
