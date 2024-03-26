import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CastCard,
  CastName,
  CastChar,
  CastImg,
  arrowStyles,
} from './MovieCastCarouselStyles';

import defaultAvatar from '../../../../../../public/images/AvatarPhoto.png';

const MovieCastCarousel = ({ movie }) => {
  const imageBaseURL = 'https://image.tmdb.org/t/p/w200';

  const chunkSize = 6;
  const chunks = [];
  for (let i = 0; i < movie.actors.length; i += chunkSize) {
    chunks.push(movie.actors.slice(i, i + chunkSize));
  }

  const splitName = fullName => {
    const nameArray = fullName.split(' ');
    const firstName = nameArray[0];
    const lastName = nameArray.slice(1).join(' '); // Join the remaining words for the last name
    return { firstName, lastName };
  };

  
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 210 }}
            >
              &lt;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 200 }}
            >
              &gt;
            </button>
          )
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
                        e.target.src = defaultAvatar; // Set default avatar on error
                      }}
                    />
                    <CastName> {splitName(element.name).firstName}</CastName>

                    <CastName> {splitName(element.name).lastName}</CastName>
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

