// Button functional component.

import React, { useState } from 'react';

export default function Button () {
    console.log("render button");

    const [clicks, setClicks] = useState(0);

    return (
        <button onClick={() => setClicks(clicks + 1)}>
            function button, clicked {clicks} times
        </button>
    );
}
