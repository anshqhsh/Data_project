const Pagenation = ({ perPage, totalPage, currentPage }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNum.push(i);
  }
  return (
    <>
      <ul className="pageUl">
        {pageNum.map(num => (
          <li className="pageLi" key={num}>
            <span
              className="listSpan"
              onClick={() => {
                currentPage(num);
              }}
            ></span>
            {num}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Pagenation;
