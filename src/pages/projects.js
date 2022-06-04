import React from "react"

import { Styled, css } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

const post = {
  blogTitle: "Pietro Rampazzo",
  title: "Projects",
  excerpt: "Projects",
}

const Card = ({ title, children }) => (
  <Styled.div
    css={css({
      mb: 4,
      borderStyle: `solid`,
      borderRadius: `15px`,
      borderWidth: `1px`,
      borderColor: `gray`,
      boxShadow: `-10px 10px 80px rgba(0,0,0,.30)`,
      p: 4,
    })}
  >
    <Styled.h2>{title}</Styled.h2>
    {children}
  </Styled.div>
)

export default ({ data, location }) => (
  <Layout location={location} title={post.blogTitle}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Card title="Movi by Mobike (Analytics)">
        <Styled.p>
          The research focus on leveraging{" "}
          <Styled.a href="https://www.ridemovi.com/">Movi</Styled.a>{" "}
          (formely Mobike Italy) data, a free floating bike sharing system, to study
          urban mobility in Padova (Italy), through descriptive and cluster
          analysis.
        </Styled.p>
        <Styled.p>
          <b>Presentation:</b>{" "}
          <i>
            I Want to Ride my Bicycle: Leveraging Mobike Data to Study Mobility
            in Padova, Italy
          </i>{" "}
          - <Styled.a href={data.ic2s2.publicURL}>Poster</Styled.a>
        </Styled.p>
        <Styled.p>
          <b>Co-authors:</b>{" "}
          <Styled.a href="https://katherinehoffmannpham.com/">
            Katherine Hoffmann Pham
          </Styled.a>{" "}
          (UN Global Pulse),{" "}
          <Styled.a href="https://francescorampazzo.com">
            Francesco Rampazzo
          </Styled.a>{" "}
          (University of Oxford),{" "}
          <Styled.a href="http://www.dei.unipd.it/~silvestri/">
            Francesco Silvestri
          </Styled.a>{" "}
          (Università degli Studi di Padova)
        </Styled.p>
      </Card>
      <Card title="OpenStreetMap POIs">
        <Styled.p>
          This Python package allows to query OpenStreetMap API using OverPy and
          retrieve all nodes and ways included in a area. It is possible to load
          a list of polygons using GeoPandas (JSON, GeoJSON, Shapefile are
          supported) and loop through them.
        </Styled.p>
        <Styled.p>
          The goal is to associate for every area a list of POIs retrived from
          OpenStreetMap. The query will be performed on the bounding box built around the given
          polygon.
        </Styled.p>
        <Styled.p>
          <Styled.a href="https://github.com/peterampazzo/osm-poi">
            GitHub
          </Styled.a>
        </Styled.p>
      </Card>
      <Card title="VirtualDojo">
        <Styled.p>
          Due to COVID-19,{" "}
          <Styled.a href="http://www.coderdojopadova.it">
            CoderDojo Padova
          </Styled.a>{" "}
          decided to conduct its activities online during the lock-down in
          Italy. We teamed up with several clubs all over Italy and we reached
          almost 60 participants. I contributed to develop{" "}
          <Styled.a href="https://www.virtualdojo.it">VirtualDojo</Styled.a>.
          This is open source platform which wraps{" "}
          <Styled.a href="https://jitsi.org/">Jitsi Meet</Styled.a> through its
          public API and offers a realtime dashboard where it is possible to
          manage multiple users and rooms.
        </Styled.p>
        <Styled.p>
          <Styled.a href="https://github.com/virtualdojo/virtualdojo-rooms">
            GitHub
          </Styled.a>
        </Styled.p>
      </Card>
      <Card title="200 Metri da Casa">
        <Styled.p>
          During the COVID-19 lockdown, people living in the region of Veneto
          were allowed to walk around a radius of 200 meters from their house.
          This webpage renders a map with their location and the allowed area.
        </Styled.p>
        <Styled.p>
          <Styled.a href="https://200-metri-da-casa.netlify.com">
            200-metri-da-casa.netlify.com
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://github.com/peterampazzo/200-metri-da-casa">
            GitHub
          </Styled.a>
        </Styled.p>
        <Styled.p>
          <b>Impact:</b>{" "}
          <Styled.a href="https://unive.it/pag/14024/?tx_news_pi1[news]=8760&cHash=ff9e0265f00124248397a6e2b9340aae">
            Ca' Foscari University of Venice
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://mattinopadova.gelocal.it/regione/2020/03/23/news/coronavirus-ecco-il-link-per-misurare-la-distanza-dei-200-metri-da-casa-tua-1.38628079">
            Il Mattino di Padova
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://www.ilgazzettino.it/nordest/venezia/coronavirus_mappa_200_metri_da_casa_calcola-5141783.html">
            Il Gazzettino
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://www.vvox.it/2020/03/27/coronavirus-divieti-passeggiate-200-metri-da-casa-netilfy-come-fare-pietro-rampazzo-ca-foscari/">
            Vvox
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://primavenezia.it/cultura/come-calcolo-200-metri-da-casa-lapp-che-ti-aiuta-creata-a-ca-foscari/">
            Prima Venezia
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://www.runnersworld.it/coronavirus-come-misurare-la-distanza-dei-200-metri-da-casa-9250">
            Runner's World
          </Styled.a>{" "}
          -{" "}
          <Styled.a href="https://www.corrieredellosport.it/news/altri-sport/running/2020/04/09-68714327/restrizioni_nasce_la_app_per_rimanere_nei_200_metri_da_casa_/">
            Corriere dello Sport
          </Styled.a>
        </Styled.p>
      </Card>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    ic2s2: file(relativePath: { eq: "Mobike-IC2S2-Poster.jpg" }) {
      publicURL
    }
  }
`
