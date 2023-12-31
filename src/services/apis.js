const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  ADD_SOCKET_DETAILS_API: BASE_URL + "/profile/addsocket",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
  UPLOAD_RESUME_API: BASE_URL + "/profile/uploadresume",
  ADD_RESUME_API: BASE_URL + "/profile/addresume",
}

// Experience endpoint
export const ExperienceEndpoint = {
  CREATE_EXPERIENCE_API: BASE_URL + "/profile/addExperience",
  DELETE_EXPERIENCE_API: BASE_URL + "/profile/deleteExperience",
  GET_EXPERIENCE_API: BASE_URL + "/profile/getExperiences"
}
export const EducationEndpoint = {
  CREATE_EDUCATION_API: BASE_URL + "/profile/addEducation",
  DELETE_EDUCATION_API: BASE_URL + "/profile/deleteEducation",
  GET_EDUCATION_API: BASE_URL + "/profile/getEducation"
}
export const AchievementEndPoint = {
  CREATE_ACHIEVEMENT_API: BASE_URL + "/profile/addAchievement",
  GET_ACHIEVEMENT_API: BASE_URL + "/profile/getAllAchievement",
  DELETE_ACHIEVEMENT_API: BASE_URL + "/profile/deleteAchievement"
}
export const SkillEndPoint = {
  CREATE_SKILL_API: BASE_URL + "/profile/addSkill",
  GET_SKILL_API: BASE_URL + "/profile/getSkill",
  DELETE_SKILL_API: BASE_URL + "/profile/deleteSkill"
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// COURSE ENDPOINTS
// export const courseEndpoints = {
//   GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
//   COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
//   EDIT_COURSE_API: BASE_URL + "/course/editCourse",
//   COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
//   CREATE_COURSE_API: BASE_URL + "/course/createCourse",
//   CREATE_SECTION_API: BASE_URL + "/course/addSection",
//   CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
//   UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
//   UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
//   GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
//   DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
//   DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
//   DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
//   GET_FULL_COURSE_DETAILS_AUTHENTICATED:
//     BASE_URL + "/course/getFullCourseDetails",
//   LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
//   CREATE_RATING_API: BASE_URL + "/course/createRating",
// }

export const projectEndpoint = {
  CREATE_PROJECT_API: BASE_URL + "/profile/addProject",
  GET_PROJECT_API: BASE_URL + "/profile/getprojects",
  DELETE_PROJECT_API: BASE_URL + "/profile/deleteproject"
}

// RATINGS AND REVIEWS
export const approved = {
  APPROVED_API: BASE_URL + "/profile/getUser",
  PUBLISHED_API: BASE_URL + "/profile/publishData",
  PUBLISHED_DATA_API: BASE_URL + "/profile/getpublishdata",
}
export const template = {
  TEMPLATE_API: BASE_URL + "/auth/getTemplate",
  GET_TEMP_API: BASE_URL + "/profile/publishUser",
  GET_TEMPLATE_API: BASE_URL + "/profile/getTemplateData",

}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  UPDATE_ABOUT_API: BASE_URL + "/profile/updateAbout",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}



export const homeEndpoints = {
  UPDATE_HOME_IMAGE: BASE_URL + "/profile/addHomeImage"
}

export const socialEndpoint = {
  ADD_SOCIAL_LINK: BASE_URL + "/profile/addsocial",
  GET_SOCIAL_LINK: BASE_URL + "/profile/getSocial",
  UPDATE_SOCIAL_LINK: BASE_URL + "/profile/updateSocial"
}
