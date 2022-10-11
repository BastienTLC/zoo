import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ville: "",
      description: ""
    };

  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changeVille(event) {
    this.setState({ ville: event.target.value });
  }

  changeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event == null
      ? alert(" Reçu : " + this.state.value + " " + this.state.name)
      : alert("Formulaire vide");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeName}
          />
        </label>
        <label>
          ville:
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeVille}
          />
        </label>
        <label>
          description:
          <textarea value={this.state.value} onChange={this.changeDescription} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
