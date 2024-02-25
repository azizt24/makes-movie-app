import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  WidgetContainer,
  Arrow,
  arrowStyles,
  StyledIframe,
  StyledCarouselDiv,
  TitleText,
  UnderlinedText,
  CloseButton,
} from './TrailerWidgetStyles';

const TrailerWidget = ({ movie }) => {
  const [Trailers, setTrailers] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  // const url=`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${themoviedb_API_KEY}&language=en-US`;
  const url2 = `https://api.themoviedb.org/3/movie/tt2527338/videos?api_key=2a5b2bfab3731d2da0e262fb42a86194&language=en-US`;

  useEffect(() => {
    fetch(url2)
      .then(response => response.json())
      .then(data => {
        const trailersArray = data.results.filter(
          video => video.site === 'YouTube'
        );
        setTrailers(trailersArray);
      })
      .catch(error => console.error(error));
  }, [movie.id]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <WidgetContainer backgroundImage={movie.Poster} onClick={openModal}>
        <Arrow>▶</Arrow>
      </WidgetContainer>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: '50vw',
              height: '70vh',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid #ccc',
              backgroundColor: ' rgba(0, 0, 0, 0.5)',
              overflow: 'visible',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.382)',
            },
          }}
        >
          <TitleText>
            <h2>
              <UnderlinedText>
                <span>T</span>
              </UnderlinedText>{' '}
              railers
            </h2>
          </TitleText>

          <CloseButton onClick={closeModal}>X</CloseButton>

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
                  style={{ ...arrowStyles, left: 15 }}
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
                  style={{ ...arrowStyles, right: 15 }}
                >
                  &gt;
                </button>
              )
            }
          >
            {Trailers.map((trailer, index) => (
              <StyledCarouselDiv key={index}>
                <StyledIframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  allowFullScreen
                ></StyledIframe>
              </StyledCarouselDiv>
            ))}
          </Carousel>
        </Modal>
      )}
    </>
  );
};

export default TrailerWidget;
