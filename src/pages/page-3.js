import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
  query {
    mongodbProfileBio {
      id
      name
      surname
    }
  }
`)
  return (
  <Layout>
    <SEO title="Page two" />
    {data.mongodbProfileBio.name}
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )

}

export default SecondPage
