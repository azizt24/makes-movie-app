import { validateUrl } from './utils/useFetchValidation';
import {
  useMutation as useReactQueryMutation,
  useQueryClient,
} from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useDynamicApiMutation = (url, method, data = {}, queryKey) => {
  const queryClient = useQueryClient();

  validateUrl(url);

  const { mutate, isLoading } = useReactQueryMutation({
    mutationFn: () => {
      return axios[method](url, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success('Operation successful', {
        position: 'top-center',
      });
    },
    onError: error => {
      toast.error(error.response?.data?.msg || 'An error occurred',
      {
        position: 'top-center',
      });
    },
  });

  return { mutate, isLoading };
};
