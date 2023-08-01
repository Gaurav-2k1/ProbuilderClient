import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { approved } from "../apis"

const {
  APPROVED_API
} = approved

export const getUser = async (id) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", APPROVED_API, {
      id,
    })
    console.log(" USER DETAIL API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("USER DETAIL _API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}
// export function getUser(id) {
//     return async (dispatch) => {
//         const toastId = toast.loading("Loading...")
//         dispatch(setLoading(true))
//         try {
//             const response = await apiConnector("GET", APPROVED_API, {
//                 id,
//             })
//             console.log("GET_USER_DETAILS API RESPONSE............", response)

//             if (!response.data.success) {
//                 throw new Error(response.data.message)
//             }
//             console.log(response.data.data)

//             // const userImage = response.data.data.image
//             //     ? response.data.data.image
//             //     : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
//             // dispatch(setUser({ ...response.data.data, image: userImage }))
//         } catch (error) {
//             console.log("GET_USER_DETAILS API ERROR............", error)
//             toast.error("Could Not Get User Details")
//         }
//         toast.dismiss(toastId)
//         dispatch(setLoading(false))
//     }
// }