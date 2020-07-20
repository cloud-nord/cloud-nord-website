(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    GxIa: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "pageQuery", function() {
          return u;
        });
      var a = r("q1tI"),
        n = r.n(a),
        o = r("Bl7J"),
        i = r("vOnD");
      var c = i.a.div.withConfig({
          displayName: "Card__CardWrap",
          componentId: "bdeyg0-0"
        })([
          "box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;padding:0.2em 1em 0em 1em;"
        ]),
        p = i.a.h1.withConfig({
          displayName: "Card__CardHeader",
          componentId: "bdeyg0-1"
        })(["font-weight:bold;text-align:center;"]),
        l = i.a.i.withConfig({
          displayName: "Card__CardIcon",
          componentId: "bdeyg0-2"
        })(["color:", ";"], function(e) {
          return e.iconColor || "black";
        }),
        s = i.a.div.withConfig({
          displayName: "Card__CardContent",
          componentId: "bdeyg0-3"
        })([""]),
        d = (function(e) {
          var t, r;
          function a() {
            return e.apply(this, arguments) || this;
          }
          return (
            (r = e),
            ((t = a).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            (a.prototype.render = function() {
              return n.a.createElement(
                c,
                null,
                n.a.createElement(
                  p,
                  null,
                  n.a.createElement(l, {
                    iconColor: this.props.iconColor,
                    className: this.props.icon
                  }),
                  " ",
                  this.props.title
                ),
                n.a.createElement(
                  s,
                  null,
                  n.a.createElement("div", {
                    dangerouslySetInnerHTML: { __html: this.props.content }
                  })
                )
              );
            }),
            a
          );
        })(n.a.Component);
      var m = (function(e) {
          var t, r;
          function a() {
            return e.apply(this, arguments) || this;
          }
          return (
            (r = e),
            ((t = a).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            (a.prototype.render = function() {
              var e = this.props.data.sponsorsOffers.nodes.map(function(e) {
                return n.a.createElement(
                  "div",
                  { className: "col-6" },
                  n.a.createElement(d, {
                    icon: e.frontmatter.icon,
                    iconColor: e.frontmatter.iconColor,
                    title: e.frontmatter.title,
                    content: e.html
                  })
                );
              });
              return n.a.createElement(
                o.a,
                { displayHeader: "false" },
                n.a.createElement(
                  "div",
                  { className: "grid-wrapper" },
                  n.a.createElement(
                    "div",
                    { className: "col-12" },
                    n.a.createElement(
                      "section",
                      { className: "main style1" },
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
                    )
                  ),
                  e
                )
              );
            }),
            a
          );
        })(n.a.Component),
        u = ((t.default = m), "749414036");
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-8aa1321931a4275e887a.js.map
