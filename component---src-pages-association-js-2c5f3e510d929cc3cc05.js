(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "8RCB": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return c;
        });
      var r = a("q1tI"),
        n = a.n(r),
        o = a("Bl7J");
      var s = (function(e) {
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
                        this.props.data.associationPage.childMarkdownRemark
                          .frontmatter.title
                      )
                    ),
                    n.a.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: this.props.data.associationPage
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
      t.default = s;
      var c = "189805198";
    }
  }
]);
//# sourceMappingURL=component---src-pages-association-js-2c5f3e510d929cc3cc05.js.map
