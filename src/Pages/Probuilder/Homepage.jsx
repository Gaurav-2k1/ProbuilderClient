import React, { useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import OpenRoute from '../../components/core/Auth/OpenRoute'
import Login from '../Login'
import ForgotPassword from '../ForgotPassword'
import UpdatePassword from '../UpdatePassword'
import Signup from '../Signup'
import VerifyEmail from '../VerifyEmail'
import PrivateRoute from '../../components/core/Auth/PrivateRoute'
import Dashboard from '../../components/dashboard/Dashboard'
import Tempfirst from '../Tempone/Tempfirst'
import { useDispatch } from 'react-redux'
import { addSocket, getUserDetails } from '../../services/operations/profileAPI'
import Home from './home/Home'
import About from './about/About'
import Contact from '../Contact'
import TempSecond from '../Temptwo/TempSecond'
import Tempthree from '../Tempthree/Tempthree'
import Template from './template/Template'
import Footer from '../../components/common/Footer'
import { socket } from '../../components/common/Socket'
import TempFour from '../Tempfour/TempFour'

const Homepage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        if (localStorage.getItem("token")) {
            const token = JSON.parse(localStorage.getItem("token"))
            dispatch(getUserDetails(token, navigate))
            socket.on("connect", () => {
                let data = {
                    socketid: socket.id
                }
                try {
                    dispatch(addSocket(token, data))
                } catch (err) {
                    console.log(err)
                }

            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/template' element={<Template />} />

                <Route
                    path="login"
                    element={
                        <OpenRoute>
                            <Login />
                        </OpenRoute>
                    }
                />
                <Route
                    path="forgot-password"
                    element={
                        <OpenRoute>
                            <ForgotPassword />
                        </OpenRoute>
                    }
                />
                <Route
                    path="update-password/:id"
                    element={
                        <OpenRoute>
                            <UpdatePassword />
                        </OpenRoute>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <OpenRoute>
                            <Signup />
                        </OpenRoute>
                    }
                />
                <Route
                    path="verify-email"
                    element={
                        <OpenRoute>
                            <VerifyEmail />
                        </OpenRoute>
                    }
                />
                <Route
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                >
                    <Route path="dashboard/builder" element={<Dashboard />} />

                </Route>
                <Route path='/template/tempone/' element={<Tempfirst />} />
                <Route path='/template/temptwo/' element={<TempSecond />} />
                <Route path='/template/tempthree/' element={<Tempthree />} />
                <Route path='/template/tempfour/' element={<TempFour />} />
            </Routes>
            <Footer />

        </div>
    )
}

export default Homepage