import React, { Component } from "react";
import "./loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ margin: "90px 0px" }}
      >
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
