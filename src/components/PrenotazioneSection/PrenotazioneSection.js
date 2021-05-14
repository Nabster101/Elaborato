import React, {useState} from "react";
import Axios from "axios";
import Particles from "react-particles-js";
import "./PrenotazioneSection.css"
import {Link, useHistory} from "react-router-dom";

function PrenotazioneSection() {

    const [giornoReg, setGiornoReg] = useState('')
    const [visitaReg, setVisitaReg] = useState('')
    const [orarioReg, setOrarioReg] = useState('')
    const [noteReg, setNoteReg] = useState('')

    const history = useHistory();

    const register = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/prenotazione', {
            giorno: giornoReg,
            visita: visitaReg,
            orario: orarioReg,
            note: noteReg,
        }).then((response) =>{
            console.log(response);
            history.push("/");
        });
    };

    return(
        <div className="SignUpSection">
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
            <div className="SignUpContainer">
                <form className="SignUpBox" onSubmit={register}>
                    <div>
                        <h3>Prenota ora</h3>

                        <div className="form-group">
                            <label>Giorno</label>
                            <input required={true} type="date" onChange={(e)=> {setGiornoReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo nome" />
                        </div>

                        <div className="form-group">
                            <label>Orario</label>
                            <input required={true} type="time" onChange={(e)=> {setOrarioReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo cognome" />
                        </div>

                        <div className="form-group">
                            <label>Tipo di visita</label>
                            <input required={true} type="text" onChange={(e)=> {setVisitaReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo codice fiscale" />
                        </div>

                        <div className="form-group">
                            <label>Note</label>
                            <input required={true} type="text" onChange={(e)=> {setNoteReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo indirizzo email" />
                        </div>

                        <button className="InputFieldButton btn btn-primary btn-block">Prenota</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PrenotazioneSection