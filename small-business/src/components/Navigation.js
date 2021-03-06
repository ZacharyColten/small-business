import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          <li className="nav-list-item">
            {props.user.loggedIn ? (
              <li className="nav-list-item">
                <Link to="/">Logout</Link>
              </li>
            ) : (
              <li className="nav-list-item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </li>
          <li className="nav-list-item">
            <Link to="/listing">Add/Delete Listings</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
