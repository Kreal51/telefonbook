import React, {Component} from "react";
import { Redirect } from "react-router-dom";

class DelContacts extends Component{

    constructor(props){

        super(props);

        const kt = localStorage.getItem("KsiazkaTelefoniczna")   ;
        
        this.state = {
            id : this.props.match.params.id,
            dane : JSON.parse(kt),
            redirect : false
        }

    }

    delContacts =() => {

        let tablica = this.state.dane;
        tablica.splice(this.state.id,1);
        this.setState({dane : tablica});

        localStorage.setItem("KsiazkaTelefoniczna", JSON.stringify(this.state.dane));
        this.setState({redirect : true})
    }

    cancel =()=>{
        this.setState({redirect : true})
    }

    render(){

        if(this.state.redirect === true){
            return <Redirect to="/" />
        }

        return(
            <div>

                <p>Czy napewno chcesz usunoc poniszy kontact</p>
                <p>Imie: {this.state.dane[this.state.id].imie}</p>
                <p>Nazwisko:{this.state.dane[this.state.id].nazwisko}</p>
                <p>
                    <button onClick={this.delContacts}>Usun</button>
                    <button onClick={this.cancel}>Anuluj </button> 
                </p>

            </div>
        );
    }

}

export default DelContacts;