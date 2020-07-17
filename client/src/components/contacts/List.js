import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ContactForm from './Form'
 

function ContactList(props) {
    return (
      <div className="row">
        <div className="col-md-8">
          {/* <MDBCol md="3">
            <div className="active-pink-3 active-pink-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </MDBCol> */}
          <MDBContainer>
            <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
              <MDBListGroupItem color="dark">Name & company</MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
          {/* <h2>Listing Contacts - {props.contacts.length}</h2> */}
          <ul>
            {props.contacts.map((contact) => {
              return (
                <li key={contact._id}>
                  <MDBContainer>
                    <MDBListGroup
                      className="my-4 mx-4"
                      style={{ width: "22rem" }}
                    >
                      <div class="custom-control custom-checkbox">
                        <MDBListGroupItem color="info">
                          <Link to={`/contacts/${contact._id}`}>
                            {contact.name}
                            {contact.company}
                          </Link>
                        </MDBListGroupItem>
                      </div>
                    </MDBListGroup>
                  </MDBContainer>
                </li>
                //   <li key={contact._id}>
                //   {/* <Link to={`/contacts/${contact._id}`}>{contact.name}</Link> */}
                // </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <ContactForm />
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)

// //  <div class="custom-control custom-checkbox">
// //         <input type="checkbox" class="custom-control-input" id="defaultUncheckedDisabled2" disabled>
// //         <label class="custom-control-label" for="defaultUncheckedDisabled2">Default unchecked disabled</label>
// //       </div>
// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// import ContactForm from './Form'

// function ContactList(props){ 
//     return (
//         <div className="row">
//             <div className="col-md-8">
//                 <h2>Listing Contacts - {props.contacts.length}</h2>
//                 <ul>
//                     {props.contacts.map(contact => {
//                         return <li key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>
//                     })}
//                 </ul>
//             </div>
//             <div className="col-md-4">
//                 <ContactForm />
//             </div>
//         </div>
       
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         contacts: state.contacts
//     }
// }

// export default connect(mapStateToProps)(ContactList)
