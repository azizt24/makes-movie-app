import { useQuery } from 'react-query';
import axios from 'axios';
import {
  validateQueryKey,
  validateUrl,
} from './../features/movies/utils/useFetchValidation';
import { toast } from 'react-toastify';

export const useFetch = (url, queryKey = '', queryKeyTags) => {
  validateUrl(url);
  validateQueryKey(queryKey, queryKeyTags);

  const { isPending, data, isError, error } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await axios.get(url);

      return data;
    },
    onError: () =>
      toast.error(
        'There was an error fetching the data, Please try again later.',
        {
          position: 'top-center',
        }
      ),
  });

  return { isPending, isError, data, error };
};
