import { useLoaderData, useNavigate, useLocation } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  // console.log(pages);
  const handlePageChange = (pageNumber) => {
    // console.log(search);
    // console.log(pathname);
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    // console.log(pageNumber);
  };
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item "
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>
        {pages.map((pageNumber) => {
          // console.log('page: ', page);
          // console.log('pageNumber: ', pageNumber);
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md bordered-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item "
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
