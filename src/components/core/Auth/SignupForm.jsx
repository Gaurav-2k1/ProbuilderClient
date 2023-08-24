import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import CountryCode from "../../../data/countrycode.json"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
// import Tab from "../../Common/Tab"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // student or instructor

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
    }
    console.log(signupData)
    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: ""
    })
  }

  // data to pass to Tab component


  return (
    <div>
      {/* Tab */}
      {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-3 w-full">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] form-label">
              First Name <sup className="mandat">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full md:pr-14"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] form-label">
              Last Name <sup className="mandat">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full md:pr-10"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] form-label">
            Email Address <sup className="mandat">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full"
          />
        </label>
        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="form-label mb-1 text-[0.875rem] leading-[1.375rem]">
            Phone Number
            <sup className="mandat">*</sup>
          </label>

          <div className="flex gap-3">
            <div className="flex w-[80px] flex-col gap-1 ">
              <select
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone"
                className="rounded-[3px] border border-[#00000033] border-solid
                 bg-transparent 
                 text-black p-3 text-[16px] leading-[24px] 
                 shadow-[0_1px_0_0] shadow-white/50
                 placeholder:text-placeholder placeholder:font-DMSans focus:outline-none font-DMSans"
              >
                {CountryCode.map((ele, i) => {
                  return (
                    <option className="text-black" key={i} value={ele.code}>
                      {ele.code}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-1">
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                placeholder="12345 67890"
                className="form-style"
                onChange={handleOnChange}
              />
            </div>
          </div>


        </div>
        <div className="flex gap-x-3">
          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] form-label">
              Create Password <sup className="mandat">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#C3D5FF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#C3D5FF" />
              )}
            </span>
          </label>
          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] form-label">
              Confirm Password <sup className="mandat">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#C3D5FF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#C3D5FF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[2px] bg-icob py-[12px] px-[12px] font-medium text-white font-DMSans hover:scale-105 delay-110 transition-all ease-in"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
