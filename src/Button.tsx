import React from 'react';

export default class Button extends React.Component {
    state = {
        clicks: 0
    }

    onClick () {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
        const { clicks } = this.state;
        return (
            <button onClick={this.onClick.bind(this)}>
                clicked {clicks} times
            </button>
        );
    }
}
