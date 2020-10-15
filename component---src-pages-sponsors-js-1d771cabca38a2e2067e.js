(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    GxIa: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "pageQuery", function() {
          return f;
        });
      var r = t("q1tI"),
        n = t.n(r),
        o = t("9eSz"),
        s = t.n(o),
        l = t("Bl7J"),
        i = t("vOnD");
      var c = i.a.div.withConfig({
          displayName: "Card__CardWrap",
          componentId: "bdeyg0-0"
        })([
          "box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;height:100% !important;"
        ]),
        m = i.a.h1.withConfig({
          displayName: "Card__CardHeader",
          componentId: "bdeyg0-1"
        })(["font-weight:bold;text-align:center;line-height:20px !important;"]),
        p = i.a.i.withConfig({
          displayName: "Card__CardIcon",
          componentId: "bdeyg0-2"
        })(["color:", ";"], function(e) {
          return e.iconColor || "black";
        }),
        d = i.a.div.withConfig({
          displayName: "Card__CardContent",
          componentId: "bdeyg0-3"
        })(["padding:40px 1em 1em 1em;"]),
        u = (function(e) {
          var a, t;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (t = e),
            ((a = r).prototype = Object.create(t.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = t),
            (r.prototype.render = function() {
              return n.a.createElement(
                c,
                null,
                n.a.createElement(
                  "section",
                  { className: "main style2 special" },
                  n.a.createElement(m, null, this.props.title),
                  n.a.createElement(
                    m,
                    null,
                    n.a.createElement(p, {
                      iconColor: this.props.iconColor,
                      className: this.props.icon
                    })
                  )
                ),
                n.a.createElement(
                  d,
                  null,
                  n.a.createElement("div", {
                    dangerouslySetInnerHTML: { __html: this.props.content }
                  })
                )
              );
            }),
            r
          );
        })(n.a.Component);
      var h = (function(e) {
          var a, t;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (t = e),
            ((a = r).prototype = Object.create(t.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = t),
            (r.prototype.render = function() {
              var e = { marginTop: "50px", marginBottom: "50px" },
                a = this.props.data.sponsorsOffers.nodes.map(function(e) {
                  return n.a.createElement(
                    "div",
                    { className: "col-6" },
                    n.a.createElement(u, {
                      icon: e.frontmatter.icon,
                      iconColor: e.frontmatter.iconColor,
                      title: e.frontmatter.title,
                      content: e.html
                    })
                  );
                }),
                t = this.props.data.sponsorsProfessionalLogosDesktop.edges.map(
                  function(e) {
                    return n.a.createElement(
                      "div",
                      { className: "col-3 desktop-image" },
                      n.a.createElement(s.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                r = this.props.data.sponsorsProfessionalLogosMobile.edges.map(
                  function(a) {
                    return n.a.createElement(
                      "div",
                      { className: "col-3 mobile-image", style: e },
                      n.a.createElement(s.a, {
                        fluid: a.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                o = this.props.data.sponsorsAssociateLogosDesktop.edges.map(
                  function(e) {
                    return n.a.createElement(
                      "div",
                      { className: "col-3 desktop-image" },
                      n.a.createElement(s.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                i = this.props.data.sponsorsAssociateLogosMobile.edges.map(
                  function(a) {
                    return n.a.createElement(
                      "div",
                      { className: "col-3 mobile-image", style: e },
                      n.a.createElement(s.a, {
                        fluid: a.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                c = this.props.data.partenairesLogosDesktop.edges.map(function(
                  e
                ) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 desktop-image" },
                    n.a.createElement(s.a, {
                      fluid: e.node.childImageSharp.fluid
                    })
                  );
                }),
                m = this.props.data.partenairesLogosMobile.edges.map(function(
                  a
                ) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 mobile-image", style: e },
                    n.a.createElement(s.a, {
                      fluid: a.node.childImageSharp.fluid
                    })
                  );
                });
              return n.a.createElement(
                l.a,
                { displayHeader: "false" },
                n.a.createElement(
                  "section",
                  { id: "sponsor-offers", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "header",
                        { className: "major" },
                        n.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.title
                        )
                      ),
                      n.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: this.props.data.sponsorsPage
                            .childMarkdownRemark.html
                        }
                      })
                    ),
                    a,
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "section",
                        { className: "main special" },
                        n.a.createElement(
                          "div",
                          { className: "container" },
                          n.a.createElement(
                            "ul",
                            { className: "actions uniform" },
                            n.a.createElement(
                              "li",
                              null,
                              n.a.createElement(
                                "a",
                                {
                                  href: this.props.data.sponsorsPage
                                    .childMarkdownRemark.frontmatter
                                    .plaquetteLink,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  className: "button special"
                                },
                                "Devenir sponsor"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                n.a.createElement(
                  "section",
                  { id: "sponsors-professional", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "header",
                        { className: "major" },
                        n.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.titleOfferProfessional
                        )
                      )
                    ),
                    r,
                    t
                  )
                ),
                n.a.createElement(
                  "section",
                  { id: "sponsors-associate", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "header",
                        { className: "major" },
                        n.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.titleOfferAssociate
                        )
                      )
                    ),
                    i,
                    o
                  )
                ),
                n.a.createElement(
                  "section",
                  { id: "partenaires", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "header",
                        { className: "major" },
                        n.a.createElement("h2", null, "Partenaires")
                      ),
                      n.a.createElement(
                        "p",
                        null,
                        this.props.data.sponsorsPage.childMarkdownRemark
                          .frontmatter.partnerMessage
                      )
                    ),
                    m,
                    c
                  )
                )
              );
            }),
            r
          );
        })(n.a.Component),
        f = ((a.default = h), "2220543813");
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-1d771cabca38a2e2067e.js.map
