// import React from "react";
// import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// //import { setContacts } from "../../actions/contacts";
// import { startRemoveContact } from "../../actions/contacts";
// import SearchBox from "./Search";

// function ContactList(props) {
//   // if (props.contacts.length == 0) {
//   //   props.dispatch(setContacts())
//   // }
//   const handleRemove = (id) => {
//     const confirmRemove = window.confirm("Are you sure?");
//     if (confirmRemove) {
//       props.dispatch(startRemoveContact(id));
//     }
//   };
//   return (
//     <div className="row">
//       <div className="col-md-8">
//         <SearchBox />

//         <MDBContainer>
//           <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
//             <MDBListGroupItem color="dark">Name || Company</MDBListGroupItem>
//           </MDBListGroup>
//         </MDBContainer>
//         {/* <h2>Listing Contacts - {props.contacts.length}</h2> */}
//         <ul>
//           {props.contacts.map((contact) => {
//             return (
//               <li key={contact._id}>
//                 <MDBContainer>
//                   <MDBListGroup
//                     className="my-4 mx-4"
//                     style={{ width: "22rem" }}
//                   >
//                     <div class="custom-control custom-checkbox">
//                       <MDBListGroupItem color="info">
//                         <Link to={`/contacts/${contact._id}`}>
//                           {contact.name} ||
//                           {contact.company}
//                         </Link>
//                       </MDBListGroupItem>
//                     </div>
//                   </MDBListGroup>
//                 </MDBContainer>
//                 <div className="col-md-4 ">
//                   <button
//                     class="btn peach-gradient"
//                     onClick={() => {
//                       handleRemove(contact._id);
//                     }}
//                   >
//                     {" "}
//                     Remove{" "}
//                   </button>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <Link to="/contacts/newcontact">
//         <button class="btn purple-gradient">Add Contact</button>
//       </Link>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//   };
// };

// export default connect(mapStateToProps)(ContactList);





import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { setContacts } from "../../actions/contacts";
import { startRemoveContact } from "../../actions/contacts";
import SearchBox from "./Search";

function ContactList(props) {
 //  if (props.contacts.length == 0) {
  //   props.dispatch(setContacts())
  // }
  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      props.dispatch(startRemoveContact(id));
    }
  };
  return (
    <div className="row">
      <div className="col-md-8">
        <SearchBox />
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
                          {contact.name} || 
                          {contact.company}
                        </Link>
                      </MDBListGroupItem>
                    </div>
                  </MDBListGroup>
                </MDBContainer>
                <div className="col-md-4 ">
                 <button
                   class="btn peach-gradient"
                   onClick={() => {
                    handleRemove(contact._id);
                  }}
                  >
                    {" "}
                    Remove{" "}
                  </button></div>
              </li>
            );
          })}
        </ul>
      </div>
      <Link to="/contacts/newcontact">
       <button class="btn purple-gradient">Add Contact</button>
     </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(ContactList)