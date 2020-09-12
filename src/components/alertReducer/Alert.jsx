import React from 'react';
import {useAlert} from './AlertContext';

export default function Alert() {
    const { visible, text, toggle } = useAlert();

    if (!visible) {
        return null;
    }

    return (
        <div onClick={() => toggle('')}>
            Alert {text}
        </div>
    )
}
