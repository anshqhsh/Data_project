const Pagenation = (perPage, totalPage, currentPage) => {
  return (
    <>
      <h1>
        {perPage}
        {totalPage}
        {currentPage}
      </h1>
    </>
  );
};
export default Pagenation;
