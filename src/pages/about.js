// import React from "react"

// import { Styled, css } from "theme-ui"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// import Layout from "gatsby-theme-blog/src/components/layout"
// import SEO from "gatsby-theme-blog/src/components/seo"

// const post = {
//   blogTitle: "Pietro Rampazzo",
//   title: "About me",
//   excerpt: "About me",
// }

// export default ({ data, location }) => (
//   <Layout location={location} title={post.blogTitle}>
//     <SEO title={post.title} description={post.excerpt} />
//     <main>
//       <Styled.h1>{post.title}</Styled.h1>
//       <Img fluid={data.me.childImageSharp.fluid} />
//       <Styled.p
//         css={css({
//           pt: 3,
//         })}
//       >
//         Hi, I'm Pietro.
//       </Styled.p>
//       <Styled.p>
//         I'm a MSc Student in Human-Centered AI at Technical University of
//         Denmark. In the last few years I worked as Full-Stack Developer.
//       </Styled.p>
//       <Styled.p>
//         I'm currently involved in a data science research which aims to leverage
//         free floating bike sharing systems' data sources to study the mobility
//         of Padova (my hometown) -{" "}
//         <Styled.a href={`/projects/`}>more details</Styled.a>.
//       </Styled.p>
//       <Styled.p>
//         In my spare time, I'm a mentor at{" "}
//         <Styled.a href="http://www.coderdojopadova.it">CoderDojo</Styled.a>, a
//         global movement of free programming clubs for young people. Also, I
//         usually take photos while I'm around - you can find some them published
//         on{" "}
//         <Styled.a href="https://unsplash.com/@peterampazzo">Unsplash</Styled.a>.
//       </Styled.p>
//       <Styled.p>
//         You can find me on{" "}
//         <Styled.a href="https://twitter.com/peterampazzo">Twitter</Styled.a> /{" "}
//         <Styled.a href="https://github.com/peterampazzo">GitHub</Styled.a> /{" "}
//         <Styled.a href="https://linkedin.com/in/peterampazzo/">
//           LinkedIn
//         </Styled.a>{" "}
//         or you can also{" "}
//         <Styled.a href="mailto:pietro@rampazzo.co">email</Styled.a> me.
//       </Styled.p>
//     </main>
//   </Layout>
// )

// export const query = graphql`
//   query {
//     me: file(relativePath: { eq: "0E0A8013.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
