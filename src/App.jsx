import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import StateComponent from './examples/useState'
import EffectComponent from './examples/useEffect'
import RefComponent from './examples/useRef'
import MemoComponent from './examples/useMemo'
import CallbackComponent from './examples/useCallback'
import ContextComponent from './examples/useContext'
import ReducerComponent from './examples/useReducer'
import CustomComponent from './examples/useCustomHook';

const nav = [
    {
        to: '/state', text: 'useState', component: StateComponent
    },
    {
        to: '/effect', text: 'useEffect', component: EffectComponent
    },
    {
        to: '/ref', text: 'useRef', component: RefComponent
    },
    {
        to: '/memo', text: 'useMemo', component: MemoComponent
    },
    {
        to: '/callback', text: 'useCallback', component: CallbackComponent
    },
    {
        to: '/context', text: 'useContext', component: ContextComponent
    },
    {
        to: '/reducer', text: 'useReducer', component: ReducerComponent
    },
    {
        to: '/custom', text: 'useCustomHook', component: CustomComponent
    }
];

function App() {
    const getNav = () => {
        return nav.map(({to, text}) => {
            return (
                <li>
                    <Link to={to}>
                        {text}
                    </Link>
                </li>
            )
        })
    };

    const getRoutes = () => {
        return nav.map(({to, component: Component}) => {
            return (
                <Route path={to}>
                    <Component />
                </Route>
            )
        })
    };

    return (
        <div className="App">
            <Router>
                <nav>
                    <ul className="nav-list">
                        { getNav() }
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    { getRoutes() }
                </Switch>
            </Router>
        </div>
    );
}

export default App;
