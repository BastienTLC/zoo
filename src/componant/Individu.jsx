import React from "react";
import Form from "./mainComponant/Form";
import Data from "./mainComponant/Data";

class Individu extends React.Component {
  render() {
    return (
      <div className="Zoo">
        <h1>Zoo</h1>
        <Form />
        <Data contenu="aaaaaaaaaaaa" />
      </div>
    );
  }
}
export default Individu;
