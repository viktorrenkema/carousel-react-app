import * as React from "react"
import { motion } from "framer-motion"
import { useGlobal } from "reactn"

function Card(props) {
  const [global, setGlobalState] = useGlobal()

  const [open, setOpen] = React.useState(false)

  const cardClick = () => {
    setOpen(!open)
  }

  const onHoverStart = () => {
    setGlobalState({
      activeCarousel: false,
    })
    console.log(global.activeCarousel)
  }

  const onHoverEnd = () => {
    setGlobalState({
      activeCarousel: true,
    })
    console.log(global.activeCarousel)
  }

  return (
    <motion.div
      onClick={cardClick}
      className="card"
      style={{
        height: "400px",
        backgroundColor: props.color,
        float: "left",
      }}
      animate={{ minWidth: open ? "400px" : "300px" }}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStart}
    ></motion.div>
  )
}

export default function Carousel(props) {
  const [global, setGlobalState] = useGlobal()
  return (
    <motion.div
      style={{
        width: "100%",
        margin: "0 auto",
        float: "left",
      }}
    >
      <motion.div
        style={{
          overflow: "hidden", //         <---
          position: "relative",
          margin: "0 auto",
          width: "80%",
          left: "-100px",
        }}
      >
        <motion.div
          style={{
            position: "relative",
            // left: "-100px",
            width: "200%",
            height: "100%",
            left: global.activeCarousel ? "300px" : "0px",
          }}
          animate={{ left: "300px" }}
          transition={{ duration: 3, flip: Infinity, ease: "linear" }}
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
