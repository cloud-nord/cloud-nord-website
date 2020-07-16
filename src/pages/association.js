import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";

class Association extends React.Component {
    render() {
        return (
            <Layout displayHeader="false">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <section id="association" className="main style1">
                            <header className="major">
                                <h2>
                                    {this.props.data.associationPage.childMarkdownRemark.frontmatter.title}
                                </h2>
                            </header>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.props.data.associationPage.childMarkdownRemark.html
                                }}
                            />
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Association;

export const pageQuery = graphql`
    query AssoQuery {
      associationPage: file(relativePath: {eq: "association.md"}, sourceInstanceName: {eq: "contents"}) {
        childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }
    }
`;
