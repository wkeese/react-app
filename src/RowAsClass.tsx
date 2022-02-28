import React from 'react';
import RowData from "./RowData";

export default class RowAsClass extends React.Component<RowData> {
    render() {
        const {name, age} = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
            </tr>
        );
    }
}
