import React, {useEffect, useState} from 'react';

const useCustomHook = () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    };

    const clear = () => {
        setValue('')
    };

    return {
        bind: {
            value,
            onChange
        },
        clear,
        value
    }
};

// реагирует на изменение значения переменной
const useLogger = (value) => {
    useEffect(() => {
        console.log('value changed', value);
    }, [value]);
};

export default function () {
    const input = useCustomHook();
    const input2 = useCustomHook();

    useLogger(input.value);

    return (
        <div>
            <h1>Custom hook</h1>
            <div className="block">
                <input {...input.bind} type="text"/>
                <p>
                    { input.value }
                </p>
                <button onClick={input.clear}>
                    clear
                </button>
            </div>
            <div className="block">
                <input {...input2.bind} type="text"/>
                <p>
                    { input2.value }
                </p>
            </div>
        </div>
    )
}
