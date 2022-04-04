import { useState, useEffect } from 'react';
import fetcher from '../fecher';
const ListTable = () => {
  const [patientList, setPatientList] = useState([]);

  const getList = async () => {
    const list = await fetcher('get', '/api/patient/list');
    console.log(list);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <h1>ListTable</h1>
    </>
  );
};

export default ListTable;
