import { useLoaderData, useNavigate, useLocation } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  // console.log(pages);
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  // console.log(search);
  // console.log(pathname);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    // console.log(searchParams);
    searchParams.set('page', pageNumber);
    // console.log(searchParams);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className=" mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
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
              className={`btn btn-xs sm:btn-md bordered-none join-item  ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
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
