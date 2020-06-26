import React, { useState, useEffect } from 'react';
import Dodatki from '../dane.json';

function Skomponuj(props) {

    const [dodatki, setDodatki] = useState([]);
    const [koszt, setKoszt] = useState(0);
    const [baza, setBaza] = useState(700);


    useEffect(() => {
        Dodatki.map(dodatek => {
            dodatek.checked = dodatek.koszt === 0 ? true : false;
            return dodatek;
        })
        setDodatki(Dodatki);
    }, [])

    useEffect(() => {
        setKoszt(dodatki.reduce((suma, dodatek) => {
            return dodatek.checked ? suma + dodatek.koszt : suma;
        }, baza))
    }, [baza, dodatki])

    const dodatekZmiana = (dodatek) => {

        setDodatki(
            dodatki.map(el => {
                if (el.nazwa === dodatek.nazwa) el.checked = !el.checked;
                return el;
            })
        );


    }

    const zmienRozmiar = (rozmiar) => {
        setBaza(rozmiar);
    }

    const dodajPizza = () => {
        let wielkosc = "Średnia";
        if (baza === 600) {
            wielkosc = "Mała";
        } else if (baza === 800) {
            wielkosc = "Duża"
        };

        let pizza = { wielkosc: wielkosc, koszt: koszt, dodatki: [] };
        dodatki.forEach(dodatek => {
            if (dodatek.checked) pizza.dodatki.push(dodatek);
        })
        props.otrzymajPizze(pizza);
        resetujPizze();
    }

    const resetujPizze = () => {
        dodatki.forEach(dodatek => {
            dodatek.koszt === 0 ? dodatek.checked = true : dodatek.checked = false;
        })

        setBaza(700);
    }

    return (
        <div className="skomponuj">
            <h1>Skomponuj pizzę</h1>
            <h4>Cena: {(koszt / 100).toFixed(2)}zł</h4>
            <div>
                <img className={"wielkosc mala " + (baza === 600 ? " zaznaczone" : '')} onClick={() => zmienRozmiar(600)} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_maly" />

                <img className={"wielkosc srednia " + (baza === 700 ? " zaznaczone" : '')} onClick={() => zmienRozmiar(700)} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_maly" />

                <img className={"wielkosc duza " + (baza === 800 ? " zaznaczone" : '')} onClick={() => zmienRozmiar(800)} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_duza" />

            </div>
            <div>
                <button onClick={() => dodajPizza()}>Dodaj</button>
            </div>

            <div className="dodatki">
                {dodatki.map((dodatek, index) => {
                    return (
                        <div key={index} className="dodatekRzad">
                            <input type="checkbox" checked={dodatek.checked} onChange={() => dodatekZmiana(dodatek)} />
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