import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "templateone",
    template: "/template/tempone",
}

const templateSlice = createSlice({
    name: "template",
    initialState: initialState,
    reducers: {
        setTemplate(state, value) {
            state.template = value.payload
        },
        setTemplatetitle(state, value) {
            state.title = value.payload
        }

    },
})

export const { setTemplate ,setTemplatetitle} = templateSlice.actions

export default templateSlice.reducer
