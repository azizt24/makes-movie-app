import 'react';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
import {
  PaginationWrapper,
  PaginationButton,
  NumberButton,
  NumberContainer,
} from './Pagination.style';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pagesToShow = Math.min(9, totalPages);
  let startPage, endPage;

  if (totalPages <= pagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(pagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(pagesToShow / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = pagesToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const handlePageChange = page => {
    onPageChange(Math.min(Math.max(1, page), totalPages));
  };
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <HiArrowSmallLeft />
        Prev
      </PaginationButton>

      <PaginationButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </PaginationButton>
      <NumberContainer>
        {Array.from(
          { length: endPage + 1 - startPage },
          (_, i) => startPage + i
        ).map(page => (
          <NumberButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
            isCurrentPage={currentPage === page}
          >
            {page}
          </NumberButton>
        ))}
      </NumberContainer>
      <PaginationButton
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage >= totalPages}
      >
        Last
      </PaginationButton>

      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
        <HiArrowSmallRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
