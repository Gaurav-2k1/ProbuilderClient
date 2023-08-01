import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { EducationEndpoint} from "../apis";

const { CREATE_EDUCATION_API ,GET_EDUCATION_API,DELETE_EDUCATION_API} = EducationEndpoint;
export const addEducation = async (token, data) => {
    let result = null
    console.log(data, token)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_EDUCATION_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("Education API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Add Course Details")
        }
        toast.success("Education Details Added Successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("Education API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getAllEducation = async (token) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_EDUCATION_API, null, {
            Authorization: `Bearer ${token}`,
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Education Categories")
        }
        // console.log(response)
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_Education_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const deleteEducation = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("DELETE", DELETE_EDUCATION_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("DELETE Education API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Education")
        }
        toast.success("Education Deleted")
    } catch (error) {
        console.log("DELETE Education API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}