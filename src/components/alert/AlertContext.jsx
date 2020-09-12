import React, {createContext, useContext, useState} from 'react';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext)
};

export default function AlertProvider({ children }) {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(prev => !prev);
    };

    return (
        <AlertContext.Provider value={{
            visible,
            toggle
        }}>
            {
                children
            }
        </AlertContext.Provider>
    )
}
