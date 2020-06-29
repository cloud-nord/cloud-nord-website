import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card";

class Sponsors extends React.Component {
  render() {
    const sponsorTypes = this.props.data.allMarkdownRemark.nodes
      .slice(1)
      .map(node => (
        <div className="col-4">
          <Card icon={node.frontmatter.icon} iconColor={node.frontmatter.iconColor} title={node.frontmatter.title} content={node.html} />
        </div>
      ));

    return (
      <Layout displayHeader="false">
        <div className="grid-wrapper">
          <div className="col-12">
            <section id="one" className="main style1">
              <header className="major">
                <h2>
                  {this.props.data.allMarkdownRemark.nodes[0].frontmatter.title}
                </h2>
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.data.allMarkdownRemark.nodes[0].html
                }}
              />
            </section>
          </div>
          {sponsorTypes}
        </div>
      </Layout>
    );
  }
}

export default Sponsors;

export const pageQuery = graphql`
  query SponsorsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sponsors/" } }
      sort: { fields: frontmatter___rank, order: ASC }
    ) {
      nodes {
        frontmatter {
            title
            icon
            rank
            iconColor
        }
        html
      }
    }
  }
`;
