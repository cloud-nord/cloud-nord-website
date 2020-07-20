import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

class CodeOfConduct extends React.Component {
  render() {
    return (
      <Layout displayHeader="false">
        <div className="grid-wrapper">
          <div className="col-12">
            <section id="association" className="main style1">
              <header className="major">
                <h2>
                  {
                    this.props.data.codeOfConductPage.childMarkdownRemark
                      .frontmatter.title
                  }
                </h2>
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.data.codeOfConductPage.childMarkdownRemark
                    .html
                }}
              />
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CodeOfConduct;

export const pageQuery = graphql`
  query ConductQuery {
    codeOfConductPage: file(
      relativePath: { eq: "code-of-conduct.md" }
      sourceInstanceName: { eq: "contents" }
    ) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`;
