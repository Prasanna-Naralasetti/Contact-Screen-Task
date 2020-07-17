import React,{Fragment} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";



function ContactShow(props) {
    const{_id,name,email,mobile,company,address}=props.contact || {}
    return (
      <div>
        <MDBCol md="3">
          <div className="active-pink-3 active-pink-4 mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </MDBCol>
        <MDBCol style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>
                <h1>{name}</h1>
                <br />
                <br />
              </MDBCardTitle>
              <MDBCardText>
                {props.contact ? (
                  <div>
                    Name:{name}
                    <br />
                    <br />
                    Email:{email}
                    <br />
                    <br />
                    Contact No:{mobile}
                    <br />
                    <br />
                    Company:{company}
                    <br />
                    <br />
                    Address:{address}
                    <br />
                    <br />
                  </div>
                ) : (
                  <div>loading...</div>
                )}

                <Link to={`/contact/edit/${_id}`}>
                  <input class="btn btn-primary" type="submit" value="Edit" />
                </Link>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* {props.contact ? (
          <div>
            <h1>
              {props.contact.name}
              <br />
              {props.contact.email}
              <br />
              {props.contact.mobile}
            </h1>
          </div>
        ) : (
          <div>loading...</div>
        )} */}
      </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)