import React from "react"
import { css, Styled } from "theme-ui"
import { Link } from "gatsby"

const NavItem = ({ title, url, label, emoji }) => (
  <div
    css={css({
      mr: 2,
    })}
  >
    <span role="img" aria-label={label}>
      {emoji}
    </span>
    <Styled.a
      as={Link}
      to={url}
      css={css({
        color: `inherit`,
        ml: 1,
      })}
    >
      {title}
    </Styled.a>
  </div>
)

const Nav = () => (
  <nav
    css={css({
      display: `flex`,
      justifyContent: `flex-start`,
      alignItems: `left`,
    })}
  >
    <NavItem title="Home" url="/" label="home" emoji={`🏠`} />
    <NavItem title="About" url="/about/" label="technologist" emoji={`🧑‍💻`} />
    <NavItem title="Projects" url="/projects/" label="keyboard" emoji={`⌨️`} />
  </nav>
)

export default Nav
