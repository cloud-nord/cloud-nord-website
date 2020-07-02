import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card";

class Sponsors extends React.Component {
    render() {
        const sponsorsOffers = this.props.data.sponsorsOffers.nodes
            .map(node => (
                <div className="col-6">
                    <Card icon={node.frontmatter.icon} iconColor={node.frontmatter.iconColor}
                          title={node.frontmatter.title} content={node.html}/>
                </div>
            ));

        return (
            <Layout displayHeader="false">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <section id="one" className="main style1">
                            <header className="major">
                                <h2>
                                    {this.props.data.sponsorsPage.childMarkdownRemark.frontmatter.title}
                                </h2>
                            </header>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.props.data.sponsorsPage.childMarkdownRemark.html
                                }}
                            />
                        </section>
                    </div>
                    {sponsorsOffers}
                </div>
            </Layout>
        );
    }
}

export default Sponsors;

export const pageQuery = graphql`
    query SponsorsQuery {
        sponsorsOffers: allMarkdownRemark(sort: {fields: frontmatter___rank, order: ASC}, filter: {fileAbsolutePath: {regex: "/(sponsors-offer)/.*\\\\.md$/"}}) {
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
        sponsorsPage: file(relativePath: {eq: "sponsors.md"}, sourceInstanceName: {eq: "contents"}) {
            childMarkdownRemark {
                frontmatter {
                    title
                }
                html
            }
        }
    }
`;
