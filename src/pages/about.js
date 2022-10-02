import React from "react"

import { Styled, css } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

const post = {
  blogTitle: "Pietro Rampazzo",
  title: "About me",
  excerpt: "About me",
}

export default ({ data, location }) => (
  <Layout location={location} title={post.blogTitle}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Img
        fluid={data.me.childImageSharp.fluid}
        css={css({
          borderRadius: "50%",
          height: "auto",
          width: "50%",
          margin: "auto",
        })}
      />
      <Styled.h3
        css={css({
          pt: 3,
          textAlign: "center",
        })}
      >
        Ciao{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        I'm Pietro!
      </Styled.h3>
      <Styled.p>
        I recently completed a Master of Science in Engineering in
        Human-Centered AI at{" "}
        <Styled.a href="https://www.dtu.dk/english">
          Technical University of Denmark
        </Styled.a>
        , in Copenhagen. I pursued a B.Sc. in Computer Science at{" "}
        <Styled.a href="https://www.unive.it/pag/13526">
          Ca' Foscari University of Venice
        </Styled.a>
        .
      </Styled.p>
      {/* <Styled.p>
        In the last few years, I worked as a Full-Stack Developer, leading web
        development and working with technologies such as ReactJS.
      </Styled.p> */}
      <Styled.p>
        Currently, I'm a Software (and Data) Engineer at{" "}
        <Styled.a href="https://www.nordea.com/en">
          Nordea Asset Management
        </Styled.a>{" "}
        within the trading and investment areas. I work in a cross-functional
        team focused on implementing our trading strategy.
      </Styled.p>
      <Styled.p>
        I led a study of Human-Mobility leveraging shared-mobility data. Since
        May 2019 I've been working on{" "}
        <Styled.a href="https://www.ridemovi.com/">Movi</Styled.a> (formerly
        Mobike Italy) data for the city of Padova (
        <Styled.a href={`/projects/`}>more details</Styled.a>). More recently, I
        have developed{" "}
        <Styled.a href="https://github.com/peterampazzo/osm-poi">
          OSM POI
        </Styled.a>
        , a Python application to retrieve land-use data from OpenStreetMap. In February 2022 for
        my Master's thesis, I joined{" "}
        <Styled.a href="https://www.dsbdigitallabs.dk/">
          DSB Digital Lab
        </Styled.a>{" "}
        (part of the Danish State Railway) to study the users' usage data of{" "}
        <Styled.a href="https://www.koermit.dk/">Kørmit</Styled.a>. This is a
        mobility service, which aims to solve the last-mile problem for
        commuters to reach their workplace from the closest train station.
      </Styled.p>
      <Styled.p>
        In my spare time, I'm a mentor at{" "}
        <Styled.a href="http://www.coderdojopadova.it">CoderDojo</Styled.a>, a
        global movement of free programming clubs for young people. Also, I
        usually take photos while I'm around - you can find some of them
        published on {" "}
        <Styled.a href="https://unsplash.com/@peterampazzo">Unsplash</Styled.a>.
      </Styled.p>
      <Styled.p>
        You can find me on{" "}
        <Styled.a href="https://twitter.com/peterampazzo">Twitter</Styled.a> /{" "}
        <Styled.a href="https://github.com/peterampazzo">GitHub</Styled.a> /{" "}
        <Styled.a href="https://linkedin.com/in/peterampazzo/">
          LinkedIn
        </Styled.a>{" "}
        or you can also{" "}
        <Styled.a href="mailto:pietro@rampazzo.co">email</Styled.a> me.
      </Styled.p>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    me: file(relativePath: { eq: "IMG_2117.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
