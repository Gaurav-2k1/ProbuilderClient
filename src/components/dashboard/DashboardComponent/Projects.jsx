import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import UploadButton from '../formcompo/UploadButton'
// import CustomButton from '../formcompo/CustomButton'
import { addProject, deleteProject, getAllProjects } from '../../../services/operations/projectDetailsApi'
import { MdDelete } from 'react-icons/md'
import { socket } from '../../common/Socket'
// const socket = io("/", {
//     reconnection: true
// })

const Projects = () => {
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
            getProj()

            reset({
                title: "",
                description: "",
                image: "",
                demolink: "",
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset, isSubmitSuccessful])
    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            dispatch(addProject(token, data))
            socket.emit("newProjAdded")


        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }

    const handleDelete = async (projectId) => {
        setLoading(true)
        await deleteProject({ projectId: projectId }, token)
        getProj()
        // if (result) {
        //     setCourses(result)
        // }
        // setConfirmationModal(null)
        setLoading(false)
    }

    const [project, setProject] = useState([])
    const getProj = async () => {
        try {
            setLoading(true)
            let re = await getAllProjects(token)
            console.log(re.projects)
            setProject(re.projects)
            setLoading(false)
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }

    }
    
    useEffect(() => {
        socket.on("error",(err)=>{
            console.log(err)
        })
        socket.on('Projectadded', (projects) => {
            setProject(projects)
            console.log("New project added")
        });
        console.log(socket)
        getProj()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {loading ? <div className='flex w-full h-full justify-center p-4'><div className="spinner"></div></div> : <div className='flex flex-col w-full h-full'>
                {
                    project.map((data, i) => {
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
                            placeholder="Project Title"
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
                        <textarea
                            rows={4}
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Description"
                            className="inpform"
                            {...register("description", { required: true })}
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
                            name="image"
                            id="image"
                            placeholder="Upload Image Here"
                            className="inpform"
                            {...register("image", { required: true })}
                        />
                        {errors.firstName && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your destination.
                            </span>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="demolink"
                            id="demolink"
                            placeholder="Enter Live Demo Link"
                            className="inpform"
                            {...register("demolink", { required: true })}
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

export default Projects