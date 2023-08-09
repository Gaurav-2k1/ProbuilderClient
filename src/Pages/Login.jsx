import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"
import frameImage from "../assets/Images/loginframe.png"

function Login() {
  return (
    <Template
      title="Welcome Back!"
      description1="Log in to your account to access your personalized portfolio dashboard and resume your creative pursuit."
      description2=""
      image={loginImg}
      frame={frameImage}
      formType="login"
    />
  )
}

export default Login
