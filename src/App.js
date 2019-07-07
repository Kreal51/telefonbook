import  React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import ListContacts from "./components/ListContacts";
import AddContacts from "./components/AddContacts";
import DelContacts from "./components/DelContacts";
import EditContacts from "./components/EditContacts";


class App extends Component {

    render(){

    return(

      <div>
        <h1>Książka telefoniczna</h1>

        <BrowserRouter>        
          <ul>
            <li>
              <Link to="/">Lista kontaktów (HOME)</Link>
            </li>
            <li>
              <Link to="/add">Dodaj kontakt</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={ListContacts} />
            <Route exact path="/add" component={AddContacts} />
            <Route exact path="/del/:id" component={DelContacts} />
            <Route exact path="/edit/:id" component={EditContacts} />
            
          </Switch>

        </BrowserRouter>

      </div>

    );
}

}

export default App;