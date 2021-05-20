import React, {useEffect, useState} from "react";
import {Table,Button} from "react-bootstrap";
import "./PrestazioniSection.css"
import Axios from "axios";
import {Link, useHistory} from "react-router-dom";

function PrestazioniSection () {

    const [prestazioni, setPrestazioni] = useState([])
    const [IDeliminazione, setIDeliminazione] = useState('')

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/prestazioni", { headers: {'Authorization': `Bearer ${localStorage.jwt}`} }).then((response) => {
            setPrestazioni(response.data)
        })
    }, []);

    const history = useHistory();
    const headers = {'Authorization': `Bearer ${localStorage.jwt}`}
    const data = {
        IDeliminazione: IDeliminazione
    }
    console.log(IDeliminazione);
    const eliminazionePrenotazione = () => {
        Axios.post('http://localhost:3001/prestazione/rimozione', data,{
            headers: headers,
        }).then((response) =>{
            console.log(response);
            history.push("/prestazioni");
        });
    };

    return(
        <div className="PrestazioniSection">
            <Table className="PrestazioniTable" striped bordered hover>
                <thead className="AttributeRow">
                <tr>
                    <th>Rimozione</th>
                    <th>Codice Fiscale</th>
                    <th>Prestazioni effettuate</th>
                    <th>Data appuntamento</th>
                    <th>Orario appuntamento</th>
                    <th>Pagamenti</th>
                    <th>Confermato</th>
                </tr>
                </thead>
                <tbody>
                    {prestazioni.map((prestazione, index) => (
                        <tr>
                            <td style={{textAlign: 'center'}}><button key={index} id={prestazione.ID_Assegnazione} onClick={(e) => {setIDeliminazione(e.target.id);eliminazionePrenotazione()}} type="button">X</button></td>
                            <td style={{textAlign: 'center'}}>{prestazione.CF}</td>
                            <td style={{textAlign: 'center'}}>{prestazione.TipologiaAppuntamento}</td>
                            <td style={{textAlign: 'center'}}>{prestazione.DataAppuntamento.split('T')[0]}</td>
                            <td style={{textAlign: 'center'}}>{prestazione.OrarioAppuntamento}</td>
                            <td style={{textAlign: 'center'}}>€{prestazione.CostoAppuntamento},00</td>
                            <td style={{textAlign: 'center'}}><input type="checkbox" disabled={false} checked={true}/></td>
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