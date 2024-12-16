import { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  render() {
    return <h1>Check the console for lifecycle logs!</h1>;
  }
}

export default LifecycleDemo;
