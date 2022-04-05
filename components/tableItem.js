import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Filter from './filter';

const TableItem = ({
  perPage,
  setPerPage,
  currentTables,
  gender,
  race,
  ethnicity,
  setMutate,
  setIsfilter,
  filterTarget,
  setFilterTarget,
}) => {
  const perPagelist = [10, 20, 30, 40, 50, 100];
  const thArr = [
    'age',
    'birthDatetime',
    'ethnicity',
    'gender',
    'isDeath',
    'personID',
    'race',
  ];
  const Paging = e => {
    setPerPage(e.target.value);
  };

  return (
    <>
      <form>
        <select value={perPage} onChange={Paging}>
          {perPagelist.map(num => {
            return <option value={num}>{num}</option>;
          })}
        </select>
      </form>

      <Table responsive>
        <thead>
          <tr>
            <th>Index</th>
            <th key="age">age</th>
            <th key="birthDate">birthDate</th>
            <th key="ethnicity">
              <Filter
                mutate={'ethnicity'}
                setMutate={setMutate}
                mutateList={ethnicity}
                setIsfilter={setIsfilter}
                filterTarget={filterTarget}
                setFilterTarget={setFilterTarget}
              />
            </th>
            <th key="gender">
              <Filter
                mutate={'gender'}
                setMutate={setMutate}
                mutateList={gender}
                setIsfilter={setIsfilter}
                filterTarget={filterTarget}
                setFilterTarget={setFilterTarget}
              />
            </th>
            <th key="isDeath">isDeath</th>
            <th key="id">Id</th>
            <th key="race">
              <Filter
                mutate={'race'}
                setMutate={setMutate}
                mutateList={race}
                setIsfilter={setIsfilter}
                filterTarget={filterTarget}
                setFilterTarget={setFilterTarget}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTables.map((obj, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                {thArr.map(key => {
                  return <td>{obj[key].toString()}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableItem;
