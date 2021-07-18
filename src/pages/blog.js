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
                        description
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
            <SEO title="Blog" />
            <section className="latest-posts">
                <div className="container">
                    <h2 className="section-heading">Blog Posts</h2>
                    <div className="posts">
                        {data.allMarkdownRemark.edges.map((item, i) =>
                            <Link key={i} to={item.node.frontmatter.path} className="post" 
                                target={ (item.node.frontmatter.source === "external") ? "_blank" : "self" } >
                                <h3>{item.node.frontmatter.title}</h3>
                                <div className="metas">
                                    <div className="meta">{formatDate(item.node.frontmatter.date)}</div>
                                    <div className="meta">{item.node.frontmatter.category}</div>
                                    { (item.node.frontmatter.source === "external") ? 
                                    <div className="meta">External</div>
                                    : ''}
                                </div>
                                <p className="excerpt">
                                    {item.node.frontmatter.description}
                                </p>
                                <div className="read-more" to="/">Read More</div>
                            </Link>
                        )}
                    </div>
                    <div className="categories">
                        <Link className="category" to="/">Design</Link>
                        <Link className="category" to="/">Web Development</Link>
                        <Link className="category" to="/">CSS</Link>
                        <Link className="category" to="/">Javascript</Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Blog
