import React from 'react';

export interface RowData {
  name: string
  age: number
}

export function Row ({name, age}: RowData) {
  return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
      </tr>
  );
}
