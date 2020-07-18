import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

function ContactShow(props) {
  const { _id, name, email, mobile, company, address } = props.contact || {};
  return (
    <div>
      <MDBContainer>
        <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
          <MDBListGroupItem color="secondary">
            {" "}
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>
                    <h1>{name}</h1>
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
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBContainer>

      <Link to={`/contact/edit/${_id}`}>
        <button class="btn aqua-gradient">Edit</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    contact: state.contacts.find(
      (contact) => contact._id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(ContactShow);
