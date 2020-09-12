import React, {createContext, useContext, useReducer} from 'react';

const ACTION_TOGGLE = 'TOGGLE';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext)
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TOGGLE:
            return {
                ...state,
                visible: !state.visible,
                text: action.text
            };
    }
};

export default function AlertProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    });

    const toggle = (text) => {
        dispatch({
            type: ACTION_TOGGLE,
            text
        })
    };

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            toggle,
            text: state.text
        }}>
            {
                children
            }
        </AlertContext.Provider>
    )
}
