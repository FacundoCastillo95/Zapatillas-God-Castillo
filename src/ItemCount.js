import React, { Component } from "react";

class ItemCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          +
        </button>

        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}>
          -
        </button>
      </div>
    );
  }
}

export default ItemCount;