import styled  from 'styled-components';


import '../../styles/global.css';
import imagetest1 from '../moviePage/testimage/Star-Wars-IX-intro.webp';

import MovieDetails from './MovieDetails';
import TagLineAndPlot from './TagLineAndPlot';
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
  background: linear-gradient(to right, #141E30, #456181);
`;

const MovieContainer = styled.div`
  background-color: #79d3f3;
  width: 70%;
  height: 100vh;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
 
`;

const MovieImage = styled.img`
  width: 100%;
  height: 60%;
  margin: 0 0; 
  transform: skewY(5deg);
  transform-origin: top right;
`;


const MoviePage = () => {
 
  
  return (
    <PageContainer>
      <MovieContainer>
        <MovieImage src={imagetest1} alt="Star Wars Movie Poster" /> 
      <MovieDetails/>
       <TagLineAndPlot/>
      </MovieContainer>


      
    </PageContainer>
  );
};

export default MoviePage;
