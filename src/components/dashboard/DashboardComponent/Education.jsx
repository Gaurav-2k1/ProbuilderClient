import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addEducation, deleteEducation, getAllEducation } from '../../../services/operations/EducationAPI'
import { socket } from '../../common/Socket'
import { MdDelete } from 'react-icons/md'

const Education = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                title: "",
                schoolname: "",
                startDate: "",
                endDate: "",
                description: "",
                location: ""
            })
        }
    }, [reset, isSubmitSuccessful])
    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            dispatch(addEducation(token, data))

        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    const [ loading,setLoading] = useState(false)
    const [education, setEducation] = useState([])
    const getExp = async () => {
        try {
            setLoading(true)
            let re = await getAllEducation(token)
            console.log(re.education)
            setEducation(re.education)
            setLoading(false)
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }

    }
    const handleDelete = async (educationId) => {
        setLoading(true)
        await deleteEducation({ educationId: educationId }, token)
        getExp()
        // if (result) {
        //     setCourses(result)
        // }
        // setConfirmationModal(null)
        setLoading(false)
    }
    useEffect(() => {
        socket.on('educationAdded', (education) => {
            setEducation(education)
        });
        getExp()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {loading ? <div className='flex w-full h-full justify-center p-4'><div className="spinner"></div></div> : <div className='flex flex-col w-full h-full'>
                {
                    education.map((data, i) => {
                        return (
                            <div key={i} className='w-full h-10 bg-bground my-2
                    items-center justify-between flex flex-row rounded-lg px-4'>
                                <span>{data.title}</span>
                                <MdDelete className='text-lg text-red-400 cursor-pointer' onClick={() => {
                                    handleDelete(data._id)
                                }} />
                            </div>
                        )
                    })
                }
        <form onSubmit={handleSubmit(submitProfileForm)}>
            <div>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="inpform"
                    {...register("title", { required: true })}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your first name.
                    </span>
                )}
            </div>
            <div>
                <input
                    type="text"
                    name="schoolname"
                    id="schoolname"
                    placeholder="schoolname"
                    className="inpform"
                    {...register("schoolname", { required: true })}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your first name.
                    </span>
                )}
            </div>
            <div>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    placeholder="Upload Image Here"
                    className="inpform"
                    {...register("startDate", { required: true })}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your destination.
                    </span>
                )}
            </div>
            <div>
                <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    placeholder="Enter Live Demo Link"
                    className="inpform"
                    {...register("endDate")}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your description.
                    </span>
                )}
            </div>
           
            <div>
                <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter Live Demo Link"
                    className="inpform"
                    {...register("location", { required: true })}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your description.
                    </span>
                )}
            </div>

            <button className='rounded-md flex flex-row w-full
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer my-3
                hover:brightness-75' type='submit'>
                {/* <PiCloudArrowUpThin size={20} className='text-white ' /> */}
                <p className='text-lg font-MuseoModerno'>Save</p>

            </button>

        </form>
        </div>}
        </>
    )
}

export default Education