import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermine Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  isloading: false,
  error: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      prepare: newContact => {
        return { ...newContact, id: nanoid() };
      },
      reducer: (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    toggleLoading(state, action) {
      state.isloading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Генератори екшенів
export const {
  addContact,
  deleteContact,
  changeFilter,
  toggleLoading,
  setError,
} = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
