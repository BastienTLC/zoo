import React from "react";
import Data from "./mainComponant/Data";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick(e) {
    console.log("oui");
    <Data />;
  }

  render() {
    return (
      <div className="NavBar">
        <h1>Navbar</h1>
        <nav>
          <ul className="AdminList">
            <Link to={"/admin/zoo"}>
              <li>ZOO</li>
            </Link>
            <Link to={"/admin/individu"}>
              <li>INDIVIDUS</li>
            </Link>
            <Link to={"/admin/user"}>
              <li>UTILISATEURS</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
