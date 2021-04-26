import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/auth";

const Navbar = () => {

  const isAuthenticated = useSelector((state => state.auth.token !== null))
  const dispatch = useDispatch()
  const quit = () => {
    dispatch(logout())
  }
  return (
      <nav>
        <div className="logo">
          Test<font>Project</font>
        </div>
        <ul className="menu-list">
          <li>
            <NavLink exact to='/' activeClassName="active">
              Home
            </NavLink>
          </li>
          { isAuthenticated ?
              <>
                <li>
                  <NavLink exact to='/admin_page' activeClassName="active">
                    Admin page
                  </NavLink>
                </li>
                <li>
                  <Link activeClassName="active">
                    <span onClick={quit}>Logout</span>
                  </Link>
                </li>
              </>
              :
              <li>
                <NavLink exact to='/login' activeClassName="active">
                  Login
                </NavLink>
              </li>
          }
        </ul>
      </nav>
  );
};

export default Navbar;