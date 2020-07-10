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

        const listSponsorsPremium = this.props.data.sponsorsPremiumLogos.edges
            .map(edge => (
                <div className="col-3">
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            ));

        const listSponsorsStandard = this.props.data.sponsorsStandardLogos.edges
            .map(edge => (
                <div className="col-3">
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            ));

        const listPartenaires = this.props.data.partenairesLogos.edges
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
                                <divPREMIUM
                                    dangerouslySetInnerHTML={{
                                        __html: this.props.data.sponsorsPage.childMarkdownRemark.html
                                    }}
                                />
                            </section>
                        </div>
                        {sponsorsOffers}
                        <div className="col-12">
                            <section className="main special">
                                <div className="container">
                                    <ul className="actions uniform">
                                        <li><a href="#" className="button special">Devenir sponsor</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <section id="sponsors-premium" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Sponsors premiums</h2>
                            </header>
                        </div>
                        {listSponsorsPremium}
                    </div>
                </section>
                <section id="sponsors-standard" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Sponsors standards</h2>
                            </header>
                        </div>
                        {listSponsorsStandard}
                    </div>
                </section>
                <section id="partenaires" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Partenaires</h2>
                            </header>
                        </div>
                        {listPartenaires}
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
                }
                html
            }
        }
        sponsorsPremiumLogos: allFile(filter: {extension: {regex: "/(png|jpe?g)/"}, relativePath: {regex: "/sponsors/premium/"}}) {
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
        sponsorsStandardLogos: allFile(filter: {extension: {regex: "/(png|jpe?g)/"}, relativePath: {regex: "/sponsors/standard/"}}) {
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
        partenairesLogos: allFile(filter: {extension: {regex: "/(png|jpe?g)/"}, relativePath: {regex: "/sponsors/partenaires/"}}) {
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
