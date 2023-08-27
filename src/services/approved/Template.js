import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { template } from "../apis"

const {
    TEMPLATE_API,
    GET_TEMP_API
} = template

export const getTemplate = async () => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
        const response = await apiConnector("GET", TEMPLATE_API)
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

export const addTempuser = async (token, data) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", GET_TEMP_API, data, {
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
