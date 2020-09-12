import React from 'react';
import {useAlert} from './AlertContext';

export default function Alert() {
    const { toggle } = useAlert();

    return (
        <div>
            <button onClick={toggle}>
                toggle alert
            </button>
        </div>
    )
}
