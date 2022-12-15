import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import { Button, TextField } from "@material-ui/core";
import isReachable from "is-reachable";

/*function onClick() {
  alert("hello");
}*/

class App extends React.Component {
  CONNECTION_STATE = {
    NOT_CONNECTED: 0,
    CONNECTED: 1
  };

  state = {
    color: "red",
    text: "Color Change",
    dataURLState: "http://192.168.137.104/",
    DART_MONITORING_DNS: "http://192.168.137.104/",
    connection: 0
  };

  onClickURL() {
    this.setState({ color: "red" });
    this.setState({ text: this.state.dataURLState });

    isReachable(this.state.dataURLState, { timeout: 1 }).then((result) => {
      // logger.debug(`isReachable: ${result}`);

      this.setState({ ...this.state, connectionState: result ? 1 : 0 });

      console.log(result);
    });
  }

  onChnageURL = (e) => {
    this.setState({
      dataURLState: e.target.value
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h2 style={{ color: this.state.color }}> {this.state.text} </h2>
        <TextField
          defaultValue={this.state.DART_MONITORING_DNS}
          onChange={this.onChnageURL}
        >
          ddd
        </TextField>
        <button
          onClick={() => {
            this.onClickURL();
          }}
        >
          Click
        </button>
        <div>
          <iframe src="https://www.google.com/"> </iframe>
        </div>
      </div>
    );
  }
}

export default App;
