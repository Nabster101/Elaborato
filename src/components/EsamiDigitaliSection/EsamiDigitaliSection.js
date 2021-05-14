import React, {useEffect, useState} from "react";
import {Table,Button} from "react-bootstrap";
import "./EsamiDigitaliSection.css"
import Axios from "axios";
import {Link} from "react-router-dom";

function EsamiDigitaliSection () {

    const [esami, setEsami] = useState([])

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/esami-digitali", { headers: {'Authorization': `Bearer ${localStorage.jwt}`} }).then((response) => {
            setEsami(response.data)
        })
    }, []);

    return(
        <div className="PrenotazioniSection">
            <Table className="PrestationsTable" striped bordered hover>
                <thead className="AttributeRow">
                <tr>
                    <th>Codice Fiscale</th>
                    <th>Tipologia</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {esami.map(esame => (
                    <tr>
                        <td>{esame.CF}</td>
                        <td>{esame.Tipologia}</td>
                        <td>{esame.DataEsame}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}
export default EsamiDigitaliSection