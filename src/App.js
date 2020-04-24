import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    compteur: 0,
    clients: [
      {
        id: 1,
        nom: "Lior Chamla"
      },
      {
        id: 2,
        nom: "Magali Pernin "
      },
      {
        id: 3,
        nom: "Joseph Durand"
      }
    ]
  };

  handleClick() {
    const clients = this.state.clients.slice();
    clients.push({ id: 4, nom: "Anne Dupont" });
    this.setState({ clients: clients });
    console.log(this.state);
  }

  render() {
    const title = "Liste des clients";
    const elements = this.state.clients.map(client => (
      <li>
        {client.nom}
        <button>X</button>
      </li>
    ));
    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}
        <button onClick={this.handleClick.bind(this)}>Click</button>
        {elements}

        <form>
          <input type="text" placeholder="Ajouter un client" />
        </form>
      </div>
    );
  }
}

export default App;
