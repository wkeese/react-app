import React from 'react';
import Row from "./Row";
import RowData from "./RowData";

export default function Table(props: { rows: RowData[] }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>

            <tbody>
            {
                props.rows.map(row => <Row key={row.name} name={row.name} age={row.age}/>)
            }
            </tbody>
        </table>
    );
}
