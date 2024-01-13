import React, { useState, useEffect } from 'react';
import Navbarcomp from '../../components/navbarcomp';

function Bata() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/bata');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderGrid = () => {
    return apiData.map((item, index) => (
      <div key={index} className="grid-item">
        {/* Tampilkan data dari API dalam bentuk grid */}
        {item.property1}
        {item.property2}
        {/* ... sesuaikan dengan properti yang ada di API */}
      </div>
    ));
  };

  return (
    <div className="Bata">
      <Navbarcomp />
      <div className="grid-container">
        {renderGrid()}
      </div>
    </div>
  );
}

export default Bata;
