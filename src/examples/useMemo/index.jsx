import React, {useEffect, useMemo, useState} from 'react';

const complexComputedValue = (n) => {
    let i = 0;
    while (i < 1000000000) {
        i ++
    }
    return n * n
};

export default function() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('green');

    const inc = () => {
        setCounter(prev => prev + 1);
    };

    const dec = () => {
        setCounter(prev => prev - 1)
    };

    const switchColor = () => {
        setColor(prev => {
            return prev === 'green' ? 'red' : 'green'
        });
    };

    // если не закешировать, при каждом рендере будет создаваться новый объект styles
    const styles = useMemo(() => ({
        color
    }), [color]);

    useEffect(() => {
        console.log('styles changed');
    }, [styles]);

    // если не закешировать - вызывается тяжелая функция при любом рендере
    // const complexValue = complexComputedValue(counter);

    // кешируем. возвращает результат функции, а не функцию, в отличии от useCallback
    const complexValue = useMemo(() => complexComputedValue(counter), [counter]);

    return (
        <div>
            <div className="block">
                <div style={styles}>
                    Counter is {complexValue}
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
