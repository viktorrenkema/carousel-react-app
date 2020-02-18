import * as React from "react"
import { motion } from "framer-motion"
import { useGlobal } from "reactn"
import Arrow from "../images/arrow.svg"

export function CarouselCard(props) {
  return (
    <div
      className="card"
      style={{
        height: "400px",
        backgroundColor: props.color,
        float: "left",
        minWidth: "900px",
      }}
    ></div>
  )
}

const keyCodeLeft = 37
const keyCodeRight = 39

export default function Carousel(props) {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0)

  React.useEffect(() => {
    console.log("useEffect log " + (currentPageIndex + 1))
  })

  return (
    <div
      className="carousel"
      onKeyUp={e => {
        if (e.keyCode === keyCodeLeft) {
          const previousPage = getPreviousPage(currentPageIndex)
          setCurrentPageIndex(previousPage)
        } else if (e.keyCode === keyCodeRight) {
          const nextPage = getNextPage(currentPageIndex, props.children.length)
          setCurrentPageIndex(nextPage)
        }
      }}
      tabIndex={0}
      style={{
        width: props.width,
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {" "}
      <motion.div style={{ display: "flex" }}>
        <motion.div
          onClick={() => {
            const previousPage = getPreviousPage(currentPageIndex)
            setCurrentPageIndex(previousPage)
          }}
          style={{
            backgroundColor: "#e8e8e8",
            height: "50px",
            width: "50px",
            transform: "rotate(180deg)",
            backgroundImage: `url(${Arrow})`,
            marginRight: "0.5em",
          }}
        ></motion.div>
        <motion.div
          onClick={() => {
            const nextPage = getNextPage(
              currentPageIndex,
              props.children.length
            )
            setCurrentPageIndex(nextPage)
          }}
          style={{
            backgroundColor: "#e8e8e8",
            height: "50px",
            width: "50px",
            backgroundImage: `url(${Arrow})`,
          }}
        ></motion.div>
      </motion.div>
      <motion.div
        style={{
          position: "relative",
          width: "1000%",
          height: "100%",
        }}
        animate={{ left: currentPageIndex * -916 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </div>
  )
}

function getPreviousPage(page) {
  if (page >= 1) {
    return page - 1
  } else {
    return 0
  }
}

function getNextPage(page, maxPages) {
  const maxPageIndex = maxPages - 1
  if (page < maxPageIndex) {
    return page + 1
  } else {
    return maxPageIndex
  }
}
