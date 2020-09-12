import React from 'react';
import AlertProvider from '../../components/alert/AlertContext';
import Alert from '../../components/alert/Alert';
import Controls from '../../components/alert/Controls';

import Counter from '../../components/counter/Counter';

export default function() {
    return (
        <div>
            <h2>Functional Context Example</h2>
            <div className="block">
                <AlertProvider>
                    <Alert />
                    <Controls />
                </AlertProvider>
            </div>
            <h2>Class Context Example</h2>
            <div className="block">
                <Counter />
            </div>
        </div>
    )
}
