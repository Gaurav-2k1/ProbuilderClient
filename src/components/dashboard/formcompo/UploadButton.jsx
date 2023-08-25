import React from 'react'
import { CgAttachment } from 'react-icons/cg'

const UploadButton = (
    {
        onclick,
        children,
        disabled,
        outline = false,
        customClasses,
        type, }
) => {
    return (
        <button
            disabled={disabled}
            onClick={onclick}
            className=' bg-primary border border-bground border-solid
                 rounded-md p-3 ml-2' >
            <CgAttachment size={20}
                className='text-white  cursor-pointer rotate-45'
            />
        </button>)
}

export default UploadButton