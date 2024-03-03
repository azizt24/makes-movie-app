import { useQuery } from 'react-query';
import axios from 'axios';
import { validateUrl, validateQueryKey } from './utils/useFetchValidation';

const queryKeyTags = ['movies'];

export const useFetch = (url, queryKey = '') => {
  validateUrl(url);
  validateQueryKey(queryKey, queryKeyTags);

  const { isPending, data, isError, error } = useQuery(queryKey, async () => {
    const response = await axios.get(url);
    return response.data;
  });

  return { isPending, isError, data, error };
};
