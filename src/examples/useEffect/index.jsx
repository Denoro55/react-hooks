import React, {useEffect, useState} from 'react';

export default function () {
    const [type, setType] = useState('posts');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    const changeType = (name) => {
        setType(name);
    };

    const mouseMoveHandler = (event) => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    };

    useEffect(() => {
        // функция вызывается на каждый render
        console.log('render')
    });

    useEffect(() => {
        // функция вызывается только один раз
        console.log('initial render');

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, []);

    useEffect(() => {
        // функция вызывается только при изменении type
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);

    return (
        <div>
            <h1>
                UseEffect
            </h1>
            <div className="block">
                pos is {JSON.stringify(pos, null, 2)}
            </div>
            <div className="block">
                <div className="mb-5">
                    Type is {type}
                </div>
                <button onClick={() => changeType('posts')}>
                    posts
                </button>
                <button onClick={() => changeType('todos')}>
                    todos
                </button>
                <button onClick={() => changeType('users')}>
                    users
                </button>
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    )
}
