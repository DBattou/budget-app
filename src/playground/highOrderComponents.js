import React from "react";
import ReactDOM from "react-dom";
import "../styles/styles.scss";

class App extends React.Component {
  state = {
    isAuthenticated: false
  };

  logIn = () => {
    this.setState({
      isAuthenticated: true
    });
  };

  logOut = () => {
    this.setState({
      isAuthenticated: false
    });
  };

  render() {
    return (
      <div>
        <UserSecretInfo isAuthenticated={this.state.isAuthenticated} />
        <button onClick={this.logIn}>Log in</button>
        <button onClick={this.logOut}>Log out</button>
      </div>
    );
  }
}

const Info = () => (
  <div>
    <h1>Super Secret informations</h1>
    <p>My name is : Battou</p>
  </div>
);

const authentifiedUserInfos = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent />
      ) : (
        <p>Please log in to see the secret informations</p>
      )}
    </div>
  );
};

const UserSecretInfo = authentifiedUserInfos(Info);

ReactDOM.render(<App />, document.getElementById("root"));
