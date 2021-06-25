import "../../App.css";
import { Component } from "react";
import PropTypes from "prop-types";

export class Searchbar extends Component {
  state = {
    requestValue: "",
  };

  addSearchValue = (e) => {
    const { value } = e.currentTarget;
    this.setState({ requestValue: value });
  };

  submitForm = (e) => {
    e.preventDefault();

    this.props.getSearchValuee(this.state.requestValue);
    this.setState({ requestValue: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={this.state.requestValue}
            onChange={this.addSearchValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getSearchValuee: PropTypes.func.isRequired,
};
