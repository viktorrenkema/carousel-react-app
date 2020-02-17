import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import React from "react"

export default function Heading(props) {
  // const [hovered, setHovered] = React.useState(false)

  // const onHoverStart = () => {
  //   setHovered(true)
  // }

  // const onHoverEnd = () => {
  //   setHovered(false)
  // }

  return (
    <motion.section className="heading">
      <motion.p className="heading--copy">Gallery</motion.p>
      <motion.p className="heading--undercopy">
        Take a look at this collection of images of something interesting
      </motion.p>
    </motion.section>
  )
}
