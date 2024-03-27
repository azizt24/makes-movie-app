import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import defaultAvatar from '../../../../../../public/images/noImage.png';
import {
  CastCard,
  CastName,
  CastChar,
  CastImg,
  arrowStyles,
  HorizontalLine,
} from './MovieCastCarouselStyles';

const MovieCastCarousel = ({ movie }) => {
  const imageBaseURL = 'https://image.tmdb.org/t/p/w200';

  const chunkSize = 6;
  const chunks = [];
  for (let i = 0; i < movie.actors.length; i += chunkSize) {
    chunks.push(movie.actors.slice(i, i + chunkSize));
  }
  return (
    <div>
       <HorizontalLine/>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
         
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 50 }}
            >
              &lt;
            </button>
         
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
         
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 48 }}
            >
              &gt;
            </button>
          
        }
      >
        
        {chunks.map((chunk, index) => (

          <div key={index}>
            {chunk.map(element => (
              <div
                key={element.id}
                style={{ display: 'inline-block', margin: '2px' }}
              >
                <Link to="">
                 
                  <CastCard>
                    <CastImg
                      src={`${imageBaseURL}${element.image}`}
                      alt={element.name}
                      onError={e => {
                        e.target.src = defaultAvatar;
                      }}
                    />
                    <CastName>{element.name}</CastName>

                    <CastChar>{element.character}</CastChar>
                  </CastCard>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCastCarousel;
