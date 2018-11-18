import React from "react";
import ReactDOM from "react-dom";
import "../styles/styles.scss";

const App = () => {
  return (
    <div>
      <Toggle>
        {({ state, displayText }) => (
          <div>
            {state.on && <h1>HelloBattou</h1>}
            <button onClick={displayText}>Toggle</button>
          </div>
        )}
      </Toggle>
    </div>
  );
};

class Toggle extends React.Component {
  state = {
    on: false
  };

  displayText = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children } = this.props;

    return children({
      state: this.state,
      displayText: this.displayText
    });
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
