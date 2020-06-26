import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { CtxConsumer } from '../index';

function Zamowienie(props) {

    const [koszt, setKoszt] = useState(0);
    const [zamowienie, setZamowienie] = useState([]);

    useEffect(() => {
        if (props.nowaPizza) {
            setZamowienie(zam => [...zam, props.nowaPizza]);
        }
    }, [props.nowaPizza])
    useEffect(() => {
        let kosztWszystkich = zamowienie.reduce((suma, pizza) => suma + pizza.koszt, 0);
        setKoszt(kosztWszystkich)
    }, [zamowienie])

    const usunPizze = indx => {
        let zam = zamowienie.filter((pizza, index) => index !== indx);
        setZamowienie(zam);
    }

    const zaplac = (ctx) => {
        ctx.odswiez(koszt);
        props.history.push('/koszyk')
    }

    return (

        <CtxConsumer>
            {context => (
                <div style={{ "flexGrow": 1 }}>
                    <h1>Twoje zamówienie</h1>
                    {zamowienie.map((pizza, index) => {
                        return (

                            <div key={index} className="zamowienieRzad">
                                <h3>
                                    {index + 1}# {pizza.wielkosc} pizza
                    ({pizza.dodatki.length} <IleDodatkow ilosc={pizza.dodatki.length} />);
                    &nbsp; | &nbsp;
                    {(pizza.koszt / 100).toFixed(2)}zł
                    </h3>
                                <h3 onClick={() => usunPizze(index)}>X</h3>
                            </div>
                        )
                    })}
                    <p>------------------------</p>
                    <p>Do zapłaty: {(koszt / 100).toFixed(2)}zł</p>
                    <button onClick={() => zaplac(context)}>Zapłać</button>
                </div>
            )}
        </CtxConsumer>

    );
}

function IleDodatkow({ ilosc }) {
    if (ilosc === 1) {
        return "dodatek"
    } else if (ilosc > 1 && ilosc < 5) {
        return "dodatki"
    };

    return "dodatków";
}


export default withRouter(Zamowienie);