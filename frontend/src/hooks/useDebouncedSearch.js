import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

export const useDebouncedSearch = (initialQuery, handleResults) => {
  const [query, setQuery] = useState(initialQuery);

  const search = async currentQuery => {
    if (currentQuery) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/movies/search/${currentQuery}`
        );
        handleResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        handleResults(null);
      }
    } else {
      handleResults(null);
    }
  };

  const debouncedSearch = useCallback(debounce(search, 300), [handleResults]);

  useEffect(() => {
    debouncedSearch(query);

    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  return { query, setQuery };
};
