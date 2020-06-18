import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                query {
                    markdownRemark(fileAbsolutePath: {regex: "/header/"}) {
                        frontmatter {
                          h_date
                          h_catchphrase
                          h_button
                          h_title
                        }
                      }
                  }
                `}
                render={(data) => (
                    <section id="header">
                        <div className="inner">
                            <span className="icon major fa-cloud"></span>
                            <h1><strong>{data.markdownRemark.frontmatter.h_title}</strong><br/>
                                {data.markdownRemark.frontmatter.h_catchphrase}</h1>
                            <p>{data.markdownRemark.frontmatter.h_date}</p>
                            <ul className="actions">
                                <li><a href="#one" className="button scrolly">{data.markdownRemark.frontmatter.h_button}</a></li>
                            </ul>
                        </div>
                    </section>
                )}
            />
        );
    }
}

export default Header