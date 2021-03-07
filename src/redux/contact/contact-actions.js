import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/aremoverror");

const fetchContactsRequest = createAction("contactfetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const changeFilter = createAction("contact/changeFilter");

export default {
  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  addContactError,
  addContactSuccess,
  addContactRequest,

  changeFilter,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
