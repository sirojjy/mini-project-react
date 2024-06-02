import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (onPageChange && page >= 1 && page <= totalPages) { // Added validation for page number
      onPageChange(page);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handlePageClick(currentPage - 1)}>Previous</button>
      )}
      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} className={currentPage === pageNumber ? 'active' : ''} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => handlePageClick(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
