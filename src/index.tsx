import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Table from './Table';
import TableAsClass from './TableAsClass';
import RowData from "./RowData";

const rows: RowData[] = [
    {name: "Bill", age: 54},
    {name: "Sakura", age: 40},
    {name: "Kenta", age: 8}
];

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <h1>React table using functions</h1>
            <Table rows={ rows } />

            <h1>React table using classes</h1>
            <TableAsClass rows={ rows } />

            <button onClick={ageAndRerender}>Increase age.</button>

            <h1>Buttons with state</h1>
            <Button></Button>
            <Button></Button>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// Initial render.
render();

// Increase ages and rerender.
function ageAndRerender () {
    for (let row of rows) {
        row.age++;
    }

    render();
}
