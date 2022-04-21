import React from 'react';
import MaterialTable from 'material-table';

const data = [
  { name: 'Mohammad', surname: 'Faisal', birthYear: 1999 },
  { name: 'Moidul', surname: 'Hasan', birthYear: 1997 },
  { name: 'Najim', surname: 'Uddin', birthYear: 1998 },
];

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
];

const TableTest = () => {
  return (
    <MaterialTable
      title='Material'
      columns={columns}
      data={data}
    ></MaterialTable>
  );
};

export default TableTest;
