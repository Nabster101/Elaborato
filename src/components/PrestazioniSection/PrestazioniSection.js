import React, {useEffect, useState} from "react";
import {Table,Button} from "react-bootstrap";
import "./PrestazioniSection.css"
import Axios from "axios";
import {Link} from "react-router-dom";

function PrestazioniSection () {

    const [prestazioni, setPrestazioni] = useState([])

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/prestazioni", { headers: {'Authorization': `Bearer ${localStorage.jwt}`} }).then((response) => {
            setPrestazioni(response.data)
        })
    }, []);

    return(
        <div className="PrenotazioniSection">
            <Table className="PrestationsTable" striped bordered hover>
                <thead className="AttributeRow">
                <tr>
                    <th>Codice Fiscale</th>
                    <th>Prestazioni effettuate</th>
                    <th>Data appuntamento</th>
                    <th>Orario appuntamento</th>
                    <th>Pagamenti</th>
                    <th>Numero studio</th>
                </tr>
                </thead>
                <tbody>
                    {prestazioni.map(prestazione => (
                        <tr>
                            <td>{prestazione.CF}</td>
                            <td>{prestazione.TipologiaAppuntamento}</td>
                            <td>{prestazione.DataAppuntamento}</td>
                            <td>{prestazione.OrarioAppuntamento}</td>
                            <td>€{prestazione.CostoAppuntamento},00</td>
                            <td>{prestazione.NumeroStudio}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="AppuntamentoButtonContainer">
                <Link to="/prenotazione">
                    <Button className="AppuntamentoButton">Prenota un appuntamento ora!</Button>
                </Link>
            </div>
        </div>
    )
}
export default PrestazioniSection