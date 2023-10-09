import { useState, useEffect } from 'react';
import API_KEY from '../credential/Key';

const SEARCH_ENGINEID = '27cc70b9e1bc348ec';

const useGooglesearch = (term) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINEID}&q=${term}`
        );
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null); // Set data to null to indicate an error
      }
    };

    if (term) {
      fetchData();
    }
  }, [term]);

  return { data };
};

export default useGooglesearch;
