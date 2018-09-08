import React, { Component } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";

export class Controller extends Component {

  render() {
    return (
      <Counter {...this.props}/>
    );
  }
};

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Counter);
