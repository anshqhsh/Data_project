import { useState } from 'react';
import { Table } from 'react-bootstrap';

const TableItem = ({ perPage, setPerPage, currentTables, thArr }) => {
  const [dropDown, setDropDown] = useState(false);
  const perPagelist = [10, 20, 30, 40, 50, 100];

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
      <h1>Table</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Index</th>
            {thArr.map((e, i) => {
              return <th key={i}>{e}</th>;
            })}
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
