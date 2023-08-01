import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { AchievementEndPoint } from "../apis";

const { CREATE_ACHIEVEMENT_API ,GET_ACHIEVEMENT_API,DELETE_ACHIEVEMENT_API} = AchievementEndPoint;
export const addAchievement = async (token, data) => {
    let result = null
    console.log(data, token)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_ACHIEVEMENT_API, data, {
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

export const getAllAchievement = async (token) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_ACHIEVEMENT_API, null, {
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

export const deleteAchievement = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("DELETE", DELETE_ACHIEVEMENT_API, data, {
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