import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BsImageFill } from 'react-icons/bs'
import UploadButton from '../formcompo/UploadButton'
import axios from "axios"
import { updateResumePic } from '../../../services/operations/profileAPI';
const UploadResume = () => {
    const fileInputRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const handleClick = () => {
        fileInputRef.current.click()
    }
    const [resume, setResume] = useState(user?.profile.resume)
    console.log(user?.profile.resume)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        // console.log(file.name)
        if (file) {
            setSelectedFile(file)
        }
    }
    const handleFileUpload = async () => {
        try {
            // convertImageToPdf()
            const formData = new FormData();
            formData.append('file', selectedFile);
            dispatch(updateResumePic(token, formData)).then((data) => {
                setResume(data.data.resume)
            })


            console.log('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    return (
        <div className='flex flex-col w-full h-full items-center'>


            {
                resume && <img
                    src={resume}
                    alt={`profile`}
                    className="aspect-auto m-4 p-2 w-min h-min object-contain border border-bground border-solid"
                />
            }
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
                {/* <PiCloudArrowUpThin size={20} className='text-white ' /> */}
                <p className='text-lg font-MuseoModerno'>Save</p>

            </button>
        </div>
    )
}

export default UploadResume