import axios from 'axios';

axios.defaults.baseURL = 'https://646692002ea3cae8dc1a29d6.mockapi.io/api/v1';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
