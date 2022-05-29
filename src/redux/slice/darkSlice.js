import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dark: true,
}

export const darkSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
      switchDark: (state) => {
        state.dark = !state.dark
      },
    },
  })
  
  
  export const {switchDark } = darkSlice.actions
  
  export default darkSlice.reducer