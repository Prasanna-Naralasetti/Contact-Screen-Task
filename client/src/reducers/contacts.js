const contactsIntitalState = []
const contactsReducer = (state = contactsIntitalState, action) => {
    switch (action.type) {
      case "SET_CONTACTS": {
        return [...state] ;
      }
      case "ADD_CONTACT": {
        return [...state, action.payload];
      }
      case "UPDATE_CONTACT": {
        return state.map((contact) => {
          if (contact._id === action.payload._id) {
            return { ...contact, ...action.payload }
          } else {
            return { ...contact }
          }
        });
      }
    case 'REMOVE_CONTACT' : {
            return state.filter(contact => contact._id !== action.payload)
        }
      default: {
        return [...state];
      }
    }
}

export default contactsReducer