import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contact/contact-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
