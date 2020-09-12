import React, {useEffect, useRef, useState} from 'react';

export default function () {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(counter);
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const prevCounter = useRef('null');

    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
    });

    useEffect(() => {
        // получать значение из состояния можно через useRef
        window.addEventListener('click', showState);

        return () => {
            window.removeEventListener('click', showState)
        }
    }, []);

    useEffect(() => {
        // записываем прошлое значение
        prevCounter.current = counter;
    }, [counter]);

    const updateState = () => {
        counterRef.current = counter + 1;
        setCounter(p => p + 1);
    };

    const showState = () => {
        console.log(counterRef.current)
    };

    return (
        <div>
            <h1>
                UseRef
            </h1>
            <div className="block">
                <div className="mb-5">
                   Render count is {renderCount.current}
                </div>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
            </div>
            <div className="block">
                <div>
                    counter is {counter}
                </div>
                <div className="mb-5">
                    Prev counter is {prevCounter.current}
                </div>
                <div>
                    <button onClick={updateState}>
                        +
                    </button>
                </div>
            </div>
            <div className="block">
                <input ref={inputRef} type="text"/>
                <button onClick={() => inputRef.current.focus()}>
                    focus input
                </button>
            </div>
        </div>
    )
}
