import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';

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
    // console.log(pageNumber);
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          type="button"
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
          return (
            <button
              type="button"
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
              className={`btn btn-xs border-none sm:btn-md join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              } `}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
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
