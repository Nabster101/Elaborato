import React, {useState} from "react";
import Axios from "axios";
import Particles from "react-particles-js";
import "./SignUpSection.css"
import {Link, useHistory} from "react-router-dom";

function SignUpSection() {

    const [nameReg, setNameReg] = useState('')
    const [lastnameReg, setLastNameReg] = useState('')
    const [cfReg, setCfReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [passwordConf, setPasswordConf] = useState('')

    const history = useHistory();

    const register = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/iscriviti', {
            nome: nameReg,
            cognome: lastnameReg,
            cf: cfReg,
            email: emailReg,
            password: passwordReg,
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
                        <h3>Iscriviti</h3>

                        <div className="form-group">
                            <label>Nome</label>
                            <input required={true} type="text" onChange={(e)=> {setNameReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo nome" />
                        </div>

                        <div className="form-group">
                            <label>Cognome</label>
                            <input required={true} type="text" onChange={(e)=> {setLastNameReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo cognome" />
                        </div>

                        <div className="form-group">
                            <label>Codice fiscale</label>
                            <input required={true} type="text" onChange={(e)=> {setCfReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo codice fiscale" />
                        </div>

                        <div className="form-group">
                            <label>Indirizzo email</label>
                            <input required={true} type="email" onChange={(e)=> {setEmailReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo indirizzo email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input required={true} type="password" onChange={(e)=> {setPasswordReg(e.target.value)}} className="InputField form-control" placeholder="Inserisci la tua password" />
                        </div>
                        <div className="form-group">
                            <label>Conferma la password</label>
                            <input required={true} type="password" onChange={(e)=> {setPasswordConf(e.target.value)}} className="InputField form-control" placeholder="Conferma la password" />
                        </div>

                        <button className="InputFieldButton btn btn-primary btn-block">Iscriviti</button>
                        <p className="password-check text-left">
                            {(passwordReg === passwordConf) ?
                                <>
                                </>
                                :
                                <>
                                    Le password non corrsipondono
                                </>

                            }
                        </p>
                        <p className="forgot-password text-right">
                            Sei già registrato? Fai il <Link to="/login">login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUpSection