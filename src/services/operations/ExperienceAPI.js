import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { ExperienceEndpoint } from "../apis";

const { CREATE_EXPERIENCE_API ,GET_EXPERIENCE_API,DELETE_EXPERIENCE_API} = ExperienceEndpoint;
export const addExperience = async (token, data) => {
    let result = null
    console.log(data, token)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_EXPERIENCE_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("Experince API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Add Course Details")
        }
        toast.success("Experince Details Added Successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("Experince API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getAllExperience = async (token) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_EXPERIENCE_API, null, {
            Authorization: `Bearer ${token}`,
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Experience Categories")
        }
        // console.log(response)
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_Experience_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const deleteExperience = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("DELETE", DELETE_EXPERIENCE_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("DELETE Experience API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Experience")
        }
        toast.success("Experience Deleted")
    } catch (error) {
        console.log("DELETE Experience API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}