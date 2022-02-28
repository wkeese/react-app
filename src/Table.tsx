import React from 'react';
import {Row, RowData} from "./Row";

export default function Table (props: { rows: RowData[] }) {
  return (
    <table>
      {
        props.rows.map(row => <Row name={row.name} age={row.age}/>)
      }
    </table>
  );
}
