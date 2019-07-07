import React, {Component} from "react";
import { Redirect } from "react-router-dom";

class AddContacts extends Component{

    constructor(props){

        super(props);
        this.state ={
            imie: "",
            nazwisko: "",
            email: "",
            telefon: "",
        }
        

    }

    addContact=()=>{
        
        let newContact ={

            imie: this.state.imie,
            nazwisko: this.state.nazwisko,
            email: this.state.email,
            telefon: this.state.telefon,
            redirect: false
        }

        if(localStorage.getItem("KsiazkaTelefoniczna")){

            let kt = localStorage.getItem("KsiazkaTelefoniczna");
            let objKt = JSON.parse(kt);

            objKt.push(newContact);

            localStorage.setItem("KsiazkaTelefoniczna", JSON.stringify(objKt))
        }
        else{
        localStorage.setItem("KsiazkaTelefoniczna",JSON.stringify([newContact]))
        }
            this.setState({redirect : true})
    }

    valueChange=(event) =>{
        this.setState({[event.target.name] : event.target.value});
    }

    render(){


            if(this.state.redirect===true){
                return <Redirect to="/" />
            }
        return(
            <div>

                <p>
                    Imie<br/>
                    <input type= "text" name="imie" onChange={this.valueChange}/>
                </p>

                <p>
                    Nazwisko<br/>
                    <input type= "text" name="nazwisko" onChange={this.valueChange}/>
                </p>

                <p>
                    Email<br/>
                    <input type= "text" name="email" onChange={this.valueChange}/>
                </p>

                <p>
                    Telefon<br/>
                    <input type= "text" name="telefon" onChange={this.valueChange}/>
                </p>
                <p>
                        <button onClick={this.addContact}>Zapisz danne </button>
                </p>

            </div>
        );
    }

}

export default AddContacts;