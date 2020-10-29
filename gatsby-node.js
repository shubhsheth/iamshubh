const path = require('path');

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