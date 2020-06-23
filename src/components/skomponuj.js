import React, { useState, useEffect } from 'react';
import Dodatki from '../dane.json';

function Skomponuj() {

    const [dodatki, setDodatki] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className="dodatki">
            <h1>Skomponuj pizzę</h1>
            {Dodatki.map((dodatek, index) => {
                return (
                    <div key={index} className="dodatekRzad">
                        <input type="checkbox" />
                        <img className="dodatek_ikonka" src={process.env.PUBLIC_URL + "/assets/" + dodatek.nazwa + ".png"} alt={dodatek.nazwa} />
                        <p>{dodatek.nazwa}</p>
                        {dodatek.koszt === 0 ? <p>free</p> : <p>{(dodatek.koszt / 100).toFixed(2)}zł</p>}
                    </div>
                )
            })}
        </div>
    );
}

export default Skomponuj;