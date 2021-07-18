const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/post.js');

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        source
                    }
                }
            }
        }
    }`)
        .then(res => {
            if (res.errors) {
                return Promise.reject(res.errors);
            }

            res.data.allMarkdownRemark.edges.forEach(({ node }) => {
                if (node.frontmatter.source == "internal") {
                    createPage({
                        path: node.frontmatter.path,
                        component: postTemplate
                    })
                }
            })

        })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}