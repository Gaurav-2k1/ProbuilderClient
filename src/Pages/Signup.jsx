import signupImg from "../assets/Images/signup.png"
import Template from "../components/core/Auth/Template"
import frameImage from "../assets/Images/signframe.png"
function Signup() {
  return (
    <Template
      title="Join Us Today and Unleash Your Professional Potential"
      description1="Create an account to access a world of personalized portfolio-building features and stand out in your field."
      description2=""
      image={signupImg}
      frame={frameImage}
      formType="signup"
    />
  )
}

export default Signup
