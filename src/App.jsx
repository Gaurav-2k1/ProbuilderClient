import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './Pages/Probuilder/Homepage'
import PublishedPage from './Pages/Approved/PublishedPage'


const App = () => {

    return (
        <div className='flex min-h-screen w-screen flex-col bg-bground'>
            <>
                <Homepage />
            </>

            <Routes>
                <Route path="/web/:userid" element={<PublishedPage />} />
            </Routes>

        </div>
    )
}

export default App