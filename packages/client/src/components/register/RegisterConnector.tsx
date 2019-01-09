import * as React from "react";
import { Register } from "./Register";

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <Register submit={this.dummySubmit} />;
  }
}
