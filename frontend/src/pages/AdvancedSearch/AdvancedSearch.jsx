import { MoviesBtn } from '../../features/movies/components/Buttons/MoviesButtons.style';
import { CONSTANTS } from '../../features/movies/utils/constants/constants.js';
import { yearOptions } from '../../features/movies/utils/useYearOptions';
import Title from './../../components/layout/Title/TItle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  SearchContainer,
  StyledLabel,
  StyledSelect,
  StyledContainer,
  Input,
  InputWrapper,
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
  };

  const minimumvotes = CONSTANTS.MIN_VOTES_OPTIONS.map(value => ({
    label: value.toLocaleString(),
    value,
  }));

  const genreOptions = CONSTANTS.GENRE_OPTIONS.map(genre => ({
    label: genre,
    value: genre,
  }));

  const runtimeOptions = CONSTANTS.RUN_TIME_OPTIONS;

  const handleSubmit = () => {
    let { fromYear, toYear } = formData;

    fromYear = fromYear || '1903';
    toYear = toYear || '2024';

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
            {minimumvotes.map(option => (
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
      <MoviesBtn type="button" onClick={handleSubmit}>
        Search
      </MoviesBtn>
    </SearchContainer>
  );
};

export default AdvancedSearch;
