import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"


import Hero from "../components/hero/hero"
import About from "../components/about/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
