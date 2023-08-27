import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

import { addAchievement, deleteAchievement, getAllAchievement } from '../../../services/operations/AchievementAPI'
import { MdDelete } from 'react-icons/md'
import { socket } from '../../common/Socket'

const Achievement = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                title: ""
            })
        }
    }, [reset, isSubmitSuccessful])
    const handleDelete = async (achId) => {
        setLoading(true)
        await deleteAchievement({ achId: achId }, token)
        getAchievement()
        // if (result) {
        //     setCourses(result)
        // }
        // setConfirmationModal(null)
        setLoading(false)
    }
    const [achievement, setAchievement] = useState([])
    const getAchievement = async () => {
        try {
            setLoading(true)
            let re = await getAllAchievement(token)
            console.log(re.achievements)
            setAchievement(re.achievements)
            setLoading(false)
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }

    }
    // const { user } = useSelector((state) => state.profile)
    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            dispatch(addAchievement(token, data))
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    useEffect(() => {
        socket.on("error", (err) => {
            console.log(err)
        })
        socket.on('achAdded', (achievement) => {
            setAchievement(achievement)
            console.log("New project added")
        });
        getAchievement()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {loading ? <div className='flex w-full h-full justify-center p-4'><div className="spinner"></div></div> : <div className='flex flex-col w-full h-full'>
                {
                    achievement.map((data, i) => {
                        return (
                            <div key={i} className='w-full min-h-10 h-full py-2 bg-bground my-2
                        items-center justify-between flex flex-row rounded-lg px-4 font-DMSans'>
                                <span className='w-4/5'>{data.title}</span>
                                <MdDelete className='text-2xl text-red-400 cursor-pointer'
                                    onClick={() => {
                                        handleDelete(data._id)
                                    }} />
                            </div>
                        )
                    })
                }
                <form onSubmit={handleSubmit(submitProfileForm)}>
                    <div>
                        <textarea
                            rows={7}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Write your Achievement here"
                            className="inpform"
                            {...register("title", { required: true })}
                        />
                        {errors.firstName && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please write about yourself in details
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

export default Achievement