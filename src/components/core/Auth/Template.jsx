import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType, frame }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-white">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-around gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[500px] md:mx-0">
            <h1 className="text-[30px] font-semibold leading-[38px] text-black font-inter w-full">
              {title}
            </h1>
            <p className="my-4 text-[16px] leading-[26px] mb-2">
              <span className="text-black font-medium font-DMSans">{description1}</span>{" "}
              <span className="font-DMSans text-black">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0 md:mt-20">
            <img
              src={frame}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="rounded-lg"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
