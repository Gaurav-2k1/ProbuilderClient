import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { projectEndpoint } from "../apis";

const { CREATE_PROJECT_API, GET_PROJECT_API ,DELETE_PROJECT_API} = projectEndpoint;
export const addProject = async (token, data) => {
    let result = null
    console.log(data, token)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_PROJECT_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("CREATE Projects API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Add Projects Details")
        }
        toast.success("Projects Details Added Successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("CREATE Projects API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getAllProjects = async (token) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_PROJECT_API, null, {
            Authorization: `Bearer ${token}`,
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Projects Categories")
        }
        // console.log(response)
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_Projects_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const deleteProject = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("DELETE", DELETE_PROJECT_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("DELETE Projects API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Projects")
        }
        toast.success("Projects Deleted")
    } catch (error) {
        console.log("DELETE Projects API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}