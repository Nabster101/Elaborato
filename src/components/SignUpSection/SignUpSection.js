import React from "react";
import Particles from "react-particles-js";
import "./SignUpSection.css"
import {Link} from "react-router-dom";

class SignUpSection extends React.Component{
    render() {
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
                    <div className="SignUpBox">
                        <form>
                            <h3>Iscriviti</h3>

                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="InputField form-control" placeholder="Inserisci il tuo nome" />
                            </div>

                            <div className="form-group">
                                <label>Cognome</label>
                                <input type="text" className="InputField form-control" placeholder="Inserisci il tuo cognome" />
                            </div>

                            <div className="form-group">
                                <label>Indirizzo email</label>
                                <input type="email" className="InputField form-control" placeholder="Inserisci il tuo indirizzo email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="InputField form-control" placeholder="Inserisci la tua password" />
                            </div>

                            <button type="submit" className="InputFieldButton btn btn-primary btn-block">Iscriviti</button>
                            <p className="forgot-password text-right">
                                Sei già registrato? Fai il <Link>login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUpSection