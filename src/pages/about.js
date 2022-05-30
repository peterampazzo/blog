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
      <Img fluid={data.me.childImageSharp.fluid} />
      <Styled.p
        css={css({
          pt: 3,
        })}
      >
        Ciao! I'm Pietro.
      </Styled.p>
      <Styled.p>
        I'm an MSc Student in Human-Centered AI at{" "}
        <Styled.a href="https://www.dtu.dk/english">
          Technical University of Denmark
        </Styled.a>
        , in Copenhagen. I pursued a B.Sc. in Computer Science at Ca' Foscari
        University of Venice.
      </Styled.p>
      <Styled.p>
        In the last few years, I worked as a Full-Stack Developer, leading web
        development and working with technologies such as ReactJS.
      </Styled.p>
      <Styled.p>
        In 2021, I work at{" "}
        <Styled.a href="https://www.nordea.com/en">
          Nordea Asset Management
        </Styled.a>{" "}
        as a Student Data Engineer within the trading and investment areas.
      </Styled.p>
      <Styled.p>
        I'm leading a study of Human-Mobility leveraging shared-mobility data.
        Since May 2019 I've been working on{" "}
        <Styled.a href="https://www.ridemovi.com/">Movi</Styled.a> (formerly
        Mobike) data for the city of Padova (
        <Styled.a href={`/projects/`}>more details</Styled.a>). I recently
        joined{" "}
        <Styled.a href="https://www.dsbdigitallabs.dk/">
          DSB Digital Lab
        </Styled.a>{" "}
        (part of the Danish State Railway) for my Master's thesis to study the
        users' usage data of{" "}
        <Styled.a href="https://www.dsbdigitallabs.dk/cases/kormit">
          Kørmit
        </Styled.a>
        . This is a scooter rental service, which aims to solve the last-mile
        problem for commuters to reach their workplace from the closest train
        station.
      </Styled.p>
      <Styled.p>
        In my spare time, I'm a mentor at{" "}
        <Styled.a href="http://www.coderdojopadova.it">CoderDojo</Styled.a>, a
        global movement of free programming clubs for young people. Also, I
        usually take photos while I'm around - you can find some them published
        on{" "}
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
    me: file(relativePath: { eq: "0E0A8013.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
