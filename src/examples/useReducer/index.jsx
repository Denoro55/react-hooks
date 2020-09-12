import React from 'react';
import AlertProvider from '../../components/alertReducer/AlertContext';
import Alert from '../../components/alertReducer/Alert';
import Controls from '../../components/alertReducer/Controls';

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
        </div>
    )
}
