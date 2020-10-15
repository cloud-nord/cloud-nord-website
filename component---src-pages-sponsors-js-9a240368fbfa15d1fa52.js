(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    GxIa: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "pageQuery", function() {
          return h;
        });
      t("91GP");
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
      var f = (function(e) {
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
                a = [
                  { linkTo: "https://azure.microsoft.com/fr-fr/" },
                  { linkTo: "https://www.claranet.fr" }
                ],
                t = [
                  { linkTo: "https://www.axa.fr/" },
                  { linkTo: "https://fr.ippon.tech/" }
                ],
                r = [
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
                ],
                o = this.props.data.sponsorsProfessionalLogosDesktop.edges.map(
                  function(e, t) {
                    return Object.assign({}, e, a[t]);
                  }
                ),
                i = this.props.data.sponsorsProfessionalLogosMobile.edges.map(
                  function(e, t) {
                    return Object.assign({}, e, a[t]);
                  }
                ),
                c = this.props.data.sponsorsAssociateLogosDesktop.edges.map(
                  function(e, a) {
                    return Object.assign({}, e, t[a]);
                  }
                ),
                m = this.props.data.sponsorsAssociateLogosMobile.edges.map(
                  function(e, a) {
                    return Object.assign({}, e, t[a]);
                  }
                ),
                p = this.props.data.partenairesLogosDesktop.edges.map(function(
                  e,
                  a
                ) {
                  return Object.assign({}, e, r[a]);
                }),
                d = this.props.data.partenairesLogosMobile.edges.map(function(
                  e,
                  a
                ) {
                  return Object.assign({}, e, r[a]);
                }),
                f = this.props.data.sponsorsOffers.nodes.map(function(e) {
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
                h = o.map(function(e) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 desktop-image" },
                    n.a.createElement(
                      "a",
                      { href: e.linkTo },
                      n.a.createElement(s.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    )
                  );
                }),
                g = i.map(function(a) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 mobile-image", style: e },
                    n.a.createElement(
                      "a",
                      { href: a.linkTo },
                      n.a.createElement(s.a, {
                        fluid: a.node.childImageSharp.fluid
                      })
                    )
                  );
                }),
                E = c.map(function(e) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 desktop-image" },
                    n.a.createElement(
                      "a",
                      { href: e.linkTo },
                      n.a.createElement(s.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    )
                  );
                }),
                w = m.map(function(a) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 mobile-image", style: e },
                    n.a.createElement(
                      "a",
                      { href: a.linkTo },
                      n.a.createElement(s.a, {
                        fluid: a.node.childImageSharp.fluid
                      })
                    )
                  );
                }),
                k = p.map(function(e) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 desktop-image" },
                    n.a.createElement(
                      "a",
                      { href: e.linkTo },
                      n.a.createElement(s.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    )
                  );
                }),
                N = d.map(function(a) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3 mobile-image", style: e },
                    n.a.createElement(
                      "a",
                      { href: a.linkTo },
                      n.a.createElement(s.a, {
                        fluid: a.node.childImageSharp.fluid
                      })
                    )
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
                    f,
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
                    g,
                    h
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
                    w,
                    E
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
                    N,
                    k
                  )
                )
              );
            }),
            r
          );
        })(n.a.Component),
        h = ((a.default = f), "2220543813");
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-9a240368fbfa15d1fa52.js.map
