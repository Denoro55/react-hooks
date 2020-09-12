import React, {createContext, useState} from 'react';

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [value, setValue] = useState(5);
    const inc = () => {
        setValue(prev => prev + 1)
    };

    return (
        <CounterContext.Provider value={{
            value,
            inc
        }}>
            {
                children
            }
        </CounterContext.Provider>
    )
}
