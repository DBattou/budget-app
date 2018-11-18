import React from "react";
import ReactDOM from "react-dom";
import "../styles/styles.scss";

class Counter extends React.PureComponent {
  state = {
    counting: false,
    counter: 0
  };

  startCounting = () => {
    this.setState({
      counting: true
    });
  };

  stopCounting = () => {
    this.setState({
      counting: false
    });
  };

  componentDidUpdate() {
    console.log("====================================");
    console.log(this.state);
    console.log("====================================");
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.counting == true) {
        this.setState({
          counter: this.state.counter + 1
        });
      } else {
        this.setState({
          counter: this.state.counter
        });
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <span>The value is : {this.state.counter}</span>
        </div>
        <div>
          <button onClick={this.startCounting}>Start counting</button>
          <button onClick={this.stopCounting}>Stop counting</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
