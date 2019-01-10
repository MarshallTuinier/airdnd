import * as React from "react";
import { Register } from "./Register";
import { RegisterController } from "@airdnd/controllers";

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <>
        <RegisterController>
          {({ submit }) => {
            return <Register submit={submit} />;
          }}
        </RegisterController>
      </>
    );
  }
}
