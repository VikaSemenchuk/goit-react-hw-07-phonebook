import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/state';

import { addContact, deleteContact, fetchContacts } from './operations';
import {
  fulfilledHandler,
  fulfilledHandlerAdd,
  fulfilledHandlerDelete,
  fulfilledHandlerGet,
  pendingHandler,
  rejectHandler,
} from './handlerFunctions';

import { STATUS } from './status';
import { getActions } from './getActionsThunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, fulfilledHandlerGet)
      .addCase(addContact.fulfilled, fulfilledHandlerAdd)
      .addCase(deleteContact.fulfilled, fulfilledHandlerDelete)
      .addMatcher(getActions(PENDING), pendingHandler)
      .addMatcher(getActions(FULFILLED), fulfilledHandler)
      .addMatcher(getActions(REJECTED), rejectHandler);
  },
});

export const { changeFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
