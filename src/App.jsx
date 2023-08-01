import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Tempfirst from './Pages/Tempone/Tempfirst'
import Homepage from './Pages/Probuilder/Homepage'


const App = () => {
    
    return (
        <div className='flex min-h-screen w-screen flex-col bg-bground'>
            <>
                <Homepage/>
            </>

            <Routes>
                <Route path="/web/:userid" element={<Tempfirst />} />
            </Routes>

        </div>
    )
}

export default App