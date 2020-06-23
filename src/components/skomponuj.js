import React, { useState, useEffect } from 'react';
import Dodatki from '../dane.json';

function Skomponuj() {

    const [dodatki, setDodatki] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>Skomponuj pizzę</h1>
            {Dodatki.map((dodatkek) => {
                return (
                    <p>{dodatkek.nazwa}</p>
                )
            })}
        </div>
    );
}

export default Skomponuj;