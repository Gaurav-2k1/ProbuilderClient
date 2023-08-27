import React, { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { GiConfirmed } from "react-icons/gi"
import { addSocial, getAllSocial, updateSocial } from '../../../services/operations/SocialAPI'
import { socket } from '../../common/Socket'
const SocialLink = () => {
    const { token } = useSelector((state) => state.auth)
    const [github, setgithub] = useState(null)
    const [facebook, setfacebook] = useState(null)
    const [linkedIn, setlinkedin] = useState(null)

    const [instagram, setInstagram] = useState(null)
    const [ttile, setttile] = useState(false)
    const [title, setTitle] = useState(null)

    const getSocialLink = async () => {
        try {
            let social = await getAllSocial(token)
            let f = social.filter((social) => social.title === "facebook")[0]
            console.log(f)
            setgithub(social.filter((social) => social.title === "github")[0])
            setfacebook(social.filter((social) => social.title === "facebook")[0])
            setlinkedin(social.filter((social) => social.title === "linkedIn")[0])
            setInstagram(social.filter((social) => social.title === "instagram")[0])

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        socket.on("SocialAdded", () => {
            getSocialLink()
        })
        getSocialLink()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-wrap w-full gap-2'>{
                !github && <SocialTile title="github" setTitle={setTitle} setttile={setttile} />}
                {
                    !facebook && <SocialTile title="facebook" setTitle={setTitle} setttile={setttile} />}
                {
                    !linkedIn && <SocialTile title="linkIn" setTitle={setTitle} setttile={setttile} />

                }
                {
                    !instagram && <SocialTile title="instagram" setTitle={setTitle} setttile={setttile} />

                }


            </div>
            {
                ttile ? <SocialLinkform title={title} setttile={setttile} /> :
                    <>

                        {
                            github && <SocialLinkcom icon={<AiFillGithub size={20} color='white' />} title="github" sociallinks={github} />
                        }
                        {
                            facebook && <SocialLinkcom icon={<FaFacebook size={20} color='white' />} title="facebook" sociallinks={facebook} />
                        }
                        {
                            linkedIn && <SocialLinkcom icon={<FaLinkedinIn size={20} color='white' />} title="linkedIn" sociallinks={linkedIn} />


                        }
                        {
                            instagram && <SocialLinkcom icon={<BsInstagram size={20} color='white' />} title="instagram" sociallinks={instagram} />


                        }
                    </>

            }



            {/* <button className='rounded-md flex flex-row w-full
                px-3 py-1 items-center bg-icob gap-2 cursor-pointer my-3
                hover:brightness-75' type='submit'>
                <p className='text-lg font-MuseoModerno'>Save</p>

            </button> */}
        </div>
    )
}

const SocialTile = ({ title, setTitle, setttile }) => {
    return (
        <div className='w-min px-2 py-1 rounded-2xl font-DMSans cursor-pointer hover:brightness-75 bg-icob text-white'
            onClick={() => {
                setTitle(title)
                setttile(true)
            }}>{title}</div>
    )
}

const SocialLinkform = ({ title, setttile }) => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [social, setSocial] = useState({
        title: title,
        link: '',
    })

    const addSociallink = () => {
        try {
            dispatch(addSocial(token, social))
            setttile(false)

            setSocial({
                title: title,
                link: ''
            })
        } catch (err) {
            console.log(err)

            setSocial({
                title: title,
                link: ''
            })
        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocial((prevObject) => ({ ...prevObject, [name]: value }));
    };
    return (
        <form className='flex flex-row gap-2 items-center w-full my-2'>
            <div className='border border-blue-600 border-solid p-3 rounded-md'>
                {title}
            </div>
            <div>
                <input name='link' placeholder='Add link here' type='url'
                    className='min-w-full py-[10px] rounded-md
                 bg-primary placeholder:text-[#ffffff2b]
                 border border-solid border-[#ffffff2b]
         placeholder:font-DMSans placeholder:text-sm pl-1
          text-base font-DMSans' value={social.link} onChange={handleInputChange}
                />
            </div>
            <div ><GiConfirmed className='text-lg text-icob cursor-pointer' onClick={addSociallink} /></div>
        </form>
    )
}

const SocialLinkcom = ({ icon, title, sociallinks }) => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [social, setSocial] = useState({
        title: title,
        link: sociallinks.link,
        id: sociallinks._id
    })

    const updateSocialLink = async () => {
        try {
            dispatch(updateSocial(token, social))
            setSocial({
                title: title,
                id: sociallinks._id

            })
        } catch (err) {
            console.log(err)

            setSocial({
                title: title,
                id: sociallinks._id

            })
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocial((prevObject) => ({ ...prevObject, [name]: value }));
    };
    return (
        <form className='flex flex-row gap-2 items-center w-full my-2'>
            <div className='border border-blue-600 border-solid p-3 rounded-md'>
                {icon}
            </div>
            <div>
                <input name='link' placeholder='Add link here' type='text'
                    className='min-w-full py-[10px] rounded-md
                 bg-primary placeholder:text-[#ffffff2b]
                 border border-solid border-[#ffffff2b]
         placeholder:font-DMSans placeholder:text-sm pl-1
          text-base font-DMSans' value={social.link} onChange={handleInputChange}

                />
            </div>
            <div ><GiConfirmed className='text-lg text-icob cursor-pointer' onClick={updateSocialLink} /></div>
        </form>
    )
}

export default SocialLink