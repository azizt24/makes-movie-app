import Title from './../../components/layout/Title/TItle';
import {
  SearchContainer,
  StyledLabel,
  StyledSelect,
  StyledContainer,
  Input,
  InputWrapper,
  AddButton,
  SubmitButton,
} from './AdvancedSearch.styles.jsx';

const AdvancedSearch = () => {
  const yearOptions = () => {
    return [...Array(new Date().getFullYear() - 1904 + 1).keys()]
      .reverse()
      .map(year => (
        <option key={year} value={1905 + year}>
          {1905 + year}
        </option>
      ));
  };

  const voteCountOptions = [
    { label: '20000', value: 20000 },
    { label: '15000', value: 15000 },
    { label: '10000', value: 10000 },
    { label: '9000', value: 9000 },
    { label: '8000', value: 8000 },
    { label: '7000', value: 7000 },
    { label: '6000', value: 6000 },
    { label: '5000', value: 5000 },
    { label: '4000', value: 4000 },
    { label: '3000', value: 3000 },
    { label: '2000', value: 2000 },
    { label: '500', value: 500 },
    { label: '100', value: 100 },
  ];

  const genreOptions = [
    { label: 'Action', value: 28 },
    { label: 'Adventure', value: 12 },
    { label: 'Animation', value: 16 },
    { label: 'Comedy', value: 35 },
    { label: 'Crime', value: 80 },
    { label: 'Documentary', value: 99 },
    { label: 'Drama', value: 18 },
    { label: 'Family', value: 10751 },
    { label: 'Fantasy', value: 14 },
    { label: 'History', value: 36 },
    { label: 'Horror', value: 27 },
    { label: 'Music', value: 10402 },
    { label: 'Mystery', value: 9648 },
    { label: 'Romance', value: 10749 },
    { label: 'Science Fiction', value: 878 },
    { label: 'TV Movie', value: 10770 },
    { label: 'Thriller', value: 53 },
    { label: 'War', value: 10752 },
    { label: 'Western', value: 37 },
  ];

  const runtimeOptions = [
    { label: 'Any run time', value: 'Any run time' },
    { label: '1 hour - 1.5 hours', value: 1 },
    { label: '1.5 hours - 2 hours', value: 1.5 },
    { label: '2 hours - 3 hours', value: 2 },
    { label: 'more than 3 hours', value: 3 },
  ];

  return (
    <SearchContainer>
      <Title title={'advanced search'} />
      <StyledContainer>
        <StyledLabel htmlFor="fromYear">
          <StyledSelect name="fromYear" id="fromYear">
            <option>From</option>
            {yearOptions()}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="toYear">
          <StyledSelect name="toYear" id="toYear">
            <option>To</option>
            {yearOptions()}
          </StyledSelect>
        </StyledLabel>

        <StyledLabel htmlFor="rating">
          <StyledSelect name="rating" id="rating">
            <option>Minimum Rating</option>
            {[...Array(9).keys()].reverse().map(rating => (
              <option key={rating} value={rating + 1}>
                {rating + 1}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>

        <StyledLabel htmlFor="voteCount">
          <StyledSelect name="voteCount" id="voteCount">
            <option>Minimum Votes</option>
            {voteCountOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="genre">
          <StyledSelect name="genre" id="genre">
            <option>Genre</option>
            {genreOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="runTime">
          <StyledSelect name="runTime" id="runTime">
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
          <Input type="text" placeholder="Add actors" />
          <AddButton>+</AddButton>
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Add directors" />
          <AddButton>+</AddButton>
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Add writers" />
          <AddButton>+</AddButton>
        </InputWrapper>
      </StyledContainer>
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchContainer>
  );
};

export default AdvancedSearch;
