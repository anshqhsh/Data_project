import { useState, useEffect } from 'react';
import Filter from './filter';
import fetcher from '../fecher';

import Pagenation from './pagenation';
import TableItem from './tableItem';
const ListTable = ({ patientList }) => {
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
      const filteredCurrentPage = currentPage.filter(
        e => e[mutate] === filterTarget
      );
      return filteredCurrentPage;
    }

    return currentPage;
  };

  const movePage = num => {
    setCurrentPage(num);
  };

  const [brief, setBrief] = useState([]);
  const [userIf, setUserId] = useState();
  // 상세정보
  const getbriefId = async personID => {
    const data = await fetcher('get', `/api/patient/brief/${personID}`);
    setbrief(data);
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
      <TableItem
        perPage={perPage}
        setPerPage={setPerPage}
        currentTables={currentTables(patientList.patient.list)}
        gender={gender}
        race={race}
        ethnicity={ethnicity}
        setMutate={setMutate}
        setIsfilter={setIsfilter}
        filterTarget={filterTarget}
        setFilterTarget={setFilterTarget}
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
