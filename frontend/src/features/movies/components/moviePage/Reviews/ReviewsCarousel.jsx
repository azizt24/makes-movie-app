import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './reviews.css';
const ReviewsCarousel = ({ reviews }) => {
  const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);

  const toggleExpand = index => {
    setExpandedReviewIndex(expandedReviewIndex === index ? null : index);
  };

  const renderReviewContent = (content, index) => {
    const wordLimit = 50;
    const words = content.split(' ');
    if (expandedReviewIndex === index || words.length <= wordLimit) {
      return content;
    } else {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
  };

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,

    top: '50% ',

    width: 30,
    height: 30,
    cursor: 'pointer',
    background: '#49BCEC',
    border: 'none',
    color: '#7AD3F3',
    borderRadius: '50%',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  return (
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
            style={{ ...arrowStyles, left: 18 }}
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
            style={{ ...arrowStyles, right: 18 }}
          >
            &gt;
          </button>
        )
      }
    >
      {reviews.map((review, index) => (
        <div key={index} className="carousel-slide">
          <h4>By: {review.author}</h4>
          <p>
            {renderReviewContent(review.content, index)}
            {review.content.split(' ').length > 50 && (
              <button onClick={() => toggleExpand(index)} className="show-more">
                {expandedReviewIndex === index ? 'Show Less' : 'Show More'}
              </button>
            )}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
