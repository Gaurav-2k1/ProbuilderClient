import React, { useEffect, useState } from 'react'
import { getPublished } from '../../services/approved/ApprovedUser'
import { useLocation } from 'react-router-dom'
import { templateData } from '../../data/TemplateData'

const PublishedPage = () => {
    const location = useLocation()
    const [comp, setcompo] = useState(<></>)

    const getData = async () => {

        try {
            let fid = location.pathname.split("/").at(-1)
            const id = { id: fid }
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