import React from 'react';
import Container from 'react-bootstrap/Container';

const Trustedby = () => {
  // List of logos for companies with URLs
  const companyLogos = [
    { logo: 'Gaviota.png', url: 'https://www.gaviotagroup.com/en/' },
    { logo: 'folda-logo.png', url: 'https://folda.com.lb/' },
    { logo: 'sidem.png', url: 'https://www.sidemalu.com/' },
    { logo: 'rkco.png', url: 'http://robertkashouh.com/' },
    // Add more logos here if needed
  ];

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h1 className="title-header">Trusted by</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '100px' }}>
        {companyLogos.map((company, index) => (
          <a key={index} href={company.url} target="_blank" rel="noopener noreferrer">
            <img
              src={company.logo}
              alt={`Company ${index + 1}`}
              style={{ width: '150px', margin: '30px', filter: 'grayscale(100%)', }}
            />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default Trustedby;
