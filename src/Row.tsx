import React from 'react';
import RowData from "./RowData";

export default function Row ({name, age}: RowData) {
  return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
      </tr>
  );
}
