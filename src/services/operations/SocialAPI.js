import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { socialEndpoint } from "../apis";

const { ADD_SOCIAL_LINK, GET_SOCIAL_LINK, UPDATE_SOCIAL_LINK } = socialEndpoint;
export const addSocial = async (token, data) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", ADD_SOCIAL_LINK, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("SKILL API RESPONSE............", response)
        if (!response?.data?.success) {
            // toast.error(response.data.error)

            throw new Error(response.data.error)
        }
        toast.success("skill Details Added Successfully")

    } catch (error) {
        console.log("skill API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}


export const getAllSocial = async (token) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_SOCIAL_LINK, null, {
            Authorization: `Bearer ${token}`,
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Socials")
        }
        // console.log(response?.data?.data.social)

        result = response?.data?.data?.social

    } catch (error) {
        console.log("GET_ALL_Socials_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const updateSocial = async (token, data) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("PUT", UPDATE_SOCIAL_LINK, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("UPDATE_PROFILE_API API RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success("Profile Updated Successfully")
    } catch (error) {
        console.log("UPDATE_PROFILE_API API ERROR............", error)
        toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
}
