// 메뉴에 맞는 filter값을 받아와서 실행한다.
// 각 필터 조건에 맞는 값을 받아온다.
// 성별, 나이, 인종, 민족, 사망여부

const Filter = ({
  mutate,
  setMutate,
  mutateList,
  setIsfilter,
  filterTarget,
  setFilterTarget,
}) => {
  const target = e => {
    setMutate(mutate);
    setFilterTarget(e.target.value);
    setIsfilter(true);
    if (e.target.value === mutate) {
      setIsfilter(false);
    }
  };
  return (
    <span>
      <form>
        <select value={filterTarget} onChange={target}>
          <option value={mutate}>{mutate}</option>
          {mutateList.map(e => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </form>
    </span>
  );
};

export default Filter;
