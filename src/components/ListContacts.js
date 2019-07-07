import React, {Component} from "react";
import { Link } from "react-router-dom";

class ListContacts extends Component{

    constructor(props){

        super(props);
        const kt = localStorage.getItem("KsiazkaTelefoniczna");

        this.state = {

            dane : JSON.parse(kt)

        }

    }

    render(){

        return(
            <table>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Telefon</th>
                </tr>

                {this.state.dane != null ? this.state.dane.map((value,key) =>

                    <tr>
                        <td>{value.imie}</td>
                        <td>{value.nazwisko}</td>
                        <td>{value.email}</td>
                        <td>{value.telefon}</td>
                        <td><Link to={`/del/${key}`}>Usun kontakt</Link></td>
                        <td><Link to={`/edit/${key}`}>Edytuj kontakt</Link></td>

                    </tr>

                ):
                    <tr>
                        <td colspan ="4"> Brak danych </td>
                    </tr>
            
            }

            </table>
        );
    }

}

export default ListContacts;