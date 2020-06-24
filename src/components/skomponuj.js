import React, { useState, useEffect } from 'react';
import Dodatki from '../dane.json';

function Skomponuj() {

    const [dodatki, setDodatki] = useState([]);

    useEffect(() => {
        Dodatki.map((dodatek) => {
            dodatek.chcecked = dodatek.koszt === 0 ? true : false;
            return dodatek;
        })
        setDodatki(Dodatki);
    }, [])

    const dodatekZmiana = (dodatek) => {
        setDodatki(
            dodatki.map(el => {
                if (el.nazwa === dodatek.nazwa) el.checked = !el.checked;
                return el;
            })
        )
    }

    return (
        <div className="skomponuj">
            <h1>Skomponuj pizzę</h1>
            <h4>Cena: 0zł</h4>
            <div>
                <img className={"wielkosc mala"} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_maly" />
                <img className={"wielkosc srednia"} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_maly" />
                <img className={"wielkosc duza"} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_maly" />

            </div>
            <div>
                <button>Dodaj</button>
            </div>

            <div className="dodatki">
                {Dodatki.map((dodatek, index) => {
                    return (
                        <div key={index} className="dodatekRzad">
                            <input type="checkbox" checked={dodatek.chcecked} onChange={() => dodatekZmiana(dodatek)} />
                            <img className="dodatek_ikonka" src={process.env.PUBLIC_URL + "/assets/" + dodatek.nazwa + ".png"} alt={dodatek.nazwa} />
                            <p>{dodatek.nazwa}</p>
                            {dodatek.koszt === 0 ? <p>free</p> : <p>{(dodatek.koszt / 100).toFixed(2)}zł</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Skomponuj;