import { useRef, useState } from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md'
import { IoMdSchool } from 'react-icons/io'
const Experience = ({ user }) => {
  const data = [
    {
      name: "Experience"
    },
    {
      name: "Education"
    },

  ]
  const [selected, setselect] = useState(data[0].name)
  const sel = useRef(data[0].name)
  let st = useRef(user?.experience);
  const updatestack = () => {
    if (sel.current === "Experience") {
      st.current = user?.experience;
    } else if (sel.current === "Education") {
      st.current = user?.education;
    }
  }

  return (
    <div id="Experience" className="h-full  py-5 w-full bg-primary flex flex-col items-center">
      <h1 className="text-white text-3xl text-center my-4">Experience</h1>
      <div className="w-min md:w-full  md:h-2/5 flex flex-col items-center px-2 md:px-0">
        <div className="w-min overflow-x-auto md:overflow-visible md:min-w-max gap-4 md:h-min flex md:flex-row justify-between bg-slate-600 my-2 p-1 rounded-md">
          {
            data.map((d, i) => {
              return (
                <span key={i} className={`text-lg ${selected === d.name ? " bg-tertiary" : ""} rounded-md p-2 text-white cursor-pointer
                                 flex items-center justify-items-center`}
                  onClick={() => {
                    sel.current = d.name
                    setselect(d.name)
                    updatestack()
                  }}>
                  {d.name}
                </span>
              )

            })
          }
        </div>
        <div className="h-full w-full md:w-3/5 flex justify-center items-center my-10 overflow-hidden">
          <VerticalTimeline>
            {
              st.current.map((data, i) => {
                return (

                  selected === "Experience" ?
                    <TimelineComponent key={i} date={data.startDate + " - " + data.endDate} icon={<MdWork />} title={data.employer} subtitle="" des={data.title} />
                    : <>
                      <TimelineComponent key={i} date={data.startDate + " - " + data.endDate} icon={<IoMdSchool />} title={data.schoolname} subtitle="" des={data.title} />

                    </>



                )

              })
            }

          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

const TimelineComponent = ({ date, icon, title, subtitle, des }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      dateClassName="mx-5"
      contentStyle={{ background: '#70809080', color: '#fff' }}

      date={date}

      iconStyle={{ background: '#000000', color: '#fff' }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>
        {des}
      </p>
    </VerticalTimelineElement>)
}
export default Experience