import React, { useEffect, useState } from 'react'
import { getPublished } from '../../services/approved/ApprovedUser'
import { useLocation } from 'react-router-dom'
import { templateData } from '../../data/TemplateData'

const PublishedPage = () => {
    const location = useLocation()
    const [comp, setcompo] = useState(<></>)

    const getData = async () => {

        try {
            let id = location.pathname.split("/").at(-1)
            // const fid = { id }
            // let id = "gauravbhukte1507@gmail.com"
            let data = await getPublished(id)
            const t = templateData.find((item) => item.title === data.data.template)
            console.log(t)
            setcompo(t.component)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {comp}
        </>
    )
}

export default PublishedPage