import { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./modal.scss";

const modal = document.querySelector("#modal");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  BackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.BackdropClick}>
        <img
          className="Modal"
          src={this.props.img}
          alt="thematic-Photography"
        />
      </div>,
      modal
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
