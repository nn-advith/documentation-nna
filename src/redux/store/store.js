import { configureStore } from '@reduxjs/toolkit';
import darkReducer from '../slice/darkSlice'
import scrollReducer from '../slice/scrollSlice'

export const store = configureStore({
  reducer: {
      dark: darkReducer,
      scroll: scrollReducer
  },
})