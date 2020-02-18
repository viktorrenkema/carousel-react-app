import React from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import Heading from "../components/heading"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel, { CarouselCard } from "../components/carousel"
import { motion } from "framer-motion"

const IndexPage = () => (
  <Layout>
    <Heading></Heading>
    <Carousel width="80%">
      <CarouselCard color="#f64747">Card 1</CarouselCard>
      <CarouselCard color="#db0a5b">Card 2</CarouselCard>
      <CarouselCard color="#cf000f">Card 3</CarouselCard>
      <CarouselCard color="#e74c3c">Card 4</CarouselCard>
      <CarouselCard color="#d64541">Card 5</CarouselCard>
      <CarouselCard color="#ff9478">Card 6</CarouselCard>
      <CarouselCard color="#d24d57">Card 7</CarouselCard>
    </Carousel>
  </Layout>
)

export default IndexPage
