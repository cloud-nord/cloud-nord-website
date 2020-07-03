import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";

import pic_conference from "../assets/images/conference.jpg";
import pic_quickie from "../assets/images/quickie.jpg";
import pic_workshop from "../assets/images/workshop.jpg";

class Homepage extends React.Component {
  render() {
    const siteTitle = "Cloud Nord";

    return (
      <StaticQuery
        query={graphql`
          query IndexQuery {
            markdownRemark(fileAbsolutePath: { regex: "/description/" }) {
              frontmatter {
                title
                cadres_title
                cadre1_title
                cadre1_text
                cadre2_title
                cadre2_text
                cadre3_title
                cadre3_text
              }
              html
            }
          }
        `}
        render={data => (
          <Layout>
            <Helmet title={siteTitle} />

            <section id="description" className="main style1">
              <div className="grid-wrapper">
                <div className="col-12">
                  <header className="major">
                    <h2>{data.markdownRemark.frontmatter.title}</h2>
                  </header>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.markdownRemark.html
                    }}
                  ></div>
                </div>
              </div>
            </section>

            <section id="format" className="main style2 special">
              <div className="grid-wrapper">
                <div className="col-12">
                  <header className="major">
                    <h2>{data.markdownRemark.frontmatter.cadres_title}</h2>
                  </header>
                </div>

                <div className="col-4">
                  <span className="image fit">
                    <img src={pic_conference} alt="Conference" />
                  </span>
                  <h3>{data.markdownRemark.frontmatter.cadre1_title}</h3>
                  <p>{data.markdownRemark.frontmatter.cadre1_text}</p>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic_quickie} alt="Quickie" />
                  </span>
                  <h3>{data.markdownRemark.frontmatter.cadre2_title}</h3>
                  <p>{data.markdownRemark.frontmatter.cadre2_text}</p>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic_workshop} alt="Workshop" />
                  </span>
                  <h3>{data.markdownRemark.frontmatter.cadre3_title}</h3>
                  <p>{data.markdownRemark.frontmatter.cadre3_text}</p>
                </div>
              </div>
            </section>

            <section id="contact" className="main style2 special">
              <div className="container">
                <header className="major">
                  <h2>Envie de rejoindre le projet ?</h2>
                </header>
                <p>Une idée, un partenariat, un sponsoring... Ecrivez-nous !</p>
                <ul className="actions uniform">
                  <li>
                    <a
                      href="mailto:cloudnord2020@gmail.com"
                      className="button special"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/cloud-nord/"
                      className="button"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </Layout>
        )}
      />
    );
  }
}

export default Homepage;
