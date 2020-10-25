import React from 'react';
import { graphql } from "gatsby";

import { Image, Container } from "react-bootstrap";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import '../styles/post.css';

const Template = ({ data }) => {
    const post = data.markdownRemark;

    const formatDate = (unformatted) => {
        const d = new Date(unformatted);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[d.getMonth()]} ${d.getDate() + 1}, ${d.getFullYear()}`;
    }

    deckDeckGoHighlightElement();

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Container>
                <article>
                    <div className="header">
                        <h1>{post.frontmatter.title}</h1>
                        <div className="date">{formatDate(post.frontmatter.date)}</div>
                        <Image src={post.frontmatter.image} className={'img-fluid'} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <div className="footer">
                        <div className="opensource">
                            This blog is <a href="#">open-source on Github</a>.
                        </div>
                        <div className="tags">
                            <label>Tags:</label>
                            {post.frontmatter.tags.map((item, i) =>
                                <span key={i}>{item}</span>
                            )}
                        </div>
                        <div className="author">
                            <img src="/images/me2.jpg" className="avatar" />
                            <div className="description">
                                <div className="name">Shubh Sheth</div>
                                <div className="text">MDX lets you write JSX embedded inside markdown, perfect for technical blogs. MDX works with Gatsby through</div>
                            </div>
                        </div>
                    </div>
                </article>
            </Container>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                image
                date
                tags
                category
            }
        }
    }
`

export default Template