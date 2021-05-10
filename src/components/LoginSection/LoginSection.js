import React from "react";
import "./LoginSection.css"
import Particles from "react-particles-js";
import {Link} from "react-router-dom";

class LoginSection extends React.Component{
    render() {
        return(
            <div className="LoginSection">
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
                <div className="LoginContainer">
                    <div className="LoginBox">
                        <form>
                            <h3>Login</h3>

                            <div className="form-group">
                                <label>Indirizzo email</label>
                                <input type="email" className="InputField form-control" placeholder="Inserisci il tuo indirizzo email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="InputField form-control" placeholder="Inserisci la tua password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Ricordami</label>
                                </div>
                            </div>

                            <button type="submit" className="InputFieldButton btn btn-primary btn-block">Entra</button>
                            <p className="forgot-password text-right">
                                Dimenticato la <Link href="#">password?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginSection