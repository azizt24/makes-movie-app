import {
  TitleContainer,
  FirstTitleLetter,
  RestOfTitle,
} from './MoviesTitle.style';
const MoviesTitle = ({ title }) => {
  let firstLetter = title.charAt(0);
  let restOfString = title.substring(1);
  return (
    <TitleContainer>
      <FirstTitleLetter>{firstLetter}</FirstTitleLetter>
      <RestOfTitle>{restOfString}</RestOfTitle>
    </TitleContainer>
  );
};
export default MoviesTitle;
