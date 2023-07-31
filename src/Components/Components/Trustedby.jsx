import React from 'react';
import Container from 'react-bootstrap/Container';

const Trustedby = () => {
  const companyLogos = [
    { logo: './assets/Gaviota.png', url: 'https://www.gaviotagroup.com/en/' },
    { logo: './assets/folda-logo.png', url: 'https://folda.com.lb/' },
    { logo: './assets/sidem.png', url: 'https://www.sidemalu.com/' },
    { logo: './assets/rkco.png', url: 'http://robertkashouh.com/' },
  ];

  return (
    <Container fluid className='orange-bg'>
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '200px' }}>
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
    </Container>
  );
};

export default Trustedby;
