import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const onClickHandler = () => {
    let path = "/dashboard";
    signIn(name, password, () => {
      navigate(path, { replace: true });
    });
  };
  return (
    <div>
      <h1>Login page</h1>
      <div>
        <label>Email: </label>
        <input type={"email"} onChange={(e) => setname(e.target.value)} />
        <br />
        <label>Password: </label>
        <input type={"password"} onChange={(e) => setname(e.target.value)} />

        <button onClick={onClickHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
