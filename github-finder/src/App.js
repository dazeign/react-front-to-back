import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Daze";
    const foo = () => "Bar";

    return (
      <Fragment>
        <h1>Hello {name}</h1>
        <h2>Goodbye {name.toUpperCase()}</h2>
        <h2>Goodbye {foo()}</h2>
      </Fragment>
    );
  }
}
export default App;
