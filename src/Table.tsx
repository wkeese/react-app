import React from 'react';
import Row from "./Row";
import RowData from "./RowData";

export default function Table (props: { rows: RowData[] }) {
  return (
    <table>
      {
        props.rows.map(row => <Row name={row.name} age={row.age}/>)
      }
    </table>
  );
}
