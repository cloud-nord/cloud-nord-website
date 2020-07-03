import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";

class Team extends React.Component {
    render() {
        return (
            <Layout displayHeader="false">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <section id="team" className="main style1 special">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.props.data.teamPage.childMarkdownRemark.html
                                }}
                            />
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Team;

export const pageQuery = graphql`
    query TeamQuery {
        teamPage: file(relativePath: {eq: "team.md"}, sourceInstanceName: {eq: "contents"}) {
            childMarkdownRemark {
                html
            }
        }
    }
`;
