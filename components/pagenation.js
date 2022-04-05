const Pagenation = ({ perPage, totalPage, movePage }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNum.push(i);
  }
  return (
    <>
      <ul className="pageUl">
        {pageNum.map(num => (
          <button
            onClick={() => {
              console.log('click');
              movePage(num);
            }}
          >
            <li className="pageLi" key={num}>
              <span className="listSpan"></span>
              {num}
            </li>
          </button>
        ))}
      </ul>
    </>
  );
};
export default Pagenation;
