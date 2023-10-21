import { useLoaderData, useNavigate, useLocation } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  // console.log(pages);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  };

  if (pageCount < 2) return null;

  return (
    <div className=" mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            handlePageChange('prev');
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
            handlePageChange('next');
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
