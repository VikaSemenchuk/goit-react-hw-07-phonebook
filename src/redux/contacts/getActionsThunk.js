import { isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const thunks = [addContact, deleteContact, fetchContacts];
export const getActions = type => isAnyOf(...thunks.map(thunk => thunk[type]));
