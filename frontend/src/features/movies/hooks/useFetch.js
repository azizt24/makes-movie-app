import { useQuery } from 'react-query';
import axios from 'axios';
import { validateUrl, validateQueryKey } from './utils/useFetchValidation';

const queryKeyTags = ['movies'];

export const useFetch = (url, queryKey = '') => {
  validateUrl(url);
  validateQueryKey(queryKey, queryKeyTags);

  const { isPending, data, isError, error } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });

  return { isPending, isError, data, error };
};
export default useFetch;
