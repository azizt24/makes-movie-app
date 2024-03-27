import { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

// Define the debounced search function outside the hook
const debouncedSearchFunction = debounce(async (query, callback) => {
  if (query) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/movies/search/${query}`
      );
      callback(response.data); // Pass the results to the callback
    } catch (error) {
      console.error('Error fetching search results:', error);
      callback(null); // Pass null in case of an error
    }
  } else {
    callback(null); // Pass null if the query is empty
  }
}, 300);

export const useDebouncedSearch = (initialQuery, handleResults) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    // Call the debounced search function with the current query
    debouncedSearchFunction(query, handleResults);

    // Cleanup function to cancel the debounced call on component unmount or when the effect re-runs
    return () => {
      debouncedSearchFunction.cancel();
    };
  }, [query, handleResults]); // Effect dependencies

  return { query, setQuery };
};
