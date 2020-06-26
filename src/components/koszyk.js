import React, { useState } from 'react';
import { withRouter } from "react-router-dom"
import { CtxConsumer } from '../index';

function Koszyk(props) {

    const cofnij = () => {
        props.history.push('/');
    }
    return (
        <CtxConsumer>
            {context => (
                <div>
                    <h1>Koszyk</h1>
                    <h2>{(context.koszyk / 100).toFixed(2)}zł</h2>
                    <button onClick={() => cofnij()}>Wroć</button>
                </div>
            )}
        </CtxConsumer>
    );
}

export default withRouter(Koszyk);
