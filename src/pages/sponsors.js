import React from "react";
import {graphql} from "gatsby";
import Img from "gatsby-image";
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

        const listSponsorsProfessional = this.props.data.sponsorsProfessionalLogos.edges
            .map(edge => (
                <div className="col-3">
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            ));

        const listSponsorsAssociate = this.props.data.sponsorsAssociateLogos.edges
            .map(edge => (
                <div className="col-3">
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            ));

        return (
            <Layout displayHeader="false">
                <section id="sponsor-offers" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <section className="main style1">
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
                </section>
                <section id="sponsors-professional" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>{this.props.data.sponsorsPage.childMarkdownRemark.frontmatter.titleOfferProfessional}</h2>
                            </header>
                        </div>
                        {listSponsorsProfessional}
                    </div>
                </section>
                <section id="sponsors-associate" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>{this.props.data.sponsorsPage.childMarkdownRemark.frontmatter.titleOfferAssociate}</h2>
                            </header>
                        </div>
                        {listSponsorsAssociate}
                    </div>
                </section>
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
                    titleOfferProfessional
                    titleOfferAssociate
                }
                html
            }
        }
        sponsorsProfessionalLogos: allFile(filter: {extension: {regex: "/(png|jpe?g)/"}, relativePath: {regex: "/sponsors/professional/"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        sponsorsAssociateLogos: allFile(filter: {extension: {regex: "/(png|jpe?g)/"}, relativePath: {regex: "/sponsors/associate/"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
