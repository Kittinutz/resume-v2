import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Component from "../components/profileheader";

// const Components = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//     <Link to="/page-3/">Go to page 3</Link>
//   </Layout>
// )
const IndexPage = () => (
  <div>
    <Component />
  </div>
)

export default IndexPage
