import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  view: "w-screen",
}

const pageSlice = createSlice({
  name: "page",
  initialState: initialState,
  reducers: {
    setView(state, value) {
      state.view = value.payload
    },
    
  },
})

export const { setView } = pageSlice.actions

export default pageSlice.reducer
