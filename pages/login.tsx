import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>login</h1>

      <button onClick={() => loginWithRedirect()}>Click here to login</button>
    </div>
  );
}

export default Login;
