/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import "./layout.css"
import "../styles/fontawesome-all.min.css"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			<Helmet>
				<link rel="icon" href="/favicon.png" />
			</Helmet>
			<Location>
				{({ location }) => {
					return ((location.pathname !== "/") ? <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> : "")
				}}
			</Location>
			<main>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
