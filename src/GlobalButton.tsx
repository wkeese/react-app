// This is to test hooking up a React component to Redux.

import React from 'react';
import store from "./redux";

export default class GlobalButton extends React.Component {
     constructor (props: any) {
        super(props);
        store.subscribe(() => {
            console.log(this, "got update");
            this.forceUpdate();
        })
    }

    onClick () {
        store.dispatch({ type: 'counter/increment' })
    }

    render() {
        const clicks = store.getState().counter.value;
        return (
            <button onClick={this.onClick.bind(this)}>
                {clicks} global clicks
            </button>
        );
    }
}
