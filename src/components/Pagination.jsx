import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

function Pagination(props) {
  const {
    totalRecords = null,
    pageLimit = 30,
    pageNeighbours = 0,
    onPageChanged = () => {},
    className = ''
  } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const pageLimitValue = typeof pageLimit === "number" ? pageLimit : 30;
  const totalRecordsValue = typeof totalRecords === "number" ? totalRecords : 0;
  const pageNeighboursValue =
    typeof pageNeighbours === "number"
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

  const totalPages = Math.ceil(totalRecordsValue / pageLimitValue);

  useEffect(() => {
    gotoPage(1);
  }, [])

  const gotoPage = (page) => {
    const currentPageValue = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage: currentPageValue,
      totalPages,
      pageLimit: pageLimitValue,
      totalRecords: totalRecordsValue,
    };

    setCurrentPage(currentPageValue);
    onPageChanged(paginationData);
  };

  const handleClick = (page, evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighboursValue * 2 - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighboursValue * 2 + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighboursValue * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighboursValue;
      const rightBound = currentPage + pageNeighboursValue;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(
          startPage - singleSpillOffset,
          startPage - 1
        );
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  if (!totalRecordsValue || totalPages === 1) return null;

  const pages = fetchPageNumbers();

  return (
    <nav aria-label="pagination">
      <ul className={`${className}`}>
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={index} onClick={handleMoveLeft} className="flex items-center justify-center px-3 h-8 leading-tighbg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={handleMoveLeft}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index} onClick={handleMoveRight} className="flex items-center justify-center px-3 h-8 leading-tighbg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={handleMoveRight}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            );

          return (
            <li
              key={index}
              className={`${currentPage === page ? "bg-gray-800" : ""}`}
            >
              <a
                className="flex items-center justify-center px-3 h-8 leading-tighbg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                href="#"
                onClick={(e) => handleClick(page, e)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
  className: PropTypes.string
};

export default Pagination;
