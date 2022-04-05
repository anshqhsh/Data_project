import { useState, useEffect } from 'react';

import Pagenation from './pagenation';
import TableItem from './tableItem';
const ListTable = ({ patientList }) => {
  console.log(patientList.patient.list);
  const [thArr, setThArr] = useState([
    'age',
    'birthDatetime',
    'ethnicity',
    'gender',
    'isDeath',
    'personID',
    'race',
  ]);
  // console.log(Object.keys(patientList.patientList.patient.list[0]));

  // 페이징 처리
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(50);

  //페이징 처리
  const idxOfLast = currentPage * perPage;
  const idxOfFirst = idxOfLast - perPage;

  // 50개씩 자른 배열 반환
  const currentTables = e => {
    let currentPage = 0;
    currentPage = e.slice(idxOfFirst, idxOfLast);
    return currentPage;
  };

  return (
    <>
      <h1>ListTable</h1>
      <TableItem
        perPage={perPage}
        setPerPage={setPerPage}
        currentTables={currentTables(patientList.patient.list)}
        thArr={thArr}
      />
      <Pagenation
        perPage={perPage}
        totalPage={patientList.patient.list.length}
        currentPage={setCurrentPage}
      />
    </>
  );
};

export default ListTable;
