import React, {useState} from 'react';

const computeValue = () => {
    console.log('calculation...');
    return Math.ceil(Math.random() * 10);
};

export default function () {
    const [cnt, setCnt] = useState(0);

    // const [counter, setCounter] = useState(computeValue()); // вызов при любом рендере компонента, замедляет приложение, при этом не возвращает новое состояние
    const [counter, setCounter] = useState(() => computeValue()); // вызов один раз, при первом рендере

    const [person, setPerson] = useState({
        name: 'Den',
        age: 22
    });

    const inc = () => {
        // код асинхронный

        // вычисляем на основе предыдущего значения.
        setCnt(prev => prev + 1);
        // setCnt(prev => prev + 1);

        // вычисляем на основе текущего значения. Так как код асинхронный - значение cnt дважды возьмется одинаковое,
        // поэтому значение увеличится не на 2, а на 1.
        // setCnt(cnt + 1);
        // setCnt(cnt + 1);
    };

    const dec = () => {
        setCnt(prev => prev - 1)
    };

    const changePerson = () => {
        setPerson(prev => ({
            ...prev,
            age: prev.age + 1
        }))
    };

    return (
        <div>
            <h1>
                UseState
            </h1>
            <div className="block">
                <div className="mb-5">
                    Cnt is {cnt}
                </div>
                <div>
                    <button onClick={inc}>+ 1</button>
                    <button onClick={dec}>- 1</button>
                </div>
            </div>
            <div className="block">
                <div className="mb-5">
                    Counter is {counter}
                </div>
                <div>
                    <button onClick={() => setCounter(c => c + 1)}>+ 1</button>
                    <button onClick={() => setCounter(c => c - 1)}>- 1</button>
                </div>
            </div>
            <div className="block">
                <div className="mb-5">
                    Person is {JSON.stringify(person)}
                </div>
                <div>
                    <button onClick={changePerson}>Change person</button>
                </div>
            </div>
        </div>
    )
}
