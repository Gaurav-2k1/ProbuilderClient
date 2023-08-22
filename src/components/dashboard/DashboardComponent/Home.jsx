import React from 'react'
// import { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from '../../../services/operations/SettingsAPI'

const Home = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.profile)

    const { token } = useSelector((state) => state.auth)

    const {
        register,
        handleSubmit,

    } = useForm()


    // const [loading, setLoading] = useState(false)
    // const [imageFile, setImageFile] = useState(null)
    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            // handleFileUpload()
            dispatch(updateProfile(token, data))

        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    // let p = user?.profile?.image
    // const [previewSource, setPreviewSource] = useState(null)
    // const [ImageName, setImageName] = useState("Upload Image Here")
    // const fileInputRef = useRef(null)

    // const handleClick = () => {
    //     fileInputRef.current.click()
    // }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0]
    //     console.log(file.name)
    //     if (file) {
    //         setImageFile(file)
    //         previewFile(file)
    //         setImageName(file.name)

    //     }
    // }

    // const previewFile = (file) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onloadend = () => {
    //         setPreviewSource(reader.result)
    //     }
    // }

    // const handleFileUpload = () => {
    //     try {
    //         console.log("uploading...")
    //         setLoading(true)
    //         const formData = new FormData()
    //         formData.append("image", imageFile)
    //         // console.log("formdata", formData)
    //         dispatch(UpdateHomeImage(token, formData)).then(() => {
    //             setLoading(false)
    //         })
    //     } catch (error) {
    //         console.log("ERROR MESSAGE - ", error.message)
    //     }
    // }

    // useEffect(() => {
    //     !imageFile && setPreviewSource(p)
    //     if (imageFile) {
    //         previewFile(imageFile)
    //     }
    // }, [imageFile, p])
    return (
        <>
            <form onSubmit={
                handleSubmit(submitProfileForm)}>
                {/* <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12"> */}
                {/* <h2 className="text-lg font-semibold text-richblack-5">
                        Profile Information
                    </h2> */}
                {/* <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="firstName" className="lable-style">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Enter first name"
                                className="form-style"
                                {...register("firstName", { required: true })}
                                defaultValue={user?.firstName}
                            />
                            {errors.firstName && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    Please enter your first name.
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="lastName" className="lable-style">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter first name"
                                className="form-style"
                                {...register("lastName", { required: true })}
                                defaultValue={user?.lastName}
                            />
                            {errors.lastName && (
                                <span className="-mt-1 text-[12px] text-yellow-100">
                                    Please enter your last name.
                                </span>
                            )}
                        </div>
                    </div>
                </div> */}
                <div>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter first name"
                        className="inpform"
                        {...register("firstName", { required: true })}
                        defaultValue={user?.firstName}
                    />

                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        className="inpform"
                        {...register("lastName", { required: true })}
                        defaultValue={user?.lastName}
                    />

                </div>
                <div>
                    <input
                        type="text"
                        name="designation"
                        id="designation"
                        placeholder="designation"
                        className="inpform"
                        {...register("designation", { required: true })}
                        defaultValue={user?.profile?.designation}
                    />

                </div>
                <div>
                    <textarea
                        rows={4}
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Crisp Description"
                        className="inpform
                    "
                        {...register("description", { required: true })}
                        defaultValue={user?.profile.description}
                    />

                </div>

                {/* <div className="flex flex-col w-full h-full items-center">
                    {
                        previewSource && <img
                            src={previewSource}
                            alt={`profile-${user?.firstName}`}
                            className="aspect-auto m-4 p-5 w-min h-min object-contain border border-bground border-solid"
                        />
                    }


                    <div className="flex flex-row gap-3 w-full items-center 
                    h-full ">
                        <span className='relative w-full h-full 
                        items-center pl-12 text-sm 
                        font-DMSans text-placeholder bg-primary border border-bground border-solid
                 rounded-md p-3'>
                            <BsImageFill className='absolute left-2 text-2xl
                             text-icob' />
                            {ImageName}
                        </span>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/png, image/gif, image/jpeg"
                        />
                        <UploadButton
                            onclick={handleClick}
                            disabled={loading}
                        />

                    </div>

                </div> */}


                <button className='rounded-md flex flex-row w-full
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer my-3
                hover:brightness-75' type='submit'>
                    <p className='text-lg font-MuseoModerno'>Save</p>

                </button>
                {/* <IconBtn type="submit" text="Save" /> */}
                {/* </div> */}

            </form>
        </>

    )
}

export default Home