import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly team is here to help.",
    details: "info@studynotion.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7869",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-9 rounded-xl bg-black p-4 lg:p-6 lg:absolute lg:left-0 lg:top-0">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-white font-DMSans"
            key={i}
          >
            <div className="flex flex-row items-center gap-3 font-DMSans">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-white font-DMSans">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium font-DMSans">{ele?.description}</p>
            <p className="font-semibold font-DMSans">{ele?.details}</p>
          </div>
        )
      })}
      
    </div>
  )
}

export default ContactDetails
