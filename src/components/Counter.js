import React from "react";

class Counter extends React.Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <div>
          {this.props.heading}: {this.state.counter}
        </div>
        <button onClick={this.incrementCounter}>Add</button>
        <button onClick={this.decrementCounter}>Sub</button>
      </div>
    );
  }
}

export default Counter;
