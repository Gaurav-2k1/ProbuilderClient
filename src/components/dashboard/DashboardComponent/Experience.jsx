import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { addExperience, deleteExperience, getAllExperience } from '../../../services/operations/ExperienceAPI'
import { socket } from '../../common/Socket'
import { MdDelete } from 'react-icons/md'

const Experience = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [active, setActive] = useState(false);

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
                employer: "",
                startDate: "",
                endDate: "",
                description: "",
                location: ""
            })
        }
    }, [reset, isSubmitSuccessful])
    const [loading, setLoading] = useState(false)

    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            dispatch(addExperience(token, data))
            socket.emit("newexp")

        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    const [experience, setExperience] = useState([])
    const getExp = async () => {
        try {
            setLoading(true)
            let re = await getAllExperience(token)
            console.log(re.experience)
            setExperience(re.experience)
            setLoading(false)
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }

    }
    const handleDelete = async (experienceId) => {
        setLoading(true)
        await deleteExperience({ experienceId: experienceId }, token)
        getExp()
        // if (result) {
        //     setCourses(result)
        // }
        // setConfirmationModal(null)
        setLoading(false)
    }
    const em = () => {
        socket.emit("newexp")
    }
    useEffect(() => {
        socket.on('experienceAdded', (experience) => {
            setExperience(experience)
        });
        getExp()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {loading ? <div className='flex w-full h-full justify-center p-4'><div className="spinner"></div></div> : <div className='flex flex-col w-full h-full'>
                <>
                    {
                        experience.map((data, i) => {
                            return (
                                <div key={i} className='w-full h-10 bg-bground my-2
                    items-center justify-between  flex font-DMSans flex-row rounded-lg px-4'>
                                    <span>{data.title}</span>
                                    <MdDelete className='text-lg text-red-400 cursor-pointer' onClick={() => {
                                        handleDelete(data._id)
                                    }} />
                                </div>
                            )
                        })
                    }
                    <div className='flex flex-row justify-between py-3 items-center' >
                        <p className='text-red-500 font-DMSans text-sm cursor-pointer  ' onClick={() => setActive(true)}>
                            + Add one more

                        </p>
                        {
                            active && <p className='text-white bg-icob rounded-md font-DMSans text-sm cursor-pointer py-1 px-2 ' onClick={() => setActive(false)}>
                                Cancel
                            </p>
                        }

                    </div>
                </>
                {
                    active && <form onSubmit={handleSubmit(submitProfileForm)}>
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
                                name="employer"
                                id="employer"
                                placeholder="Description"
                                className="inpform"
                                {...register("employer", { required: true })}
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
                                name="description"
                                id="description"
                                placeholder="Enter Live Demo Link"
                                className="inpform"
                                {...register("description", { required: true })}
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
                hover:brightness-75' onClick={em}>
                            {/* <PiCloudArrowUpThin size={20} className='text-white ' /> */}
                            <p className='text-lg font-MuseoModerno'>Save</p>

                        </button>

                    </form>
                }

            </div>}
        </>
    )
}

export default Experience