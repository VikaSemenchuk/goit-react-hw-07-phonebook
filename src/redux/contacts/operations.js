import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  deleteContactById,
  getContacts,
  postContact,
} from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContacts();
    } catch (error) {
      toast.error(`Something wrong. Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      return await postContact(newContact);
    } catch (error) {
      toast.error(`Something wrong. Error: ${error.message}`);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactById(id);
    } catch (error) {
      toast.error(`Something wrong. Error: ${error.message}`);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
