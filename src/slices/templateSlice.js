import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    template: "/template/tempone",
}

const templateSlice = createSlice({
    name: "template",
    initialState: initialState,
    reducers: {
        setTemplate(state, value) {
            state.template = value.payload
        },

    },
})

export const { setTemplate } = templateSlice.actions

export default templateSlice.reducer
