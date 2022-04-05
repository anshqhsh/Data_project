import { stringifyQuery } from 'next/dist/server/server-route-utils';
import { Table } from 'react-bootstrap';

const TableItem = ({ currentTables, thArr }) => {
  console.log(currentTables);

  const TrTd = obj => {
    console.log(obj);
    for (let key in obj) {
      return console.log(<td key={key}>{obj[key]}</td>);
    }
  };
  console.log(thArr);
  // ['age', 'birthDatetime', 'ethnicity', 'gender', 'isDeath', 'personID', 'race']
  return (
    <>
      <h1>Table</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {thArr.map((e, i) => {
              return <th key={i}>{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentTables.map((obj, i) => {
            console.log(obj['isDeath']);
            return (
              <tr>
                <td>{i}</td>
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
