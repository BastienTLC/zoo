import React from "react";
import EasyEdit, { Types } from "react-easy-edit";

class Data extends React.Component {
  render() {
    return (
      <div className="Data">
        <EasyEdit
          type={Types.TEXT}
          value={this.props.contenu}
          deleteButtonLabel="Remove Me!"
          deleteButtonStyle="remove-class"
          hideDeleteButton={false}
        />
      </div>
    );
  }
}
export default Data;