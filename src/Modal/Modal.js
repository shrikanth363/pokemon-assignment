import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Pokemon : {this.props.name}</h2>
        <div className="content"><strong>Type: </strong>{this.props.type}</div>
        <div className="content"><strong>Ability: </strong> {this.props.ability}</div>
        <div className="content"><strong> Exp: </strong> {this.props.exp}</div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};