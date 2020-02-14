import * as React from "react"
import { motion } from "framer-motion"

function Card(props) {
  const [open, setOpen] = React.useState(false)

  const cardClick = () => {
    setOpen(!open)
  }
  console.log(open)
  return (
    <div
      onClick={cardClick}
      className="card"
      style={{}}
      animate={{ height: open ? "400px" : "477px" }}
      whileHover={{ opacity: "0.8" }}
      style={{
        height: "400px",
        width: "75px",
        backgroundColor: props.color,
        float: "left",
        boxShadow: open
          ? "0 0px 3.6px rgba(0, 0, 0, 0.03),0 0px 10px rgba(0, 0, 0, 0.045),0 0px 24.1px rgba(0, 0, 0, 0.058),0 0px 80px rgba(0, 0, 0, 0.07)"
          : "none",
        minWidth: "310px",
      }}
    ></div>
  )
}

function animateCards() {}

export default function Carousel(props) {
  return (
    <motion.div
      style={{
        width: "100%",
        margin: "0 auto",
        height: "400px",
        float: "left",
      }}
    >
      <motion.div
        style={{
          // border: "2px dashed #05f",
          overflow: "hidden", //         <---
          position: "relative",
          margin: "0 auto",
          width: "300px",
          height: "300px",
          width: "80%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <motion.div
          animate={{ left: "300px" }}
          transition={{ duration: 10 }}
          style={{
            position: "relative",
            // left: "-123px",
            width: "200%",
            height: "100%",
          }}
        >
          <Card color="#f64747"></Card>
          <Card color="#db0a5b"></Card>
          <Card color="#cf000f"></Card>
          <Card color="#e74c3c"></Card>
          <Card color="#d64541"></Card>
          <Card color="#ff9478"></Card>
          <Card color="#d24d57"></Card>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

Carousel.defaultProps = {
  height: 400,
  width: 400,
  text: "Get started!",
  tint: "#0099ff",
}
