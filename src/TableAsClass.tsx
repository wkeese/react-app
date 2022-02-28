import React from 'react';
import RowAsClass from "./RowAsClass";
import RowData from "./RowData";

type Props = {
  rows: RowData[]
};

export default class TableAsClass extends React.Component<Props> {
  render() {
    const rows = this.props.rows;
    return (
        <table>
          {
            rows.map(row => <RowAsClass name={row.name} age={row.age}/>)
          }
        </table>
    );
  }
}