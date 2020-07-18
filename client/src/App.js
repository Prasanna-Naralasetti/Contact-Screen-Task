import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import Home from "./components/Home";

import ContactsList from "./components/contacts/List";
import ContactShow from "./components/contacts/Show";
import EditContact from "./components/contacts/Edit";
import ContactForm from "./components/contacts/Form";

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
        <Route path="/contact/edit/:id" component={EditContact} />
        <Route path="/contacts/newcontact" component={ContactForm} />
      </div>
    </BrowserRouter>
  );
}

export default connect()(App);
