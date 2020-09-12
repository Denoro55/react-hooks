import React, {useState} from 'react';
import {useAlert} from './AlertContext';

export default function Alert() {
    const [value, setValue] = useState('');
    const { toggle } = useAlert();

    return (
        <div>
            <button onClick={() => toggle(value)}>
                toggle alert
            </button>
            <input onChange={e => setValue(e.target.value)} value={value} type="text"/>
        </div>
    )
}
