import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetch = url => {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
  return { isPending, isError, data, error };
};
