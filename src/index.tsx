import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Button from './Button';
import ButtonAsClass from './ButtonAsClass';
import Clock from './Clock';
import ReduxButton from './ReduxButton';
import Table from './Table';
import TableAsClass from './TableAsClass';
import RowData from "./RowData";
import { store } from "./store";

const rows: RowData[] = [
    {name: "Bill", age: 54},
    {name: "Sakura", age: 40},
    {name: "Kenta", age: 8}
];

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <h1>React table using functions</h1>
                <Table rows={ rows } />

                <h1>React table using classes</h1>
                <TableAsClass rows={ rows } />

                <button onClick={ageAndRerender}>Increase age.</button>

                <h1>Buttons with state</h1>
                <Button/>
                <Button/>
                <ButtonAsClass/>
                <ButtonAsClass/>

                <h1>Buttons with global state in redux</h1>
                <ReduxButton/>
                <ReduxButton/>

                <h1>Test of useEffect() for async updates of state</h1>
                <Clock/>
            </React.StrictMode>
        </Provider>,
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
