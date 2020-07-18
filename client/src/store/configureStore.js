import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import contactsReducer from "../reducers/contacts";
import formErrorsReducer from "../reducers/formErrors";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      contacts: contactsReducer,
      formErrors: formErrorsReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
