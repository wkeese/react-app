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
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>

                <tbody>
                {
                    rows.map(row => <RowAsClass key={row.name} name={row.name} age={row.age}/>)
                }
                </tbody>
            </table>
        );

    }
}