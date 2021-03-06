import React, { useState } from "react";
import { PageHeader, Input, Button } from "antd";
import { auth } from "../../firebase";
import { navigate } from "@reach/router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignIn = () => {
    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        console.log("user signed in");
        navigate(`/create_post`);
      })
      .catch(function (error) {
        console.log("there was an error signin in");
        console.log(error);
      });
    setEmail("");
    setPassword("");
    navigate("sign_in")
  };

  return (
    <div className="sign_up_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)",
          }}
          title="Sign In"
        />
      </div>

      <div className="sign_up_container_inputs" style={{ marginTop: "20px" }}>
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Email</h2>
          </div>

          <div className="post_input">
            <Input placeholder="email:angelov2000@abv.bg" onChange={onEmailChange} />
          </div>
        </div>

        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Password</h2>
          </div>

          <div className="post_input">
            <Input.Password
              placeholder="password:angelov2000"
              onChange={onPasswordChange}
            />
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <a href="#">Don't have an account, Sign Up</a>
          </div>

          <div className="post_input_button">
            <Button type="primary" size="large" onClick={onSignIn}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
