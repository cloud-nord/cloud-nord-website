import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// ========================
// The primary card container
const CardWrap = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
// ========================

// ========================
// The card header
const CardHeader = styled.h1`
  font-weight: bold;
  text-align: center;
`;
// ========================

// ========================
// Primary copy (inc. links, etc)
const CardCopy = styled.div``;
// ========================

class Card extends React.Component {
  render() {
    return (
      <CardWrap>
        <CardHeader>{this.props.title}</CardHeader>
        <CardCopy>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </CardCopy>
      </CardWrap>
    );
  }
}

export default Card;

/*export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allImageSharp {
            edges {
                node {
                    fixed(width: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`*/
