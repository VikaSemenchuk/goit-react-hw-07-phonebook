function pendingHandler(state) {
  state.contacts.isLoading = true;
  state.contacts.error = null;
}
function fulfilledHandler(state) {
  state.contacts.isLoading = false;
}
function fulfilledHandlerGet(state, { payload }) {
  state.contacts.items = payload;
}
function fulfilledHandlerAdd(state, { payload }) {
  state.contacts.items.push(payload);
}
function fulfilledHandlerDelete(state, { payload }) {
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== payload.id
  );
}

function rejectHandler(state, { payload }) {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
}

export {
  pendingHandler,
  fulfilledHandler,
  fulfilledHandlerGet,
  fulfilledHandlerAdd,
  fulfilledHandlerDelete,
  rejectHandler,
};
