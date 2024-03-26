import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './../../components/layout/Title/TItle';
import {
  SearchContainer,
  StyledLabel,
  StyledSelect,
  StyledContainer,
  Input,
  InputWrapper,
  SubmitButton,
} from './AdvancedSearch.styles';

const AdvancedSearch = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromYear: '',
    toYear: '',
    minRating: '',
    voteCount: '',
    genre: '',
    runTime: '',
    actors: '',
    directors: '',
    writers: '',
  });

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // CR - remove console.logs
    console.log(`Updated ${field}:`, value); // Log updated form data
  };

  // CR - move to a utils or helper file in a utils directory
  const yearOptions = () => {
    return [...Array(new Date().getFullYear() - 1904 + 1).keys()]
      .reverse()
      .map(year => (
        <option key={year} value={1905 + year}>
          {1905 + year}
        </option>
      ));
  };

  // CR - move all this to a constants file
  const minVotesOptions = [
    20000, 15000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 500,
    100,
  ].map(value => ({ label: value.toLocaleString(), value }));

  const genreOptions = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Fiction',
    'TV Movie',
    'Thriller',
    'War',
    'Western',
  ].map(genre => ({ label: genre, value: genre }));

  const runtimeOptions = [
    { label: 'Any runtime', value: '' },
    { label: '1 hour - 1.5 hours', value: '1-1.5h' },
    { label: '1.5 hours - 2 hours', value: '1.5-2h' },
    { label: '2 hours - 3 hours', value: '2-3h' },
    { label: 'More than 3 hours', value: 'over 3h' },
  ];

  const handleSubmit = () => {
    let { fromYear, toYear } = formData;

    fromYear = fromYear || '1903';
    toYear = toYear || '2024';

    if (parseInt(fromYear) > parseInt(toYear)) {
      // CR - don't use alert
      alert('From year cannot be greater than To year');
      return;
    }

    const updatedFormData = { ...formData, fromYear, toYear };

    const searchParams = new URLSearchParams(updatedFormData).toString();
    navigate(`/search/results?${searchParams}&page=1`);
  };

  // CR - the jsx is too long, break it down into smaller parts
  return (
    <SearchContainer>
      <Title title={'advanced search'} />
      <StyledContainer>
        <StyledLabel htmlFor="fromYear">
          <StyledSelect
            name="fromYear"
            id="fromYear"
            onChange={e => updateFormData('fromYear', e.target.value)}
          >
            <option>From</option>
            {yearOptions()}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="toYear">
          <StyledSelect
            name="toYear"
            id="toYear"
            onChange={e => updateFormData('toYear', e.target.value)}
          >
            <option>To</option>
            {yearOptions()}
          </StyledSelect>
        </StyledLabel>

        <StyledLabel htmlFor="minRating">
          <StyledSelect
            name="minRating"
            id="minRating"
            onChange={e => updateFormData('minRating', e.target.value)}
          >
            <option>Minimum Rating</option>
            {[...Array(9).keys()].reverse().map(minRating => (
              <option key={minRating} value={minRating + 1}>
                {minRating + 1}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>

        <StyledLabel htmlFor="minVotes">
          <StyledSelect
            name="minVotes"
            id="minVotes"
            onChange={e => updateFormData('minVotes', e.target.value)}
          >
            <option>Minimum Votes</option>
            {minVotesOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="genre">
          <StyledSelect
            name="genre"
            id="genre"
            onChange={e => updateFormData('genre', e.target.value)}
          >
            <option>Genre</option>
            {genreOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="minRuntime">
          <StyledSelect
            name="minRuntime"
            id="minRuntime"
            onChange={e => updateFormData('minRuntime', e.target.value)}
          >
            <option>Minimum Runtime</option>
            {runtimeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Add actors"
            onChange={e => updateFormData('actors', e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Add directors"
            onChange={e => updateFormData('directors', e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Add writers"
            onChange={e => updateFormData('writers', e.target.value)}
          />
        </InputWrapper>
      </StyledContainer>
      <SubmitButton type="button" onClick={handleSubmit}>
        Search
      </SubmitButton>
    </SearchContainer>
  );
};

export default AdvancedSearch;
