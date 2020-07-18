import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { startUpdateContact } from "../../actions/contacts";
import { findContact } from "../../Selectors/FindContact";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contact ? props.contact.name : "",
      email: props.contact ? props.contact.email : "",
      mobile: props.contact ? props.contact.mobile : "",
      company: props.contact ? props.contact.company : "",
      address: props.contact ? props.contact.address : "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      company: this.state.company,
      address: this.state.address,
    };

    const id = this.props.match.params.id;
    const redirect = () => this.props.history.push("/contacts");
    this.props.dispatch(startUpdateContact(formData, id, redirect));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              value={this.state.company}
              onChange={this.handleChange}
              name="company"
              id="company"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
              id="address"
              className="form-control"
            />
          </div>
          <button class="btn aqua-gradient">Submit</button>
          <Link to="/contacts">
            <button class="btn blue-gradient">Back</button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    contact: findContact(state.contacts, id),
  };
};
export default withRouter(connect(mapStateToProps)(EditContact));
