import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { SkillEndPoint } from "../apis";

const { CREATE_SKILL_API, GET_SKILL_API, DELETE_SKILL_API } = SkillEndPoint;
export const addSkill = async (token, data) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_SKILL_API, data, {
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

export const getAllSkills = async (token) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_SKILL_API, null, {
            Authorization: `Bearer ${token}`,
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Projects Categories")
        }
        result = response?.data?.data?.skills
        // console.log(result)

    } catch (error) {
        console.log("GET_ALL_Projects_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const deleteSkill = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("DELETE", DELETE_SKILL_API, data, {
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