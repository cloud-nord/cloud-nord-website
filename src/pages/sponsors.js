import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Card from "../components/Card";

class Sponsors extends React.Component {
  render() {
    const mobileImageStyle = {
      marginTop: "50px",
      marginBottom: "50px"
    };

    const sponsorsProfessionalLinks = [
      { linkTo: "https://www.microsoft.com/fr-fr/" },
      { linkTo: "https://aws.amazon.com/fr/" },
      { linkTo: "https://www.claranet.fr" }
    ];

    const sponsorsAssociateLinks = [
      { linkTo: "https://www.axa.fr/" },
      { linkTo: "https://www.adeo.com" },
      { linkTo: "https://fr.ippon.tech/" },
      { linkTo: "https://www.exoscale.com/" },
      { linkTo: "https://www.nutanix.com/fr" },
    ];

    const partenairesLinks = [
      { linkTo: "https://welovedevs.com/fr/" },
      {
        linkTo:
          "https://www.meetup.com/fr-FR/Cloud-Native-Computing-Lille-Meetup/"
      },
      { linkTo: "https://www.meetup.com/fr-FR/DevOps-Lille/" },
      {
        linkTo:
          "https://www.meetup.com/fr-FR/Lille-AWS-Amazon-Web-Services-User-Group/"
      },
      { linkTo: "http://www.lillesagency.com/" }
    ];

    const listSponsorsProfessionalDesktop = this.props.data.sponsorsProfessionalLogosDesktop.edges.map(
      (o, i) => Object.assign({}, o, sponsorsProfessionalLinks[i])
    );

    const listSponsorsProfessionalMobile = this.props.data.sponsorsProfessionalLogosMobile.edges.map(
      (o, i) => Object.assign({}, o, sponsorsProfessionalLinks[i])
    );

    const listSponsorsAssociateDesktop = this.props.data.sponsorsAssociateLogosDesktop.edges.map(
      (o, i) => Object.assign({}, o, sponsorsAssociateLinks[i])
    );

    const listSponsorsAssociateMobile = this.props.data.sponsorsAssociateLogosMobile.edges.map(
      (o, i) => Object.assign({}, o, sponsorsAssociateLinks[i])
    );

    const listPartenairesDesktop = this.props.data.partenairesLogosDesktop.edges.map(
      (o, i) => Object.assign({}, o, partenairesLinks[i])
    );

    const listPartenairesMobile = this.props.data.partenairesLogosMobile.edges.map(
      (o, i) => Object.assign({}, o, partenairesLinks[i])
    );

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

    const listSponsorsProfessionalDesktopToDisplay = listSponsorsProfessionalDesktop.map(
      edge => (
        <div className="col-3 desktop-image">
          <a href={edge.linkTo}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </a>
        </div>
      )
    );

    const listSponsorsProfessionalMobileToDisplay = listSponsorsProfessionalMobile.map(
      edge => (
        <div className="col-3 mobile-image" style={mobileImageStyle}>
          <a href={edge.linkTo}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </a>
        </div>
      )
    );

    const listSponsorsAssociateDesktopToDisplay = listSponsorsAssociateDesktop.map(
      edge => (
        <div className="col-3 desktop-image">
          <a href={edge.linkTo}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </a>
        </div>
      )
    );

    const listSponsorsAssociateMobileToDisplay = listSponsorsAssociateMobile.map(
      edge => (
        <div className="col-3 mobile-image" style={mobileImageStyle}>
          <a href={edge.linkTo}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </a>
        </div>
      )
    );

    const listPartenairesDesktopToDisplay = listPartenairesDesktop.map(edge => (
      <div className="col-3 desktop-image">
        <a href={edge.linkTo}>
          <Img fluid={edge.node.childImageSharp.fluid} />
        </a>
      </div>
    ));

    const listPartenairesMobileToDisplay = listPartenairesMobile.map(edge => (
      <div className="col-3 mobile-image" style={mobileImageStyle}>
        <a href={edge.linkTo}>
          <Img fluid={edge.node.childImageSharp.fluid} />
        </a>
      </div>
    ));

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
            {listSponsorsProfessionalMobileToDisplay}
            {listSponsorsProfessionalDesktopToDisplay}
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
            {listSponsorsAssociateMobileToDisplay}
            {listSponsorsAssociateDesktopToDisplay}
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
            {listPartenairesMobileToDisplay}
            {listPartenairesDesktopToDisplay}
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
      sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
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
      sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
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
      sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
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
      sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
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
      sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
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
      sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
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
