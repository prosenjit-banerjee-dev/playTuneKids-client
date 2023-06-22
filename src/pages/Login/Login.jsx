import { Button, Checkbox, Label } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-sky-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-full max-w-xl ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Unlock the full potential of our KidsPlay Musical by logging in.Dive
            into a world of fun and interactive experiences tailored
            specifically for your little ones.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Your password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <div className="flex items-center gap-2 mt-4 mb-4">
                  <Checkbox id="remember" onClick={() => setShow(!show)} />
                  <Label htmlFor="remember">
                    {show ? (
                      <span>Hide Password</span>
                    ) : (
                      <span>Show Password</span>
                    )}
                  </Label>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover mb-2">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <small className="text-xs">
                    New to KidsPlay Musical?
                    <Link
                      to="/register"
                      state={location.state}
                      className="label-text-alt link link-hover hover:bg-blue-200 rounded p-1"
                    >
                      Register here
                    </Link>
                  </small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-6">Login</button>
                <Button
                  onClick={handleGoogleSignIn}
                  outline={true}
                  gradientDuoTone="purpleToBlue"
                >
                  Sign in to Google
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
