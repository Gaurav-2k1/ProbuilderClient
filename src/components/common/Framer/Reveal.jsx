/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControl = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControl.start("visible")
        }
        console.log(isInView)
    }, [isInView])
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0, y: 75
                    },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.5, delay: 0.25
                }}
            >
                {
                    children
                }
            </motion.div>
        </div>
    )
}

export default Reveal