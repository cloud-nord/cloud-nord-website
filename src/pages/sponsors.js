import React from "react";
import {graphql} from "gatsby";
import Img from "gatsby-image";
import { useMedia } from 'react-media';
import Layout from "../components/layout";
import Card from "../components/Card";

class Sponsors extends React.Component {
    render() {
        const windowWidthMobile = 980

        const mobileImageStyle = {
            marginTop: '50px',
            marginBottom: '50px'
        }
        const sponsorsOffers = this.props.data.sponsorsOffers.nodes.map(node => (
            <div className="col-6">
                <Card
                    icon={node.frontmatter.icon}
                    iconColor={node.frontmatter.iconColor}
                    title={node.frontmatter.title}
                    content={node.html}
                />
            </div>
        ));

        const listSponsorsProfessionalDesktop = this.props.data.sponsorsProfessionalLogosDesktop.edges.map(
            edge => (
                <div className="col-3">
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            )
        );

        const listSponsorsProfessionalMobile = this.props.data.sponsorsProfessionalLogosMobile.edges.map(
            edge => (
                <div className="col-3" style={mobileImageStyle}>
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            )
        );

        const listSponsorsAssociateDesktop = this.props.data.sponsorsAssociateLogosDesktop.edges.map(
            edge => (
                <div className="col-3">
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            )
        );

        const listSponsorsAssociateMobile = this.props.data.sponsorsAssociateLogosMobile.edges.map(
            edge => (
                <div className="col-3" style={mobileImageStyle}>
                    <Img fluid={edge.node.childImageSharp.fluid}/>
                </div>
            )
        );

        const listPartenairesDesktop = this.props.data.partenairesLogosDesktop.edges.map(edge => (
            <div className="col-3">
                <Img fluid={edge.node.childImageSharp.fluid}/>
            </div>
        ));

        const listPartenairesMobile = this.props.data.partenairesLogosMobile.edges.map(edge => (
            <div className="col-3" style={mobileImageStyle}>
                <Img fluid={edge.node.childImageSharp.fluid}/>
            </div>
        ));

        let listSponsorsProfessional
        let listSponsorsAssociate
        let listPartenaires

        if (useMedia({ query: "(max-width: 980px)" })) {
            // display mobile
            listSponsorsProfessional = listSponsorsProfessionalMobile
            listSponsorsAssociate = listSponsorsAssociateMobile
            listPartenaires = listPartenairesMobile
        } else {
            // display desktop
            listSponsorsProfessional = listSponsorsProfessionalDesktop
            listSponsorsAssociate = listSponsorsAssociateDesktop
            listPartenaires = listPartenairesDesktop
        }

        return (
            <Layout displayHeader="false">
                <section id="sponsor-offers" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>
                                    {
                                        this.props.data.sponsorsPage.childMarkdownRemark.frontmatter
                                            .title
                                    }
                                </h2>
                            </header>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.props.data.sponsorsPage.childMarkdownRemark.html
                                }}
                            />
                        </div>
                        {sponsorsOffers}
                        <div className="col-12">
                            <section className="main special">
                                <div className="container">
                                    <ul className="actions uniform">
                                        <li>
                                            <a
                                                href={
                                                    this.props.data.sponsorsPage.childMarkdownRemark
                                                        .frontmatter.plaquetteLink
                                                }
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="button special"
                                            >
                                                Devenir sponsor
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <section id="sponsors-professional" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>
                                    {
                                        this.props.data.sponsorsPage.childMarkdownRemark.frontmatter
                                            .titleOfferProfessional
                                    }
                                </h2>
                            </header>
                        </div>
                        {listSponsorsProfessional}
                    </div>
                </section>
                <section id="sponsors-associate" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>
                                    {
                                        this.props.data.sponsorsPage.childMarkdownRemark.frontmatter
                                            .titleOfferAssociate
                                    }
                                </h2>
                            </header>
                        </div>
                        {listSponsorsAssociate}
                    </div>
                </section>
                <section id="partenaires" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Partenaires</h2>
                            </header>
                            <p>
                                {
                                    this.props.data.sponsorsPage.childMarkdownRemark.frontmatter
                                        .partnerMessage
                                }
                            </p>
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
        sponsorsOffers: allMarkdownRemark(
            sort: { fields: frontmatter___rank, order: ASC }
            filter: { fileAbsolutePath: { regex: "/(sponsors-offer)/.*\\\\.md$/" } }
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
        sponsorsPage: file(
            relativePath: { eq: "sponsors.md" }
            sourceInstanceName: { eq: "contents" }
        ) {
            childMarkdownRemark {
                frontmatter {
                    title
                    titleOfferProfessional
                    titleOfferAssociate
                    partnerMessage
                    plaquetteLink
                }
                html
            }
        }
        sponsorsProfessionalLogosDesktop: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/professional/desktop/" }
            }
            sort: {fields: childImageSharp___resolutions___originalName, order: ASC}
        ) {
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
        sponsorsProfessionalLogosMobile: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/professional/mobile/" }
            }
            sort: {fields: childImageSharp___resolutions___originalName, order: ASC}
        ) {
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
        sponsorsAssociateLogosDesktop: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/associate/desktop/" }
            }
        ) {
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
        sponsorsAssociateLogosMobile: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/associate/mobile/" }
            }
        ) {
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
        partenairesLogosDesktop: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/partenaires/desktop/" }
            }
            sort: {fields: childImageSharp___resolutions___originalName, order: ASC}
        ) {
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
        partenairesLogosMobile: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/partenaires/mobile/" }
            }
            sort: {fields: childImageSharp___resolutions___originalName, order: ASC}
        ) {
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
