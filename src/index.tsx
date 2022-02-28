import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import TableAsClass from './TableAsClass';

ReactDOM.render(
  <React.StrictMode>
    <h1>React table using functions</h1>
    <Table rows={ [
        {name: "Bill", age: 54},
        {name: "Sakura", age: 40},
        {name: "Kenta", age: 8}
    ] } />

      <h1>React table using classes</h1>
      <TableAsClass rows={ [
          {name: "Bill", age: 54},
          {name: "Sakura", age: 40},
          {name: "Kenta", age: 8}
      ] } />
  </React.StrictMode>,
  document.getElementById('root')
);
