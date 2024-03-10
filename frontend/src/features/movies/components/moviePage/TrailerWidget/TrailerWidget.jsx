import { useState, useEffect } from 'react';
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
  const [Trailers, setTrailers] = useState(movie.trailers);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <WidgetContainer backgroundImage={movie.poster} onClick={openModal}>
        <Arrow></Arrow>
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
