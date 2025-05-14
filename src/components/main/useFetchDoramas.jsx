import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchDoramas = () => {
  const [doramas, setDoramas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/doramas.json'); 
        setDoramas(response.data);
      } catch (err) {
        setError('Failed to load doramas');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { doramas, loading, error };
};

export default useFetchDoramas;

