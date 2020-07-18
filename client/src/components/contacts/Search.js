import React from "react";
import { connect } from "react-redux";
import { MDBCol, MDBIcon } from "mdbreact";
import ContactList from './List'

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filterContact = this.props.contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    // <li key={contact._id}>{contact.name}</li>;
    return (
      <div>
        <ul>
          {filterContact.map((contact) => {
            return <ContactList key={contact._id} contact={contact.name}/>
          })}
        </ul>
        <MDBCol md="6">
          <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
            <label htmlFor="search"></label>
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
              name="search"
              id="search"
              className="form-control"
            />
          </form>
        </MDBCol>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(SearchBox);
