import React, {useState} from "react";
import "./LoginSection.css"
import {Link} from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function LoginSection() {

    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [loginStatus, setLoginStatus] = useState('');

    const history = useHistory();

    const login = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3001/login", {
            emailUser: emailUser,
            passwordUser: passwordUser,
        }).then((response) => {
            if (response.data.message){
                setLoginStatus(response.data.message)
            }

            if (response.data.token) {
                localStorage.setItem('jwt', response.data.token)
                setTimeout (() => { history.push("/"); }, 2000);
            }
        });
    };

    return(
        <div className="LoginSection">
            <div className="test">
                
            </div>
            <div className="LoginContainer">
                <form className="LoginBox" onSubmit={login}>
                    <div>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Indirizzo email</label>
                            <input autoComplete="email" type="email" onChange={(e)=> {setEmailUser(e.target.value)}} className="InputField form-control" placeholder="Inserisci il tuo indirizzo email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={(e)=> {setPasswordUser(e.target.value)}} className="InputField form-control" placeholder="Inserisci la tua password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Ricordami</label>
                            </div>
                        </div>

                        <button className="InputFieldButton btn btn-primary btn-block">Entra</button>
                        <p className="forgot-password text-left">
                            {loginStatus}
                        </p>
                        <p className="forgot-password text-right">
                            Dimenticato la <Link to="/login">password?</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginSection