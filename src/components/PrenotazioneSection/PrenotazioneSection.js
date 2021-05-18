import React, {useEffect, useState} from "react";
import Axios from "axios";
import Particles from "react-particles-js";
import "./PrenotazioneSection.css"
import {Link, useHistory} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function PrenotazioneSection() {

    const [giornoReg, setGiornoReg] = useState('')
    const [visitaReg, setVisitaReg] = useState('')
    const [orarioReg, setOrarioReg] = useState('')
    const [noteReg, setNoteReg] = useState('')

    const today = `${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}`;
    console.log(today)

    const history = useHistory();
    const headers = {'Authorization': `Bearer ${localStorage.jwt}`}
    const data = {
        giorno: giornoReg,
        visita: visitaReg,
        orario: orarioReg,
        note: noteReg,
    }
    const register = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/prenotazione', data,{
            headers: headers,
        }).then((response) =>{
            console.log(response);
            history.push("/prestazioni");
        });
    };

    return(
        <div className="PrenotazioniSection">
            <div className="test">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="PrenotazioneContainer">
                <form className="PrenotazioneBox" onSubmit={register}>
                    <div>
                        <h3>Prenota ora</h3>

                        <div className="form-group">
                            <label>Giorno</label>
                            <input id="GiornoAppuntamento" required={true} type="date" min={today} onChange={(e)=> {setGiornoReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci la data" />
                        </div>

                        <div className="form-group">
                            <label>Orario</label>
                            <input id="OrarioAppuntamento" required={true} type="time" min="08:00" max="18:00" onChange={(e)=> {setOrarioReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo cognome" />
                        </div>

                        <div className="form-group">
                            <label>Tipo di visita</label>
                            <select required={true} onChange={(e)=> {setVisitaReg(e.target.value)}} className="InputField form-control" id="dropdown">
                                <option value="">...</option>
                                <option value="Igiene Dentale">Igiene dentale €20</option>
                                <option value="Analisi estetica del sorriso">Analisi estetica del sorriso €10</option>
                                <option value="Applicazione brillantino al dente">Applicazione brillantino al dente €50</option>
                                <option value="Dentiera mobile">Dentiera mobile €1500-2000</option>
                                <option value="Dentiera fissa">Dentiera fissa €2000-3000</option>
                                <option value="Rigenerazione ossea dentale">Rigenerazione ossea dentale €500</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Note</label>
                            <textarea style={{resize: 'none'}} required={false} type="text" onChange={(e)=> {setNoteReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci eventuali note" cols="10" rows="5" />
                        </div>

                        <button className="InputFieldButton btn btn-primary btn-block">Prenota</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PrenotazioneSection