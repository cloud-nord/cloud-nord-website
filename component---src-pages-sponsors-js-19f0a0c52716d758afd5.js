(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    GxIa: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "pageQuery", function() {
          return v;
        });
      var n = r("q1tI"),
        a = r.n(n),
        o = r("9eSz"),
        i = r.n(o),
        c = r("s/Ur"),
        s = r("Bl7J"),
        u = r("vOnD");
      var l = u.a.div.withConfig({
          displayName: "Card__CardWrap",
          componentId: "bdeyg0-0"
        })([
          "box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;height:100% !important;"
        ]),
        f = u.a.h1.withConfig({
          displayName: "Card__CardHeader",
          componentId: "bdeyg0-1"
        })(["font-weight:bold;text-align:center;line-height:20px !important;"]),
        p = u.a.i.withConfig({
          displayName: "Card__CardIcon",
          componentId: "bdeyg0-2"
        })(["color:", ";"], function(e) {
          return e.iconColor || "black";
        }),
        d = u.a.div.withConfig({
          displayName: "Card__CardContent",
          componentId: "bdeyg0-3"
        })(["padding:40px 1em 1em 1em;"]),
        m = (function(e) {
          var t, r;
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            (n.prototype.render = function() {
              return a.a.createElement(
                l,
                null,
                a.a.createElement(
                  "section",
                  { className: "main style2 special" },
                  a.a.createElement(f, null, this.props.title),
                  a.a.createElement(
                    f,
                    null,
                    a.a.createElement(p, {
                      iconColor: this.props.iconColor,
                      className: this.props.icon
                    })
                  )
                ),
                a.a.createElement(
                  d,
                  null,
                  a.a.createElement("div", {
                    dangerouslySetInnerHTML: { __html: this.props.content }
                  })
                )
              );
            }),
            n
          );
        })(a.a.Component);
      var y = (function(e) {
          var t, r;
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            (r = e),
            ((t = n).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            (n.prototype.render = function() {
              var e = Object(c.useMediaQuery)({ query: "(max-width: 980px)" }),
                t = { marginTop: "50px", marginBottom: "50px" },
                r = this.props.data.sponsorsOffers.nodes.map(function(e) {
                  return a.a.createElement(
                    "div",
                    { className: "col-6" },
                    a.a.createElement(m, {
                      icon: e.frontmatter.icon,
                      iconColor: e.frontmatter.iconColor,
                      title: e.frontmatter.title,
                      content: e.html
                    })
                  );
                }),
                n = this.props.data.sponsorsProfessionalLogosDesktop.edges.map(
                  function(e) {
                    return a.a.createElement(
                      "div",
                      { className: "col-3" },
                      a.a.createElement(i.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                o = this.props.data.sponsorsProfessionalLogosMobile.edges.map(
                  function(e) {
                    return a.a.createElement(
                      "div",
                      { className: "col-3", style: t },
                      a.a.createElement(i.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                u = this.props.data.sponsorsAssociateLogosDesktop.edges.map(
                  function(e) {
                    return a.a.createElement(
                      "div",
                      { className: "col-3" },
                      a.a.createElement(i.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                l = this.props.data.sponsorsAssociateLogosMobile.edges.map(
                  function(e) {
                    return a.a.createElement(
                      "div",
                      { className: "col-3", style: t },
                      a.a.createElement(i.a, {
                        fluid: e.node.childImageSharp.fluid
                      })
                    );
                  }
                ),
                f = this.props.data.partenairesLogosDesktop.edges.map(function(
                  e
                ) {
                  return a.a.createElement(
                    "div",
                    { className: "col-3" },
                    a.a.createElement(i.a, {
                      fluid: e.node.childImageSharp.fluid
                    })
                  );
                }),
                p = this.props.data.partenairesLogosMobile.edges.map(function(
                  e
                ) {
                  return a.a.createElement(
                    "div",
                    { className: "col-3", style: t },
                    a.a.createElement(i.a, {
                      fluid: e.node.childImageSharp.fluid
                    })
                  );
                });
              return a.a.createElement(
                s.a,
                { displayHeader: "false" },
                a.a.createElement(
                  "section",
                  { id: "sponsor-offers", className: "main style1" },
                  a.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    a.a.createElement(
                      "div",
                      { className: "col-12" },
                      a.a.createElement(
                        "header",
                        { className: "major" },
                        a.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.title
                        )
                      ),
                      a.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: this.props.data.sponsorsPage
                            .childMarkdownRemark.html
                        }
                      })
                    ),
                    r,
                    a.a.createElement(
                      "div",
                      { className: "col-12" },
                      a.a.createElement(
                        "section",
                        { className: "main special" },
                        a.a.createElement(
                          "div",
                          { className: "container" },
                          a.a.createElement(
                            "ul",
                            { className: "actions uniform" },
                            a.a.createElement(
                              "li",
                              null,
                              a.a.createElement(
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
                a.a.createElement(
                  "section",
                  { id: "sponsors-professional", className: "main style1" },
                  a.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    a.a.createElement(
                      "div",
                      { className: "col-12" },
                      a.a.createElement(
                        "header",
                        { className: "major" },
                        a.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.titleOfferProfessional
                        )
                      )
                    ),
                    e ? o : n
                  )
                ),
                a.a.createElement(
                  "section",
                  { id: "sponsors-associate", className: "main style1" },
                  a.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    a.a.createElement(
                      "div",
                      { className: "col-12" },
                      a.a.createElement(
                        "header",
                        { className: "major" },
                        a.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.titleOfferAssociate
                        )
                      )
                    ),
                    e ? l : u
                  )
                ),
                a.a.createElement(
                  "section",
                  { id: "partenaires", className: "main style1" },
                  a.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    a.a.createElement(
                      "div",
                      { className: "col-12" },
                      a.a.createElement(
                        "header",
                        { className: "major" },
                        a.a.createElement("h2", null, "Partenaires")
                      ),
                      a.a.createElement(
                        "p",
                        null,
                        this.props.data.sponsorsPage.childMarkdownRemark
                          .frontmatter.partnerMessage
                      )
                    ),
                    e ? p : f
                  )
                )
              );
            }),
            n
          );
        })(a.a.Component),
        v = ((t.default = y), "2220543813");
    },
    WLL4: function(e, t, r) {
      var n = r("XKFU");
      n(n.S + n.F * !r("nh4g"), "Object", { defineProperties: r("FJW5") });
    },
    jm62: function(e, t, r) {
      var n = r("XKFU"),
        a = r("mQtv"),
        o = r("aCFj"),
        i = r("EemH"),
        c = r("8a7r");
      n(n.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
          for (
            var t, r, n = o(e), s = i.f, u = a(n), l = {}, f = 0;
            u.length > f;

          )
            void 0 !== (r = s(n, (t = u[f++]))) && c(l, t, r);
          return l;
        }
      });
    },
    mQtv: function(e, t, r) {
      var n = r("kJMx"),
        a = r("JiEa"),
        o = r("y3w9"),
        i = r("dyZX").Reflect;
      e.exports =
        (i && i.ownKeys) ||
        function(e) {
          var t = n.f(o(e)),
            r = a.f;
          return r ? t.concat(r(e)) : t;
        };
    },
    "s/Ur": function(e, t, r) {
      var n;
      r("V+eJ"),
        r("91GP"),
        r("Oyvg"),
        r("2Spj"),
        r("WLL4"),
        r("jm62"),
        r("0l/t"),
        r("xfY5"),
        r("Tze0"),
        r("KKXr"),
        r("bWfx"),
        r("dZ+Y"),
        r("SRfc"),
        r("8+KV"),
        r("pIFo"),
        r("DNiP"),
        r("yt8O"),
        r("RW0V"),
        r("LK8F"),
        r("rGqo"),
        r("rE2o"),
        r("ioFf"),
        r("XfO3"),
        r("HEwt"),
        r("f3/d"),
        r("a1Th"),
        r("h7Nl"),
        r("Btvt"),
        r("HAE/"),
        "undefined" != typeof self && self,
        (e.exports =
          ((n = r("q1tI")),
          (function(e) {
            function t(n) {
              if (r[n]) return r[n].exports;
              var a = (r[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports
              );
            }
            var r = {};
            return (
              (t.m = e),
              (t.c = r),
              (t.d = function(e, r, n) {
                t.o(e, r) ||
                  Object.defineProperty(e, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                  });
              }),
              (t.n = function(e) {
                var r =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return t.d(r, "a", r), r;
              }),
              (t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (t.p = ""),
              t((t.s = 7))
            );
          })([
            function(e, t, r) {
              "use strict";
              function n(e, t) {
                return (
                  (function(e) {
                    if (Array.isArray(e)) return e;
                  })(e) ||
                  (function(e, t) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    ) {
                      var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                      try {
                        for (
                          var i, c = e[Symbol.iterator]();
                          !(n = (i = c.next()).done) &&
                          (r.push(i.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (s) {
                        (a = !0), (o = s);
                      } finally {
                        try {
                          n || null == c.return || c.return();
                        } finally {
                          if (a) throw o;
                        }
                      }
                      return r;
                    }
                  })(e, t) ||
                  (function(e, t) {
                    if (e) {
                      if ("string" == typeof e) return a(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? a(e, t)
                          : void 0
                      );
                    }
                  })(e, t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
              }
              var o = r(1),
                i = r.n(o),
                c = r(8),
                s = r.n(c),
                u = r(2),
                l = r(10),
                f = r.n(l),
                p = r(3),
                d = r(6),
                m = function(e) {
                  if (!e) return null;
                  var t = Object.keys(e);
                  return 0 === t.length
                    ? null
                    : t.reduce(function(t, r) {
                        return (t[Object(u.a)(r)] = e[r]), t;
                      }, {});
                },
                y = function() {
                  var e = i.a.useRef(!1);
                  return (
                    i.a.useEffect(function() {
                      e.current = !0;
                    }, []),
                    e.current
                  );
                },
                v = function(e) {
                  var t = function() {
                      return (function(e) {
                        return e.query || Object(p.a)(e);
                      })(e);
                    },
                    r = n(i.a.useState(t), 2),
                    a = r[0],
                    o = r[1];
                  return (
                    i.a.useEffect(
                      function() {
                        var e = t();
                        a !== e && o(e);
                      },
                      [e]
                    ),
                    a
                  );
                };
              t.a = function(e, t, r) {
                var a = (function(e) {
                    var t = i.a.useContext(d.a),
                      r = function() {
                        return m(e) || m(t);
                      },
                      a = n(i.a.useState(r), 2),
                      o = a[0],
                      c = a[1];
                    return (
                      i.a.useEffect(
                        function() {
                          var e = r();
                          f()(o, e) || c(e);
                        },
                        [e, t]
                      ),
                      o
                    );
                  })(t),
                  o = v(e);
                if (!o) throw new Error("Invalid or missing MediaQuery!");
                var c = (function(e) {
                    var t = n(i.a.useState(e.matches), 2),
                      r = t[0],
                      a = t[1];
                    return (
                      i.a.useEffect(
                        function() {
                          var t = function() {
                            a(e.matches);
                          };
                          return (
                            e.addListener(t),
                            t(),
                            function() {
                              e.removeListener(t);
                            }
                          );
                        },
                        [e]
                      ),
                      r
                    );
                  })(
                    (function(e, t) {
                      var r = function() {
                          return s()(e, t || {}, !!t);
                        },
                        a = n(i.a.useState(r), 2),
                        o = a[0],
                        c = a[1],
                        u = y();
                      return (
                        i.a.useEffect(
                          function() {
                            return (
                              u && c(r()),
                              function() {
                                o.dispose();
                              }
                            );
                          },
                          [e, t]
                        ),
                        o
                      );
                    })(o, a)
                  ),
                  u = y();
                return (
                  i.a.useEffect(
                    function() {
                      u && r && r(c);
                    },
                    [c]
                  ),
                  c
                );
              };
            },
            function(e, t) {
              e.exports = n;
            },
            function(e, t, r) {
              "use strict";
              function n(e) {
                return "-" + e.toLowerCase();
              }
              var a = /[A-Z]/g,
                o = /^ms-/,
                i = {};
              t.a = function(e) {
                if (i.hasOwnProperty(e)) return i[e];
                var t = e.replace(a, n);
                return (i[e] = o.test(t) ? "-" + t : t);
              };
            },
            function(e, t, r) {
              "use strict";
              var n = r(2),
                a = r(11);
              t.a = function(e) {
                var t = [];
                return (
                  Object.keys(a.a.all).forEach(function(r) {
                    var a = e[r];
                    null != a &&
                      t.push(
                        (function(e, t) {
                          var r = Object(n.a)(e);
                          return (
                            "number" == typeof t && (t = "".concat(t, "px")),
                            !0 === t
                              ? r
                              : !1 === t
                              ? "not ".concat(r)
                              : "(".concat(r, ": ").concat(t, ")")
                          );
                        })(r, a)
                      );
                  }),
                  t.join(" and ")
                );
              };
            },
            function(e, t, r) {
              "use strict";
              e.exports = r(13);
            },
            function(e, t, r) {
              "use strict";
              e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            },
            function(e, t, r) {
              "use strict";
              var n = r(1),
                a = r.n(n).a.createContext();
              t.a = a;
            },
            function(e, t, r) {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 });
              var n = r(0),
                a = r(17),
                o = r(3),
                i = r(6);
              r.d(t, "default", function() {
                return a.a;
              }),
                r.d(t, "useMediaQuery", function() {
                  return n.a;
                }),
                r.d(t, "toQuery", function() {
                  return o.a;
                }),
                r.d(t, "Context", function() {
                  return i.a;
                });
            },
            function(e, t, r) {
              "use strict";
              function n(e, t, r) {
                function n(e) {
                  (i.matches = e.matches), (i.media = e.media);
                }
                var i = this;
                if (o && !r) {
                  var c = o.call(window, e);
                  (this.matches = c.matches),
                    (this.media = c.media),
                    c.addListener(n);
                } else (this.matches = a(e, t)), (this.media = e);
                (this.addListener = function(e) {
                  c && c.addListener(e);
                }),
                  (this.removeListener = function(e) {
                    c && c.removeListener(e);
                  }),
                  (this.dispose = function() {
                    c && c.removeListener(n);
                  });
              }
              var a = r(9).match,
                o = "undefined" != typeof window ? window.matchMedia : null;
              e.exports = function(e, t, r) {
                return new n(e, t, r);
              };
            },
            function(e, t, r) {
              "use strict";
              function n(e) {
                return e.split(",").map(function(e) {
                  var t = (e = e.trim()).match(c),
                    r = t[1],
                    n = t[2],
                    a = t[3] || "",
                    o = {};
                  return (
                    (o.inverse = !!r && "not" === r.toLowerCase()),
                    (o.type = n ? n.toLowerCase() : "all"),
                    (a = a.match(/\([^\)]+\)/g) || []),
                    (o.expressions = a.map(function(e) {
                      var t = e.match(s),
                        r = t[1].toLowerCase().match(u);
                      return { modifier: r[1], feature: r[2], value: t[2] };
                    })),
                    o
                  );
                });
              }
              function a(e) {
                var t,
                  r = Number(e);
                return (
                  r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
                );
              }
              function o(e) {
                var t = parseFloat(e);
                switch (String(e).match(f)[1]) {
                  case "dpcm":
                    return t / 2.54;
                  case "dppx":
                    return 96 * t;
                  default:
                    return t;
                }
              }
              function i(e) {
                var t = parseFloat(e);
                switch (String(e).match(l)[1]) {
                  case "em":
                  case "rem":
                    return 16 * t;
                  case "cm":
                    return (96 * t) / 2.54;
                  case "mm":
                    return (96 * t) / 2.54 / 10;
                  case "in":
                    return 96 * t;
                  case "pt":
                    return 72 * t;
                  case "pc":
                    return (72 * t) / 12;
                  default:
                    return t;
                }
              }
              (t.match = function(e, t) {
                return n(e).some(function(e) {
                  var r = e.inverse,
                    n = "all" === e.type || t.type === e.type;
                  if ((n && r) || (!n && !r)) return !1;
                  var c = e.expressions.every(function(e) {
                    var r = e.feature,
                      n = e.modifier,
                      c = e.value,
                      s = t[r];
                    if (!s) return !1;
                    switch (r) {
                      case "orientation":
                      case "scan":
                        return s.toLowerCase() === c.toLowerCase();
                      case "width":
                      case "height":
                      case "device-width":
                      case "device-height":
                        (c = i(c)), (s = i(s));
                        break;
                      case "resolution":
                        (c = o(c)), (s = o(s));
                        break;
                      case "aspect-ratio":
                      case "device-aspect-ratio":
                      case "device-pixel-ratio":
                        (c = a(c)), (s = a(s));
                        break;
                      case "grid":
                      case "color":
                      case "color-index":
                      case "monochrome":
                        (c = parseInt(c, 10) || 1), (s = parseInt(s, 10) || 0);
                    }
                    switch (n) {
                      case "min":
                        return s >= c;
                      case "max":
                        return s <= c;
                      default:
                        return s === c;
                    }
                  });
                  return (c && !r) || (!c && r);
                });
              }),
                (t.parse = n);
              var c = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                s = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                u = /^(?:(min|max)-)?(.+)/,
                l = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                f = /(dpi|dpcm|dppx)?$/;
            },
            function(e, t, r) {
              "use strict";
              e.exports = function(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var r = Object.keys(e),
                  n = Object.keys(t),
                  a = r.length;
                if (n.length !== a) return !1;
                for (var o = 0; o < a; o++) {
                  var i = r[o];
                  if (
                    e[i] !== t[i] ||
                    !Object.prototype.hasOwnProperty.call(t, i)
                  )
                    return !1;
                }
                return !0;
              };
            },
            function(e, t, r) {
              "use strict";
              function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t &&
                    (n = n.filter(function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              }
              function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? n(Object(r), !0).forEach(function(t) {
                        o(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              }
              function o(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = r),
                  e
                );
              }
              var i = r(12),
                c = r.n(i),
                s = c.a.oneOfType([c.a.string, c.a.number]),
                u = {
                  orientation: c.a.oneOf(["portrait", "landscape"]),
                  scan: c.a.oneOf(["progressive", "interlace"]),
                  aspectRatio: c.a.string,
                  deviceAspectRatio: c.a.string,
                  height: s,
                  deviceHeight: s,
                  width: s,
                  deviceWidth: s,
                  color: c.a.bool,
                  colorIndex: c.a.bool,
                  monochrome: c.a.bool,
                  resolution: s
                },
                l = a(
                  {
                    minAspectRatio: c.a.string,
                    maxAspectRatio: c.a.string,
                    minDeviceAspectRatio: c.a.string,
                    maxDeviceAspectRatio: c.a.string,
                    minHeight: s,
                    maxHeight: s,
                    minDeviceHeight: s,
                    maxDeviceHeight: s,
                    minWidth: s,
                    maxWidth: s,
                    minDeviceWidth: s,
                    maxDeviceWidth: s,
                    minColor: c.a.number,
                    maxColor: c.a.number,
                    minColorIndex: c.a.number,
                    maxColorIndex: c.a.number,
                    minMonochrome: c.a.number,
                    maxMonochrome: c.a.number,
                    minResolution: s,
                    maxResolution: s
                  },
                  u
                ),
                f = {
                  all: c.a.bool,
                  grid: c.a.bool,
                  aural: c.a.bool,
                  braille: c.a.bool,
                  handheld: c.a.bool,
                  print: c.a.bool,
                  projection: c.a.bool,
                  screen: c.a.bool,
                  tty: c.a.bool,
                  tv: c.a.bool,
                  embossed: c.a.bool
                },
                p = a(a({}, f), l);
              (u.type = Object.keys(f)),
                (t.a = { all: p, types: f, matchers: u, features: l });
            },
            function(e, t, r) {
              var n = r(4);
              e.exports = r(14)(n.isElement, !0);
            },
            function(e, t, r) {
              "use strict";
              !(function() {
                function e(e) {
                  if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                      case a:
                        var r = e.type;
                        switch (r) {
                          case f:
                          case p:
                          case i:
                          case s:
                          case c:
                          case m:
                            return r;
                          default:
                            var n = r && r.$$typeof;
                            switch (n) {
                              case l:
                              case d:
                              case h:
                              case v:
                              case u:
                                return n;
                              default:
                                return t;
                            }
                        }
                      case o:
                        return t;
                    }
                  }
                }
                function r(t) {
                  return e(t) === p;
                }
                var n = "function" == typeof Symbol && Symbol.for,
                  a = n ? Symbol.for("react.element") : 60103,
                  o = n ? Symbol.for("react.portal") : 60106,
                  i = n ? Symbol.for("react.fragment") : 60107,
                  c = n ? Symbol.for("react.strict_mode") : 60108,
                  s = n ? Symbol.for("react.profiler") : 60114,
                  u = n ? Symbol.for("react.provider") : 60109,
                  l = n ? Symbol.for("react.context") : 60110,
                  f = n ? Symbol.for("react.async_mode") : 60111,
                  p = n ? Symbol.for("react.concurrent_mode") : 60111,
                  d = n ? Symbol.for("react.forward_ref") : 60112,
                  m = n ? Symbol.for("react.suspense") : 60113,
                  y = n ? Symbol.for("react.suspense_list") : 60120,
                  v = n ? Symbol.for("react.memo") : 60115,
                  h = n ? Symbol.for("react.lazy") : 60116,
                  b = n ? Symbol.for("react.block") : 60121,
                  g = n ? Symbol.for("react.fundamental") : 60117,
                  w = n ? Symbol.for("react.responder") : 60118,
                  O = n ? Symbol.for("react.scope") : 60119,
                  E = f,
                  x = p,
                  j = l,
                  S = u,
                  P = a,
                  C = d,
                  I = i,
                  k = h,
                  N = v,
                  _ = o,
                  R = s,
                  A = c,
                  L = m,
                  M = !1;
                (t.AsyncMode = E),
                  (t.ConcurrentMode = x),
                  (t.ContextConsumer = j),
                  (t.ContextProvider = S),
                  (t.Element = P),
                  (t.ForwardRef = C),
                  (t.Fragment = I),
                  (t.Lazy = k),
                  (t.Memo = N),
                  (t.Portal = _),
                  (t.Profiler = R),
                  (t.StrictMode = A),
                  (t.Suspense = L),
                  (t.isAsyncMode = function(t) {
                    return (
                      M ||
                        ((M = !0),
                        console.warn(
                          "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                        )),
                      r(t) || e(t) === f
                    );
                  }),
                  (t.isConcurrentMode = r),
                  (t.isContextConsumer = function(t) {
                    return e(t) === l;
                  }),
                  (t.isContextProvider = function(t) {
                    return e(t) === u;
                  }),
                  (t.isElement = function(e) {
                    return (
                      "object" == typeof e && null !== e && e.$$typeof === a
                    );
                  }),
                  (t.isForwardRef = function(t) {
                    return e(t) === d;
                  }),
                  (t.isFragment = function(t) {
                    return e(t) === i;
                  }),
                  (t.isLazy = function(t) {
                    return e(t) === h;
                  }),
                  (t.isMemo = function(t) {
                    return e(t) === v;
                  }),
                  (t.isPortal = function(t) {
                    return e(t) === o;
                  }),
                  (t.isProfiler = function(t) {
                    return e(t) === s;
                  }),
                  (t.isStrictMode = function(t) {
                    return e(t) === c;
                  }),
                  (t.isSuspense = function(t) {
                    return e(t) === m;
                  }),
                  (t.isValidElementType = function(e) {
                    return (
                      "string" == typeof e ||
                      "function" == typeof e ||
                      e === i ||
                      e === p ||
                      e === s ||
                      e === c ||
                      e === m ||
                      e === y ||
                      ("object" == typeof e &&
                        null !== e &&
                        (e.$$typeof === h ||
                          e.$$typeof === v ||
                          e.$$typeof === u ||
                          e.$$typeof === l ||
                          e.$$typeof === d ||
                          e.$$typeof === g ||
                          e.$$typeof === w ||
                          e.$$typeof === O ||
                          e.$$typeof === b))
                    );
                  }),
                  (t.typeOf = e);
              })();
            },
            function(e, t, r) {
              "use strict";
              function n() {
                return null;
              }
              var a,
                o = r(4),
                i = r(15),
                c = r(5),
                s = r(16),
                u = Function.call.bind(Object.prototype.hasOwnProperty);
              (a = function(e) {
                var t = "Warning: " + e;
                "undefined" != typeof console && console.error(t);
                try {
                  throw new Error(t);
                } catch (r) {}
              }),
                (e.exports = function(e, t) {
                  function r(e, t) {
                    return e === t
                      ? 0 !== e || 1 / e == 1 / t
                      : e != e && t != t;
                  }
                  function l(e) {
                    (this.message = e), (this.stack = "");
                  }
                  function f(e) {
                    function r(r, i, s, u, f, p, d) {
                      if (((u = u || g), (p = p || s), d !== c)) {
                        if (t) {
                          var m = new Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                          );
                          throw ((m.name = "Invariant Violation"), m);
                        }
                        if ("undefined" != typeof console) {
                          var y = u + ":" + s;
                          !n[y] &&
                            o < 3 &&
                            (a(
                              "You are manually calling a React.PropTypes validation function for the `" +
                                p +
                                "` prop on `" +
                                u +
                                "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                            ),
                            (n[y] = !0),
                            o++);
                        }
                      }
                      return null == i[s]
                        ? r
                          ? new l(
                              null === i[s]
                                ? "The " +
                                  f +
                                  " `" +
                                  p +
                                  "` is marked as required in `" +
                                  u +
                                  "`, but its value is `null`."
                                : "The " +
                                  f +
                                  " `" +
                                  p +
                                  "` is marked as required in `" +
                                  u +
                                  "`, but its value is `undefined`."
                            )
                          : null
                        : e(i, s, u, f, p);
                    }
                    var n = {},
                      o = 0,
                      i = r.bind(null, !1);
                    return (i.isRequired = r.bind(null, !0)), i;
                  }
                  function p(e) {
                    return f(function(t, r, n, a, o, i) {
                      var c = t[r];
                      return m(c) !== e
                        ? new l(
                            "Invalid " +
                              a +
                              " `" +
                              o +
                              "` of type `" +
                              y(c) +
                              "` supplied to `" +
                              n +
                              "`, expected `" +
                              e +
                              "`."
                          )
                        : null;
                    });
                  }
                  function d(t) {
                    switch (typeof t) {
                      case "number":
                      case "string":
                      case "undefined":
                        return !0;
                      case "boolean":
                        return !t;
                      case "object":
                        if (Array.isArray(t)) return t.every(d);
                        if (null === t || e(t)) return !0;
                        var r = (function(e) {
                          var t = e && ((h && e[h]) || e[b]);
                          if ("function" == typeof t) return t;
                        })(t);
                        if (!r) return !1;
                        var n,
                          a = r.call(t);
                        if (r !== t.entries) {
                          for (; !(n = a.next()).done; )
                            if (!d(n.value)) return !1;
                        } else
                          for (; !(n = a.next()).done; ) {
                            var o = n.value;
                            if (o && !d(o[1])) return !1;
                          }
                        return !0;
                      default:
                        return !1;
                    }
                  }
                  function m(e) {
                    var t = typeof e;
                    return Array.isArray(e)
                      ? "array"
                      : e instanceof RegExp
                      ? "object"
                      : (function(e, t) {
                          return (
                            "symbol" === e ||
                            (!!t &&
                              ("Symbol" === t["@@toStringTag"] ||
                                ("function" == typeof Symbol &&
                                  t instanceof Symbol)))
                          );
                        })(t, e)
                      ? "symbol"
                      : t;
                  }
                  function y(e) {
                    if (null == e) return "" + e;
                    var t = m(e);
                    if ("object" === t) {
                      if (e instanceof Date) return "date";
                      if (e instanceof RegExp) return "regexp";
                    }
                    return t;
                  }
                  function v(e) {
                    var t = y(e);
                    switch (t) {
                      case "array":
                      case "object":
                        return "an " + t;
                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + t;
                      default:
                        return t;
                    }
                  }
                  var h = "function" == typeof Symbol && Symbol.iterator,
                    b = "@@iterator",
                    g = "<<anonymous>>",
                    w = {
                      array: p("array"),
                      bool: p("boolean"),
                      func: p("function"),
                      number: p("number"),
                      object: p("object"),
                      string: p("string"),
                      symbol: p("symbol"),
                      any: f(n),
                      arrayOf: function(e) {
                        return f(function(t, r, n, a, o) {
                          if ("function" != typeof e)
                            return new l(
                              "Property `" +
                                o +
                                "` of component `" +
                                n +
                                "` has invalid PropType notation inside arrayOf."
                            );
                          var i = t[r];
                          if (!Array.isArray(i))
                            return new l(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                m(i) +
                                "` supplied to `" +
                                n +
                                "`, expected an array."
                            );
                          for (var s = 0; s < i.length; s++) {
                            var u = e(i, s, n, a, o + "[" + s + "]", c);
                            if (u instanceof Error) return u;
                          }
                          return null;
                        });
                      },
                      element: f(function(t, r, n, a, o) {
                        var i = t[r];
                        return e(i)
                          ? null
                          : new l(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                m(i) +
                                "` supplied to `" +
                                n +
                                "`, expected a single ReactElement."
                            );
                      }),
                      elementType: f(function(e, t, r, n, a) {
                        var i = e[t];
                        return o.isValidElementType(i)
                          ? null
                          : new l(
                              "Invalid " +
                                n +
                                " `" +
                                a +
                                "` of type `" +
                                m(i) +
                                "` supplied to `" +
                                r +
                                "`, expected a single ReactElement type."
                            );
                      }),
                      instanceOf: function(e) {
                        return f(function(t, r, n, a, o) {
                          if (!(t[r] instanceof e)) {
                            var i = e.name || g;
                            return new l(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                ((c = t[r]).constructor && c.constructor.name
                                  ? c.constructor.name
                                  : g) +
                                "` supplied to `" +
                                n +
                                "`, expected instance of `" +
                                i +
                                "`."
                            );
                          }
                          var c;
                          return null;
                        });
                      },
                      node: f(function(e, t, r, n, a) {
                        return d(e[t])
                          ? null
                          : new l(
                              "Invalid " +
                                n +
                                " `" +
                                a +
                                "` supplied to `" +
                                r +
                                "`, expected a ReactNode."
                            );
                      }),
                      objectOf: function(e) {
                        return f(function(t, r, n, a, o) {
                          if ("function" != typeof e)
                            return new l(
                              "Property `" +
                                o +
                                "` of component `" +
                                n +
                                "` has invalid PropType notation inside objectOf."
                            );
                          var i = t[r],
                            s = m(i);
                          if ("object" !== s)
                            return new l(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                s +
                                "` supplied to `" +
                                n +
                                "`, expected an object."
                            );
                          for (var f in i)
                            if (u(i, f)) {
                              var p = e(i, f, n, a, o + "." + f, c);
                              if (p instanceof Error) return p;
                            }
                          return null;
                        });
                      },
                      oneOf: function(e) {
                        function t(t, n, a, o, i) {
                          for (var c = t[n], s = 0; s < e.length; s++)
                            if (r(c, e[s])) return null;
                          var u = JSON.stringify(e, function(e, t) {
                            return "symbol" === y(t) ? String(t) : t;
                          });
                          return new l(
                            "Invalid " +
                              o +
                              " `" +
                              i +
                              "` of value `" +
                              String(c) +
                              "` supplied to `" +
                              a +
                              "`, expected one of " +
                              u +
                              "."
                          );
                        }
                        return Array.isArray(e)
                          ? f(t)
                          : (a(
                              arguments.length > 1
                                ? "Invalid arguments supplied to oneOf, expected an array, got " +
                                    arguments.length +
                                    " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                                : "Invalid argument supplied to oneOf, expected an array."
                            ),
                            n);
                      },
                      oneOfType: function(e) {
                        if (!Array.isArray(e))
                          return (
                            a(
                              "Invalid argument supplied to oneOfType, expected an instance of array."
                            ),
                            n
                          );
                        for (var t = 0; t < e.length; t++) {
                          var r = e[t];
                          if ("function" != typeof r)
                            return (
                              a(
                                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                                  v(r) +
                                  " at index " +
                                  t +
                                  "."
                              ),
                              n
                            );
                        }
                        return f(function(t, r, n, a, o) {
                          for (var i = 0; i < e.length; i++)
                            if (null == (0, e[i])(t, r, n, a, o, c))
                              return null;
                          return new l(
                            "Invalid " +
                              a +
                              " `" +
                              o +
                              "` supplied to `" +
                              n +
                              "`."
                          );
                        });
                      },
                      shape: function(e) {
                        return f(function(t, r, n, a, o) {
                          var i = t[r],
                            s = m(i);
                          if ("object" !== s)
                            return new l(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                s +
                                "` supplied to `" +
                                n +
                                "`, expected `object`."
                            );
                          for (var u in e) {
                            var f = e[u];
                            if (f) {
                              var p = f(i, u, n, a, o + "." + u, c);
                              if (p) return p;
                            }
                          }
                          return null;
                        });
                      },
                      exact: function(e) {
                        return f(function(t, r, n, a, o) {
                          var s = t[r],
                            u = m(s);
                          if ("object" !== u)
                            return new l(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                u +
                                "` supplied to `" +
                                n +
                                "`, expected `object`."
                            );
                          var f = i({}, t[r], e);
                          for (var p in f) {
                            var d = e[p];
                            if (!d)
                              return new l(
                                "Invalid " +
                                  a +
                                  " `" +
                                  o +
                                  "` key `" +
                                  p +
                                  "` supplied to `" +
                                  n +
                                  "`.\nBad object: " +
                                  JSON.stringify(t[r], null, "  ") +
                                  "\nValid keys: " +
                                  JSON.stringify(Object.keys(e), null, "  ")
                              );
                            var y = d(s, p, n, a, o + "." + p, c);
                            if (y) return y;
                          }
                          return null;
                        });
                      }
                    };
                  return (
                    (l.prototype = Error.prototype),
                    (w.checkPropTypes = s),
                    (w.resetWarningCache = s.resetWarningCache),
                    (w.PropTypes = w),
                    w
                  );
                });
            },
            function(e, t, r) {
              "use strict";
              function n(e) {
                if (null == e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(e);
              }
              var a = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
              e.exports = (function() {
                try {
                  if (!Object.assign) return !1;
                  var e = new String("abc");
                  if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                    return !1;
                  for (var t = {}, r = 0; r < 10; r++)
                    t["_" + String.fromCharCode(r)] = r;
                  if (
                    "0123456789" !==
                    Object.getOwnPropertyNames(t)
                      .map(function(e) {
                        return t[e];
                      })
                      .join("")
                  )
                    return !1;
                  var n = {};
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function(e) {
                      n[e] = e;
                    }),
                    "abcdefghijklmnopqrst" ===
                      Object.keys(Object.assign({}, n)).join("")
                  );
                } catch (a) {
                  return !1;
                }
              })()
                ? Object.assign
                : function(e, t) {
                    for (var r, c, s = n(e), u = 1; u < arguments.length; u++) {
                      for (var l in (r = Object(arguments[u])))
                        o.call(r, l) && (s[l] = r[l]);
                      if (a) {
                        c = a(r);
                        for (var f = 0; f < c.length; f++)
                          i.call(r, c[f]) && (s[c[f]] = r[c[f]]);
                      }
                    }
                    return s;
                  };
            },
            function(e, t, r) {
              "use strict";
              function n(e, t, r, n, s) {
                for (var u in e)
                  if (c(e, u)) {
                    var l;
                    try {
                      if ("function" != typeof e[u]) {
                        var f = Error(
                          (n || "React class") +
                            ": " +
                            r +
                            " type `" +
                            u +
                            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                            typeof e[u] +
                            "`."
                        );
                        throw ((f.name = "Invariant Violation"), f);
                      }
                      l = e[u](t, u, n, r, null, o);
                    } catch (d) {
                      l = d;
                    }
                    if (
                      (!l ||
                        l instanceof Error ||
                        a(
                          (n || "React class") +
                            ": type specification of " +
                            r +
                            " `" +
                            u +
                            "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                            typeof l +
                            ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                        ),
                      l instanceof Error && !(l.message in i))
                    ) {
                      i[l.message] = !0;
                      var p = s ? s() : "";
                      a(
                        "Failed " +
                          r +
                          " type: " +
                          l.message +
                          (null != p ? p : "")
                      );
                    }
                  }
              }
              var a = function() {},
                o = r(5),
                i = {},
                c = Function.call.bind(Object.prototype.hasOwnProperty);
              (a = function(e) {
                var t = "Warning: " + e;
                "undefined" != typeof console && console.error(t);
                try {
                  throw new Error(t);
                } catch (r) {}
              }),
                (n.resetWarningCache = function() {
                  i = {};
                }),
                (e.exports = n);
            },
            function(e, t, r) {
              "use strict";
              function n(e, t) {
                if (null == e) return {};
                var r,
                  n,
                  a = (function(e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      a = {},
                      o = Object.keys(e);
                    for (n = 0; n < o.length; n++)
                      (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]),
                      t.indexOf(r) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (a[r] = e[r]));
                }
                return a;
              }
              t.a = function(e) {
                var t = e.children,
                  r = e.device,
                  o = e.onChange,
                  i = n(e, ["children", "device", "onChange"]),
                  c = Object(a.a)(i, r, o);
                return "function" == typeof t ? t(c) : c ? t : null;
              };
              var a = r(0);
            }
          ])));
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-19f0a0c52716d758afd5.js.map
