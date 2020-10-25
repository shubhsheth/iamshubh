import "bootstrap/dist/css/bootstrap-grid.min.css"
import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"


import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Banner from "../components/banner/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Banner />
  </Layout>
)

export default IndexPage
