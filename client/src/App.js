import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { connect } from "react-redux";

import Home from "./components/Home";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import UserAccount from "./components/users/Account";
import ContactsList from "./components/contacts/List";
import ContactShow from "./components/contacts/Show";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact={true} />

        <Route path="/contacts" component={ContactsList} exact={true} />
        <Route path="/contacts/:id" component={ContactShow} />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(App);
