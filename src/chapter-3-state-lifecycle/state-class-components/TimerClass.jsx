import React, { Component } from "react";

class TimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>Elapsed Time: {this.state.seconds} seconds</p>
      </div>
    );
  }
}

export default TimerClass;
