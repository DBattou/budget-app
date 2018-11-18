import React from "react";
import ReactDOM from "react-dom";
import "../styles/styles.scss";

const App = () => {
  return (
    <div>
      <Toggle
        render={({ state, displayText }) => {
          return (
            <div>
              {state.on && <h1>HelloBattou</h1>}
              <button onClick={displayText}>Toggle</button>
            </div>
          );
        }}
      />
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
    const { render } = this.props;

    return (
      <div>
        {render({
          state: this.state,
          displayText: this.displayText
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
