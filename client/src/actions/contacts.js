import axios from "../config/axios";
import { setErrors, clearErrors } from "./formErrors";
// sync

export const setContacts = (contacts) => {
  return {
    type: "SET_CONTACTS",
    payload: contacts,
  };
};

export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

// asyn
export const startAddContact = (formData, redirect) => {
  return (dispatch) => {
    axios.post("/contacts", formData).then((response) => {
      // const contact = response.data
      console.log(response.data);
      if (response.data.hasOwnProperty("errors")) {
        // alert(response.data.message)
        // console.log(response.data)
        dispatch(setErrors(response.data.errors));
      } else {
        const contact = response.data;
        dispatch(addContact(contact));
        redirect();
        dispatch(clearErrors());
      }
    });
  };
};

export const update = (contact) => {
  return {
    type: "UPDATE_CONTACT",
    payload: contact,
  };
};
//asyc
export const startUpdateContact = (formData, id, redirect) => {
  return (dispatch) => {
    axios.put(`/contacts/${id}`, formData).then((response) => {
      const contact = response.data;
      dispatch(update(contact));
      redirect();
    });
  };
};

export const removeCustomer = (id) => {
  return {
    type: "REMOVE_CONTACT",
    payload: id,
  };
};
export const startRemoveContact = (id) => {
  return (dispatch) => {
    axios.delete(`/contacts/${id}`).then((response) => {
      const contact = response.data;
      dispatch(removeCustomer(contact._id));
    });
  };
};
