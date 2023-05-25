import { createSelector } from 'reselect';

export const selectContacts = state => state.contactsData.contacts.items;
export const selectIsLoading = state => state.contactsData.contacts.isLoading;
export const selectError = state => state.contactsData.contacts.error;

export const selectFilter = state => state.contactsData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
