import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"


import Hero from "../components/hero/hero"
import About from "../components/about/about"
import LatestPosts from "../components/posts/posts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <LatestPosts />
  </Layout>
)

export default IndexPage
