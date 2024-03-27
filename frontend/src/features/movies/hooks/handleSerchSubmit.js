import { toast } from 'react-toastify';

export const handleSerchSubmit = (formData, setFormData, navigate) => {
  let {
    fromYear,
    toYear,
    minRating,
    voteCount,
    genre,
    runTime,
    actors,
    directors,
    writers,
  } = formData;

  const isFormEmpty =
    !fromYear &&
    !toYear &&
    !minRating &&
    !voteCount &&
    !genre &&
    !runTime &&
    !actors &&
    !directors &&
    !writers;

  if (isFormEmpty) {
    toast.error('Please enter search data before submitting!');
    return;
  }

  fromYear = fromYear || '1903';
  toYear = toYear || '2024';

  if (parseInt(fromYear) > parseInt(toYear)) {
    toast.error('From year cannot be greater than To year!');
    return;
  }

  const updatedFormData = { ...formData, fromYear, toYear };
  const searchParams = new URLSearchParams(updatedFormData).toString();
  navigate(`/search/results?${searchParams}&page=1`);
};
