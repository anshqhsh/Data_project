import ListTable from '../components/ListTable';
import fetcher from '../fecher';
import { useState, useEffect } from 'react';

const Home = () => {
  const [patientList, setPatientList] = useState(null);

  // 데이터 로딩
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  // image 데이터를 받아옴
  const fetchList = async () => {
    try {
      setError(null);
      setPatientList(null);
      setLoading(true);
      const list = await fetcher('get', '/api/patient/list?page=3');
      console.log('done');
      setPatientList(list);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 image가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!patientList) return null;

  return (
    <>
      <h1>Hello World</h1>
      <ListTable patientList={patientList} />
    </>
  );
};

export default Home;
