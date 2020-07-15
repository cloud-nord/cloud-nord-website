import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height:100%!important;
`;

const CardHeader = styled.h1`
  font-weight: bold;
  text-align: center;
  line-height: 20px!important;
`;

const CardIcon = styled.i`
  color: ${props => props.iconColor || "black"};
`;

const CardContent = styled.div`
  padding: 40px 1em 1em 1em;
`;

class Card extends React.Component {
  render() {
    return (
      <CardWrap>
          <section className="main style2 special">
              <CardHeader>
                  {this.props.title}
              </CardHeader>
              <CardHeader>
                  <CardIcon iconColor={this.props.iconColor} className={this.props.icon}/>
              </CardHeader>
          </section>

        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </CardContent>
      </CardWrap>
    );
  }
}

export default Card;
