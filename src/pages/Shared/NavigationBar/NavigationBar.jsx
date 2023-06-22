import { Button, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import logo from "../../../assets/logo3.png";
import logo2 from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleActiveButton = ({ isActive }) =>
    isActive ? "bg-blue-500 text-white p-2 rounded-md" : "p-2";

  return (
    <Navbar fluid={true} className="bg-sky-300">
      <Tooltip content="KidsPlay Home" style="dark">
        <Link to="/" className="flex">
          <img
            src={logo}
            className="mr-3 h-9 lg:h-16 rounded-full"
            alt="KidsPlay Tune Logo"
          />
          <span className="btn btn-ghost normal-case text-xl self-center whitespace-nowrap font-semibold dark:text-white">
            KidsPlay Musical
          </span>
        </Link>
      </Tooltip>
      <div className="flex md:order-2">
        {user ? (
          <>
            {user?
            <img
            src={user?.photoURL}
            className="mr-3 w-9 lg:h-9 rounded-full"
            title={user?.displayName}
            alt="User Picture"
          />
            :<img
              src={logo2}
              className="mr-3 w-9 lg:h-9 rounded-full"
              title="User"
              alt="User Picture"
            />}
            <Tooltip content="Tap to Logout" style="dark">
              <Link onClick={handleLogout}>
                <Button gradientMonochrome="purple">Logout</Button>
              </Link>
            </Tooltip>
          </>
        ) : (
          <Tooltip content="Tap to Login" style="dark">
            <Link to="/login">
              <Button gradientMonochrome="purple">Login</Button>
            </Link>
          </Tooltip>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/" className={handleActiveButton}>
          Home
        </NavLink>
        <NavLink to="/allToys" className={handleActiveButton}>
          All Toys
        </NavLink>
        {user && (
          <NavLink to="/myToys" className={handleActiveButton}>
            My Toys
          </NavLink>
        )}
        <NavLink to="/addToys" className={handleActiveButton}>
          Add A Toy
        </NavLink>
        <NavLink to="/blogs" className={handleActiveButton}>
          Blogs
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
