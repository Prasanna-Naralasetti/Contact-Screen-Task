export const findContact = (contacts, id) => {
  return contacts.find((contact) => contact._id == id);
};
