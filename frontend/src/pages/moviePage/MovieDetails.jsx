import styled  from 'styled-components';
import  { useEffect, useState } from 'react';

import imdbIconUrl from '../moviePage/testimage/IMDB_Logo_2016.svg.png';
import rottenTomatoesIconUrl from '../moviePage/testimage/red-tomato-icon-png.png';
import metaCriticIconUrl from '../moviePage/testimage/metaCriticIcon.png';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const OverlayContainer = styled.div`
  position: absolute;
  width: 42%;
  height: 35%;
  top:0;
  margin-top:0;
  padding-top:2%;
  color: #69bada;
  background: rgba(0, 0, 0, 0.5);
  border-radius:8px;
  margin-left:13%;
`;







const LogoImage = styled.img`
  width: 20px; 
  height: 20px; 
  vertical-align: middle; 
`;


const RatingRow = styled.div`
margin-top:12px;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

const RatingPair = styled.div`
padding-top:2%;
width:60px;
height:60px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin-right: 20px; 
  box-shadow: 0 2px 8px rgba(153, 144, 144, 0.8); 
  background-color:rgba(50, 50, 50, 0.8);
  border-radius: 8px; 
`;

const RatingText = styled.span`
  margin-top: 5px; 
  font-size:12px;
`;




const MovieDetails = () => {
    const [progress, setProgress] = useState(0);
  const targetProgress = 66; 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= targetProgress) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1; 
      });
    }, 20);

    return () => clearInterval(interval); 
  }, [targetProgress]);
  return (
    <OverlayContainer>
    
     <h2>Star Wars: Episode IX - The Rise of Skywalker (2019)</h2> 
      
      Action, Adventure, Fantasy | 142min | English
      
      <RatingRow>
        <RatingPair>
          <LogoImage src={imdbIconUrl} alt="IMDb" />
          <RatingText>6.4/10</RatingText>
        </RatingPair>
        <RatingPair>
          <LogoImage src={rottenTomatoesIconUrl} alt="Rotten Tomatoes" />
          <RatingText>51%</RatingText>
        </RatingPair>
        <RatingPair>
          <LogoImage src={metaCriticIconUrl} alt="Metacritic" />
          <RatingText>53/100</RatingText>
        </RatingPair>
        
           
        <div style={{
          width: 80,
          height:80,
          overflow: 'hidden',
          backgroundColor: 'rgb(110, 202, 238)',
          borderRadius: '50%', 
          display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
          }}>
           <CircularProgressbarWithChildren
              value={progress}
              styles={{
              root: {},
              path: {
              stroke: `rgba(50, 170, 222, ${progress / 100})`,
              strokeWidth: '40', 
                    },
              trail: {
              stroke: '#0c3675',
              strokeWidth: '40',
                     },
               }}
              >
              <strong style={{color:'rgb(6, 57, 117)',fontSize: '1.8rem'}}>{progress}%</strong>
           </CircularProgressbarWithChildren>
        </div>

     
        
      
      </RatingRow>
  
    
    
  </OverlayContainer>
  );
};

export default MovieDetails;
