import React, { useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./posts.css"


const LatestPosts = () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(
            limit: 3
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
        <section className="latest-posts">
            <div className="container">
                <h2 className="section-heading">Latest Posts</h2>
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
                    <Link className="view-more" to="/blog/">View More</Link>
                </div>
                <div className="categories">
                    <Link className="category" to="/">Design</Link>
                    <Link className="category" to="/">Web Development</Link>
                    <Link className="category" to="/">CSS</Link>
                    <Link className="category" to="/">Javascript</Link>
                </div>
            </div>
        </section>
    )
}

export default LatestPosts