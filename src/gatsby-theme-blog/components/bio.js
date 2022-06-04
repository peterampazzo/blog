import React from "react"
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
