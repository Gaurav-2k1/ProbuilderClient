import React from 'react'
import { useDispatch, useSelector } from "react-redux"
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { BsImageFill } from 'react-icons/bs'
// import UploadButton from '../formcompo/UploadButton'
// import axios from "axios"
import { addResumeLink } from '../../../services/operations/profileAPI';
import { useForm } from 'react-hook-form';
const UploadResume = () => {
    // const fileInputRef = useRef(null)
    // const [selectedFile, setSelectedFile] = useState(null);
    const { token } = useSelector((state) => state.auth)
    // const { user } = useSelector((state) => state.profile)
    // const handleClick = () => {
    //     fileInputRef.current.click()
    // }
    // const [resume, setResume] = useState(user?.profile.resume)
    // console.log(user?.profile.resume)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0]
    //     // console.log(file.name)
    //     if (file) {
    //         setSelectedFile(file)
    //     }
    // }
    // const handleFileUpload = async () => {
    //     try {
    //         // convertImageToPdf()
    //         const formData = new FormData();
    //         formData.append('file', selectedFile);
    //         dispatch(updateResumePic(token, formData)).then((data) => {
    //             setResume(data.data.resume)
    //         })


    //         console.log('File uploaded successfully!');
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     }
    // };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const submitProfileForm = async (data) => {

        console.log("Form Data - ", data)
        try {
            dispatch(addResumeLink(token, data))
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }
    return (
        <div className='flex flex-col w-full h-full '>

            {/* 
            
                resume && <img
                    src={resume}
                    alt={`profile`}
                    className="aspect-auto m-4 p-2 w-min h-min object-contain border border-bground border-solid"
                />
            
            <div className="flex flex-row gap-1 w-full items-center 
                    h-full py-2">

                <span className='relative w-max h-full 
                        flex items-center pl-10 text-xs
                        font-DMSans text-placeholder bg-primary border border-bground border-solid
                 rounded-md p-1'>
                    <BsImageFill className='absolute left-2 text-2xl
                             text-icob' />
                    Upload Resume here
                </span>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
                <UploadButton
                    onclick={handleClick}
                    disabled={loading}
                />
            </div>
            <button className='rounded-md flex flex-row w-full
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer my-3
                hover:brightness-75' onClick={handleFileUpload}>
                <p className='text-lg font-MuseoModerno'>Save</p>

            </button> */}
            <form onSubmit={handleSubmit(submitProfileForm)}>
                <div>
                    <input
                        rows={7}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Please enter your resume link here"
                        className="inpform placeholder:text-sm"
                        {...register("title", { required: true })}
                    />
                    {errors.title && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Enter your resume link here
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
        </div>
    )
}

export default UploadResume