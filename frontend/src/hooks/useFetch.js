import { useQuery } from 'react-query';
import axios from 'axios';
import {
  validateQueryKey,
  validateUrl,
} from './../features/movies/utils/useFetchValidation';

export const useFetch = (url, queryKey = '', queryKeyTags) => {
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
