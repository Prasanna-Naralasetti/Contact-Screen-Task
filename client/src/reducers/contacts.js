const contactsIntitalState = []
const contactsReducer = (state = contactsIntitalState, action) => {
    switch (action.type) {
      case "SET_CONTACTS": {
        return [...action.payload ];
      }
      case "ADD_CONTACT": {
        return [...state, action.payload];
      }
    //   case "UPDATE_CONTACT": {
    //     return state.map((contact) => {
    //       if (contact._id == action.payload._id) {
    //         return [ ...contact, ...action.payload ]
    //       } else {
    //         return [ ...contact ]
    //       }
    //     });
    //   }
      default: {
        return [...state];
      }
    }
}

export default contactsReducer