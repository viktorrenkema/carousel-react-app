import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import Heading from "../components/heading"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import { motion } from "framer-motion"

const IndexPage = () => (
  <Layout>
    <Heading></Heading>
    <Carousel></Carousel>
    {/* <motion.div className="flexwrap--cards">
      <Card color={"#f64747"}></Card>
      <Card color={"#db0a5b"}></Card>
      <Card color={"#cf000f"}></Card>
      <Card color={"#e74c3c"}></Card>
      <Card color={"#d64541"}></Card>
      <Card color={"#ff9478"}></Card>
      <Card color={"#d24d57"}></Card>
    </motion.div> */}
  </Layout>
)

export default IndexPage
