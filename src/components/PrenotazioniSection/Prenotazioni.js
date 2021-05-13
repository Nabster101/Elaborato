import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import "./Prenotazioni.css"
import Axios from "axios";
import data from "bootstrap/js/src/dom/data";

function PrenotazioniSection () {

    const [prestazioni, setPrestazioni] = useState([])

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/prenotazioni", { headers: {'Authorization': `Bearer ${localStorage.jwt}`} }).then((response) => {
            console.log(typeof response)
            console.log(response)
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
                    <th>Pagamenti</th>
                </tr>
                </thead>
                <tbody>
                    {prestazioni.map(prestazione => (
                        <tr>
                            <td>{prestazione.CF}</td>
                            <td>{prestazione.TipologiaAppuntamento}</td>
                            <td>€{prestazione.CostoAppuntamento},00</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default PrenotazioniSection