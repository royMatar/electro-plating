import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const MetalCard = ({ title, price }) => (
  <Card style={{ width: "9rem", backgroundColor: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)" }}>
    <Card.Body>
      <Card.Title style={{ fontWeight: "900", color: "#2D3142" }}>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })} / OZ
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

const Metalprice = () => {
  const [metalData, setMetalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.metalpriceapi.com/v1/latest?api_key=de4743e58cae29cbd4f893831e3bfad2"
      );
      const data = await response.json();
      setMetalData(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !metalData.success) {
    return <div></div>;
  }

  return (
    <Container className="metallist">
      {/* Only render the MetalCard components if metalData.success is true */}
      <MetalCard title="Silver" price={1 / metalData.rates.XAG} />
      <MetalCard title="Gold" price={1 / metalData.rates.XAU} />
      <MetalCard title="Platinum" price={1 / metalData.rates.XPT} />
    </Container>
  );
};

export default Metalprice;
