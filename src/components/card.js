import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import React from "react"

export default function Card(props) {
  const [open, setOpen] = React.useState(false)

  const cardClick = () => {
    setOpen(!open)
  }
  console.log(open)
  return (
    <motion.div>
      <motion.div
        onClick={cardClick}
        className="card"
        style={{
          boxShadow: open
            ? "0 0px 3.6px rgba(0, 0, 0, 0.03),0 0px 10px rgba(0, 0, 0, 0.045),0 0px 24.1px rgba(0, 0, 0, 0.058),0 0px 80px rgba(0, 0, 0, 0.07)"
            : "none",
          minWidth: "310px",
          backgroundColor: props.color,
        }}
        animate={{ height: open ? "400px" : "477px" }}
        whileHover={{ opacity: "0.8" }}
        // whileHover={{ opacity: "0.8", transform: scale(0.7) }}
        // whileHover={{ opacity: "0.8", height: "520px", minWidth: "338px" }}
        // dragConstraints={{ left: 50, right: 50, top: 0, bottom: 0 }}
        // drag
      ></motion.div>
      <motion.p
        className="cardcopy"
        style={{
          backgroundColor: "none",
          opacity: open ? "1" : "0",
        }}
      >
        SOME COPY BELOW CARD
      </motion.p>
    </motion.div>
  )
}
