import React, {Component} from "react";
import { Redirect } from "react-router-dom";

class EditContacts extends Component{

    constructor(props){

        super(props);
        
        const kt = localStorage.getItem("KsiazkaTelefoniczna");
        const dane = JSON.parse(kt);
        

        this.state = {
            id : this.props.match.params.id,
            imie : dane[this.props.match.params.id].imie,
            nazwisko : dane[this.props.match.params.id].nazwisko,
            email : dane[this.props.match.params.id].email,
            telefon : dane[this.props.match.params.id].telefon,
            redirect : false
        }

    }

    valueChange=(event) =>{
        this.setState({[event.target.name] : event.target.value});
    }


    editContacts=()=>{
        
        let newContact ={

            imie: this.state.imie,
            nazwisko: this.state.nazwisko,
            email: this.state.email,
            telefon: this.state.telefon,
            
        }
        let kt = localStorage.getItem("KsiazkaTelefoniczna");
        let objKt = JSON.parse(kt);

        objKt[this.state.id]= newContact;
        localStorage.setItem("KsiazkaTelefoniczna",JSON.stringify(objKt));
        this.setState({redirect : true});

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
                <p>
                    Imie <br/>
                    <input type="text" name="imie" value={this.state.imie} onChange={this.valueChange} />
                      
                </p>
                <p>
                    Nazwisko <br/>
                    <input type="text" name="nazwisko" value={this.state.nazwisko} onChange={this.valueChange} />   
                </p>
                <p>
                    Email <br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.valueChange} />   
                </p>
                <p>
                    Telefon <br/>
                    <input type="text" name="telefon" value={this.state.telefon} onChange={this.valueChange} />   
                </p>

                <p>
                    <button onClick={this.editContacts}>Zapisz nowe danne</button>
                    <button onClick={this.cancele}>Anuluj</button>
                </p>


            </div>
        );
    }

}

export default EditContacts;