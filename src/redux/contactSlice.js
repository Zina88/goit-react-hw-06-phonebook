import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persisteContactReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
