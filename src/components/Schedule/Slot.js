import React from "react";

class Slot extends React.Component {
  render() {
    return <th>{this.props.hour}</th>;
  }
}

export default Slot;
