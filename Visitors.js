import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Visitors = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const response = await axios.get('/api/visitors');
    setVisitors(response.data.visitors);
  };

  const incrementVisitors = async () => {
    const response = await axios.post('/api/visitors');
    setVisitors(response.data.visitors);
  };

  return (
    <div>
      <h1>Total Visitors: {visitors}</h1>
      <button onClick={incrementVisitors}>Visit</button>
    </div>
  );
};

export default Visitors;
