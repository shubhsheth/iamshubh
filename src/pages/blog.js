import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Container } from 'react-bootstrap'

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import "./blog.css"

const Blog = () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(
            sort: {
              fields: [frontmatter___date]
              order: DESC
            }
          ) {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        image
                        path
                        title
                        date
                        category
                        source
                    }
                }
            }
        }
    }
    `)

    
    const formatDate = (unformatted) => {
        const d = new Date(unformatted);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[d.getMonth()]} ${d.getDate() + 1}, ${d.getFullYear()}`;
    }

    return (
        <Layout>
            <SEO title="Page two" />
            <section className="blog-items">
                <Container>
                    <div className="blog-grid">
                        {data.allMarkdownRemark.edges.map((item, i) =>
                            <Link key={i} to={item.node.frontmatter.path} className="blog-item" >
                                <img src={item.node.frontmatter.image} />
                                <div className="blog-item-content">
                                    { (item.node.frontmatter.source == "external") ? 
                                        <div class="blog-item-flags"> 
                                            <div class="blog-item-flag flag-external">External</div>
                                        </div>
                                    : ''}
                                    <h2>{item.node.frontmatter.title}</h2>
                                    <div className="blog-item-exerpt">
                                        {item.node.frontmatter.description}
                                    </div>
                                    <div className="blog-item-meta">
                                        <div className="blog-item-date">
                                            {formatDate(item.node.frontmatter.date)}
                                        </div>
                                        <div className="blog-item-category">
                                            {item.node.frontmatter.category}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </Container>
            </section>
            {console.log(data)}
        </Layout>
    )
}

export default Blog
