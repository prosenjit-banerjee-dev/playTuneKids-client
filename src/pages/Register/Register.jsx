import { Checkbox, Label } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const {signUp} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email,password)
    .then((result) => {
      const loggedUser = result.user;
      form.reset();
      console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  };
  return (
    <div className="hero min-h-screen bg-sky-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-full max-w-full ">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Unlock the full potential of our KidsPlay Musical by logging in.Dive
            into a world of fun and interactive experiences tailored
            specifically for your little ones.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
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
                  <span className="label-text" >Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <div className="flex items-center gap-2 mt-4 mb-4">
                  <Checkbox id="remember" required />
                  <Label htmlFor="remember">Accept Terms & Conditions</Label>
                </div>
                <label className="label">
                  <small className="text-xs">
                    Already Registered?
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover hover:bg-blue-200 rounded p-1"
                    >
                      Login Now
                    </Link>
                  </small>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
