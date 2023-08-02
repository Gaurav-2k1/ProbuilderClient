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
import { getUserDetails } from '../../services/operations/profileAPI'
import Home from './home/Home'

const Homepage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            const token = JSON.parse(localStorage.getItem("token"))
            dispatch(getUserDetails(token, navigate))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

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
                <Route path='/template/tempone' element={<Tempfirst />} />

            </Routes>
        </div>
    )
}

export default Homepage