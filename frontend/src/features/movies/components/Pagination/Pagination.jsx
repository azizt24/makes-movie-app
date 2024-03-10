import 'react';
import { PaginationWrapper, PaginationButton, NumberButton, NumberContainer } from './Pagination.style';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = Math.min(9, totalPages); // Show up to 9 pages, but not more than the total number of pages
  const maxPageLimit = 250;
  let startPage, endPage;

  const effectiveTotalPages = Math.min(totalPages, maxPageLimit);

  if (totalPages <= pagesToShow) {
    // Total pages are less than or equal to the pages we want to show
    startPage = 1;
    endPage = totalPages;
  } else {
    // Total pages are more than the pages we want to show
    const maxPagesBeforeCurrentPage = Math.floor(pagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(pagesToShow / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      // Current page is among the first set of pages
      startPage = 1;
      endPage = pagesToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= effectiveTotalPages) {
      // Current page is among the last set of pages
      startPage = effectiveTotalPages - pagesToShow + 1;
      endPage = effectiveTotalPages;
    } else {
      // Current page is somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const handlePageChange = (page) => onPageChange(page);

  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        First
      </PaginationButton>
      <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </PaginationButton>
      <NumberContainer>
        {Array.from({ length: (endPage + 1) - startPage }, (_, i) => startPage + i).map(page => (
          <NumberButton key={page} onClick={() => handlePageChange(page)} disabled={currentPage === page}>
            {page}
          </NumberButton>
        ))}
      </NumberContainer>
      <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= effectiveTotalPages}>
        Next
      </PaginationButton>
      <PaginationButton onClick={() => handlePageChange(effectiveTotalPages)} disabled={currentPage >= effectiveTotalPages}>
        Last
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
