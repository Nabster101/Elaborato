import React, {useEffect, useState} from "react";
import Axios from "axios";
import Particles from "react-particles-js";
import "./EsamiDigitaliCreazione.css"
import {Link, useHistory} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function EsamiDigitaliCreazione() {

    const [giornoReg, setGiornoReg] = useState('')
    const [esameReg, setEsameReg] = useState('')

    const today = `${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}`;
    console.log(today)

    const history = useHistory();
    const headers = {'Authorization': `Bearer ${localStorage.jwt}`}
    const data = {
        giorno: giornoReg,
        esame: esameReg,
    }
    const esame = (e) => {
        console.log(giornoReg)
        e.preventDefault()
        Axios.post('http://localhost:3001/aggiunta-esami-digitali', data,{
            headers: headers,
        }).then((response) =>{
            console.log(response);
            history.push("/esami-digitali");
        });
    };

    return(
        <div className="EsamiDigitaliAggiuntaSection">
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
            <div className="EsameDigitaleContainer">
                <form className="EsameDigitaleBox" onSubmit={esame}>
                    <div>
                        <h3>Esame digitale</h3>

                        <div className="form-group">
                            <label>Giorno</label>
                            <input id="GiornoEsame" required={true} type="date" max={today} onChange={(e)=> {setGiornoReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci la data" />
                        </div>

                        <div className="form-group">
                            <label>Seleziona il tipo di esame</label>
                            <select required={true} onChange={(e)=> {setEsameReg(e.target.value)}} className="InputField form-control" id="dropdown">
                                <option value="">...</option>
                                <option value="Radiografia">Radiografia</option>
                                <option value="Tac volumetrica">Tac volumetrica</option>
                                <option value="Radiografia endornale">Radiografia endornale</option>
                                <option value="Teleradiografia">Teleradiografia</option>
                            </select>
                        </div>

                        <button className="InputFieldButton btn btn-primary btn-block">Inserisci</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EsamiDigitaliCreazione