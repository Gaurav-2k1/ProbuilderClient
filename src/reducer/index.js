import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import profileSlice from "../slices/profileSlice"
import pageSlice from "../slices/pageSlice"
import templateSlice from "../slices/templateSlice"
// import cartReducer from "../slices/cartSlice"
// import courseReducer from "../slices/courseSlice"
// import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileSlice,
  page: pageSlice,
  template: templateSlice
  // course: courseReducer,
  // cart: cartReducer,
  // viewCourse: viewCourseReducer,
})

export default rootReducer
