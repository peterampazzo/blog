import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data

  return (
    <div>
      <Flex css={css({ mb: 2, alignItems: `center` })}>
        {avatar ? (
          <Image
            fixed={avatar.childImageSharp.fixed}
            alt={author}
            css={css({
              mr: 2,
              mb: 0,
              width: 48,
              minWidth: 48,
              borderRadius: 99999,
            })}
          />
        ) : (
          <div
            css={css({
              mr: 2,
              mb: 0,
              width: 48,
              minWidth: 48,
              borderRadius: 99999,
            })}
            role="presentation"
          />
        )}
        <Styled.div>
          <BioContent />
        </Styled.div>
      </Flex>
      <nav
        css={css({
          display: `flex`,
          justifyContent: `flex-start`,
          alignItems: `left`,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
          })}
          to={`/about/`}
        >
          About
        </Styled.a>
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            ml: 4,
          })}
          to={`/projects/`}
        >
          Projects
        </Styled.a>
      </nav>
    </div>
  )
}

const bioQuery = graphql`
  query Bio {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
