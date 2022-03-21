// Button functional component.

import React, { useEffect, useState } from 'react';

export default function Clock () {
    console.log("render clock");

    const [date, setDate] = useState(new Date());

    useEffect(function () {
        setInterval(() => setDate(new Date()), 1000);
    });

    return (
        <span>{date.toString()}</span>
    );
}
