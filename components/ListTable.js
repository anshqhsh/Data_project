import { useState, useEffect } from 'react';
import Filter from './filter';
import fetcher from '../fecher';

import Pagenation from './pagenation';
import TableItem from './tableItem';
const ListTable = ({ patientList }) => {
  console.log(patientList.patient.list);

  // 상단텝
  const thArr = [
    'age',
    'birthDatetime',
    'ethnicity',
    'gender',
    'isDeath',
    'personID',
    'race',
  ];

  // 페이징 처리
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50); // 초기설정 50개
  const [isFilter, setIsfilter] = useState(false); // 필터 조건이 true 일때
  const [filterTarget, setFilterTarget] = useState();
  const [mutate, setMutate] = useState();

  //페이징 처리
  const idxOfLast = currentPage * perPage;
  const idxOfFirst = idxOfLast - perPage;

  // perpage씩 자른 배열 반환
  const currentTables = e => {
    currentPage = e.slice(idxOfFirst, idxOfLast);
    if (isFilter) {
      currentPage = currentPage.filter(e => {
        console.log({ mutate }, { filterTarget });
        // e[mutate] === filterTarget;
      });
    }
    console.log(currentPage);
    return currentPage;
  };

  const movePage = num => {
    console.log(num);
    setCurrentPage(num);
  };

  // 필터조건 State
  const [gender, setGender] = useState([]);
  const [race, setRace] = useState([]);
  const [ethnicity, setEthnicity] = useState([]);

  // 성별
  const getGender = async () => {
    const data = await fetcher('get', '/api/gender/list');
    setGender(data.genderList);
  };

  // 인종
  const getRace = async () => {
    const data = await fetcher('get', '/api/race/list');
    setRace(data.raceList);
  };
  // 민족
  const getEthnicity = async () => {
    const data = await fetcher('get', '/api/ethnicity/list');
    console.log(data);
    setEthnicity(data.ethnicityList);
  };

  useEffect(() => {
    getGender();
    getRace();
    getEthnicity();
  }, []);

  return (
    <>
      <h1>ListTable</h1>
      <Filter
        mutate={'gender'}
        setMutate={setMutate}
        mutateList={gender}
        setMutateState={setGender}
        setIsfilter={setIsfilter}
        filterTarget={filterTarget}
        setFilterTarget={setFilterTarget}
      />
      <Filter //
        mutate={'race'}
        setMutate={setMutate}
        mutateList={race}
        setMutateState={setRace}
        setIsfilter={setIsfilter}
        filterTarget={filterTarget}
        setFilterTarget={setFilterTarget}
      />
      <Filter
        mutate={'ethnicity'}
        setMutate={setMutate}
        mutateList={ethnicity}
        setMutateState={setEthnicity}
        setIsfilter={setIsfilter}
        filterTarget={filterTarget}
        setFilterTarget={setFilterTarget}
      />
      <TableItem
        perPage={perPage}
        setPerPage={setPerPage}
        currentTables={currentTables(patientList.patient.list)}
        thArr={thArr}
      />
      <Pagenation
        perPage={perPage}
        totalPage={patientList.patient.list.length}
        movePage={movePage}
      />
    </>
  );
};

export default ListTable;
