import React from "react";
import Form from "./mainComponant/FormZoo";
import Data from "./mainComponant/Data";
import test from "./mainComponant/test.json";

class Zoo extends React.Component {
  render() {
    return (
      <div className="Zoo">
        <h1>Zoo</h1>
        <Form />
        {test.map((p) => (
          <div key={p.id} className={"divelem"}>
            <Data contenu={p.id} key={p.id} />
            <Data contenu={p.name} key={p.id} />
            <Data contenu={p.adresse} key={p.id} />
            <Data contenu={p.taille} key={p.id} />
            <Data contenu={p.prix} key={p.id} />
            <Data contenu={p.siteweb} key={p.id} />
            <Data contenu={p.pays} key={p.id} />
          </div>
        ))}
      </div>
    );
  }
}
export default Zoo;
