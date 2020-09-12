import React, {useCallback, useEffect, useMemo, useState} from 'react';

export default function() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('green');

    const switchColor = () => {
        setColor(prev => {
            return prev === 'green' ? 'red' : 'green'
        });
    };

    const inc = () => {
        setCounter(prev => prev + 1);
    };

    const dec = () => {
        setCounter(prev => prev - 1)
    };

    // если не использовать хук, то при каждом рендере (изменении любого другого состояния, не влияющего на результат функции)
    // в Generator компонент будет передаваться новая функция и вызывать useEffect
    const getNumber = useCallback(() => {
        console.log('get number function has been called');
        return counter;
    }, [counter]);

    return (
        <div>
            <div className="block">
                <div style={{color}} className="mb-5">
                    Counter is {counter}
                </div>
                <div>
                    <Generator getNumber={getNumber} />
                </div>
                <div>
                    <button onClick={inc}>+ 1</button>
                    <button onClick={dec}>- 1</button>
                    <button onClick={switchColor}>switch color</button>
                </div>
            </div>
        </div>
    )
}

const Generator = ({ getNumber }) => {
    const [cnt, setCnt] = useState(0);

    useEffect(() => {
        setCnt(getNumber());
    }, [getNumber]);

    return (
        <div>
            Result is { cnt }
        </div>
    )
};
