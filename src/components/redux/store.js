import { configureStore } from '@reduxjs/toolkit';
import userDetails from './slice/userDetails';
import activeproject from './slice/project';
import Loader from './slice/loader';

export const store = configureStore({
  reducer: {
    userDetails,
    activeproject,
    Loader,
  },
})