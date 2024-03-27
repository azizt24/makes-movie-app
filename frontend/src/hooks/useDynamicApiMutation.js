import { validateUrl } from './utils/useFetchValidation';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useDynamicApiMutation = (url, method, queryKey, data = {}) => {
  const queryClient = useQueryClient();

  validateUrl(url);

  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      return axios[method](url, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success('Operation successful',
        {
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
