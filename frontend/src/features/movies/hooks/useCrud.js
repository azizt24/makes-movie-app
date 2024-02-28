import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useFetch } from './useFetch';
export const useFetchMovies = () => {
  const { isPending, data, isError, error } = useFetch('/movies');
  return { isLoading: isPending, isError, data };
};

export const useCreateMovie = () => {
  const queryClient = useQueryClient();
  const { mutate: createMovie, isLoading } = useMutation({
    mutationFn: movieData => axios.post('/movies', movieData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      toast.success('Movie added successfully');
    },
    onError: error => {
      toast.error(error.response.data.msg);
    },
  });
  return { createMovie, isLoading };
};

export const useUpdateMovie = () => {
  const queryClient = useQueryClient();

  const { mutate: updateMovie } = useMutation({
    mutationFn: ({ movieId, updatedData }) => {
      return axios.put(`/movies/${movieId}`, updatedData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      toast.success('Movie updated successfully');
    },
  });
  return { updateMovie };
};

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteMovie, isLoading: deleteMovieLoading } = useMutation({
    mutationFn: movieId => {
      return axios.delete(`/movies/${movieId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      toast.success('Movie deleted successfully');
    },
  });
  return { deleteMovie, deleteMovieLoading };
};
