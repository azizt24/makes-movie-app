import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

export const useDebouncedSearch = (initialQuery, handleResults) => {
  const [query, setQuery] = useState(initialQuery);

  // Define the search function
  const search = async currentQuery => {
    if (currentQuery) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/movies/search/${currentQuery}`
        ); // Adjust the endpoint URL accordingly
        handleResults(response.data); // Pass the results to the handler function
      } catch (error) {
        console.error('Error fetching search results:', error);
        handleResults(null); // Pass null in case of an error
      }
    } else {
      // Clear the results if the query is empty
      handleResults(null);
    }
  };

  // Use useCallback to memoize the debounced version of the search function
  const debouncedSearch = useCallback(debounce(search, 300), [handleResults]);

  useEffect(() => {
    // Call the debounced search function with the current query
    debouncedSearch(query);
    // Cleanup function to cancel the debounced call when the component unmounts or the query changes
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  return { query, setQuery };
};
