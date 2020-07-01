import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 100px;
  border-bottom: none!important;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "website-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 75, pngQuality: 100) {
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
