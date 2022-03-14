// This is to test hooking up a React component to Redux.

import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

// Use functions rather than classes for path of least resistance.
// If I wanted to do a class I think I need to follow https://react-redux.js.org/tutorials/connect,
// but returning a function is the recommended way.

export default function GlobalButton () {
    const clicks = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <button onClick={ () => dispatch({ type: 'counter/increment' }) }>
            {clicks} global clicks
        </button>
    );
}
