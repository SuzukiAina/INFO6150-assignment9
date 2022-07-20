import { useRef, useState, useEffect, useContext } from "react";
import Card from "../Card/Card";

function Login() {
  const [InputEmail, setEmail] = useState("");
  const [InputPassword, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  var details = {
    email: InputEmail,
    password: InputPassword,
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: formBody,
    };
    fetch("http://localhost:3000/user/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.exist == true) {
          setSuccess(true);
        } else {
          alert("Your email or password is not valid");
        }
      });
  };
  return (
    <>
      {success ? (
        <div className="panel">
          <h1>Login Success</h1>
          <Card id="Login"></Card>
        </div>
      ) : (
        <div className="panel">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="InputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                id="InputEmail"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <Card id="Login"></Card>
        </div>
      )}
    </>
  );
}

export default Login;
