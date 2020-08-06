(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    mIqi: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return s;
        });
      var r = a("q1tI"),
        n = a.n(r),
        o = a("Bl7J");
      var c = (function(e) {
        var t, a;
        function r() {
          return e.apply(this, arguments) || this;
        }
        return (
          (a = e),
          ((t = r).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (r.prototype.render = function() {
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
                    { id: "association", className: "main style1" },
                    n.a.createElement(
                      "header",
                      { className: "major" },
                      n.a.createElement(
                        "h2",
                        null,
                        this.props.data.codeOfConductPage.childMarkdownRemark
                          .frontmatter.title
                      )
                    ),
                    n.a.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: this.props.data.codeOfConductPage
                          .childMarkdownRemark.html
                      }
                    })
                  )
                )
              )
            );
          }),
          r
        );
      })(n.a.Component);
      t.default = c;
      var s = "3188479536";
    }
  }
]);
//# sourceMappingURL=component---src-pages-code-of-conduct-js-043bd76c3ca6b7bec942.js.map
