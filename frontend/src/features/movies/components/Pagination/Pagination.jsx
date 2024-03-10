import {
  PaginationWrapper,
  PaginationButton,
  NumberButton,
  NumberContainer,
} from './Pagination.style';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleFirstPage = () => {
    if (!isFirstPage) {
      onPageChange(1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (!isLastPage) {
      onPageChange(totalPages);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationButton onClick={handlePrevPage} disabled={isFirstPage}>
        Prev
      </PaginationButton>
      <PaginationButton onClick={handleFirstPage} disabled={isFirstPage}>
        First
      </PaginationButton>
      <NumberContainer>
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <NumberButton>4</NumberButton>
        <NumberButton>5</NumberButton>
        <NumberButton>6</NumberButton>
        <NumberButton>7</NumberButton>
        <NumberButton>8</NumberButton>
        <NumberButton>9</NumberButton>
      </NumberContainer>

      <PaginationButton onClick={handleLastPage} disabled={isLastPage}>
        Last
      </PaginationButton>
      <PaginationButton onClick={handleNextPage} disabled={isLastPage}>
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
