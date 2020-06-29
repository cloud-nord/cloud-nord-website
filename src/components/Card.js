import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// ========================
// The primary card container
const CardWrap = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0.2em 1em 0em 1em;
`;
// ========================

// ========================
// The card header
const CardHeader = styled.h1`
  font-weight: bold;
  text-align: center;
`;
// ========================

const CardIcon = styled.i`
    color: ${props => props.iconColor || "black"};
`;
// ========================
// Primary copy (inc. links, etc)
const CardContent = styled.div``;
// ========================

class Card extends React.Component {
  render() {
    return (
      <CardWrap>
          <CardHeader><CardIcon iconColor={this.props.iconColor} className={this.props.icon}/> {this.props.title}</CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </CardContent>
      </CardWrap>
    );
  }
}

export default Card;
