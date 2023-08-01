import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { UpdateHomeImage, updateAbout } from '../../../services/operations/SettingsAPI'
import { BsImageFill } from 'react-icons/bs'
import UploadButton from '../formcompo/UploadButton'

const About = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { user } = useSelector((state) => state.profile)
    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            handleFileUpload()

            dispatch(updateAbout(token, data))
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    // const submitProfileForm = async (data) => {

    //     console.log("Form Data - ", data)
    //     try {
    //         handleFileUpload()
    //         dispatch(updateProfile(token, data))

    //     } catch (error) {
    //         console.log("ERROR MESSAGE - ", error.message)
    //     }
    // }
    const [previewSource, setPreviewSource] = useState(null)
    const [ImageName, setImageName] = useState("Upload Image Here")
    const fileInputRef = useRef(null)

    const handleClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file.name)
        if (file) {
            setImageFile(file)
            previewFile(file)
            setImageName(file.name)

        }
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleFileUpload = () => {
        try {
            console.log("uploading...")
            setLoading(true)
            const formData = new FormData()
            formData.append("image", imageFile)
            // console.log("formdata", formData)
            dispatch(UpdateHomeImage(token, formData)).then(() => {
                setLoading(false)
            })
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }

    useEffect(() => {
        if (imageFile) {
            previewFile(imageFile)
        }
    }, [imageFile])
    return (
        <form onSubmit={handleSubmit(submitProfileForm)}>
            <div>
                <textarea
                    rows={7}
                    type="text"
                    name="about"
                    id="about"
                    placeholder="Write about you in detail here"
                    className="inpform"
                    {...register("about", { required: true })}
                    defaultValue={user?.profile?.about}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please write about yourself in details
                    </span>
                )}
            </div>
            <div className="flex flex-col w-full h-full items-center">
                {
                    imageFile && <img
                        src={previewSource}
                        alt={`profile-${user?.firstName}`}
                        className="aspect-auto m-4 p-5 w-min h-min object-contain border border-bground border-solid"
                    />
                }


                {/* <p>Add Home Image</p> */}
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
                <div />
            </div>



            <button className='rounded-md flex flex-row w-full
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer my-3
                hover:brightness-75' type='submit'>
                {/* <PiCloudArrowUpThin size={20} className='text-white ' /> */}
                <p className='text-lg font-MuseoModerno'>Save</p>

            </button>

        </form>
    )
}

export default About