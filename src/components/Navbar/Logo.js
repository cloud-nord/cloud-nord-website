import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 65px;
  border-bottom: none !important;

  @media all and (min-width: 321px) and (max-width: 1980px) {
    flex: 0 1 50px;
  }

  @media all and (max-width: 320px) {
    flex: 0 1 35px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "website-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  );
};

export default Logo;
