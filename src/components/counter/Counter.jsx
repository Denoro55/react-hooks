import React from 'react';
import CounterProvider from './CounterContext';
import {CounterContext} from './CounterContext';

export default class Counter extends React.Component {
    render() {
        return (
            <CounterProvider>
                <CounterContext.Consumer>
                    {
                        ({value, inc}) => {
                            return (
                                <div>
                                    <div>
                                        Counter is {value}
                                    </div>
                                    <div>
                                       <button onClick={inc}>+</button>
                                    </div>
                                </div>
                            )
                        }
                    }
                </CounterContext.Consumer>
            </CounterProvider>
        )
    }
}
