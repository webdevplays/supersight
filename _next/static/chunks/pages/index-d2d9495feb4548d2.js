(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(6330);
        },
      ]);
    },
    6330: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSP: function () {
            return n0;
          },
          default: function () {
            return n1;
          },
        });
      var i = t(7297),
        r = t(5893),
        o = t(7294),
        d = t(1192),
        a = t(9008),
        c = t.n(a),
        s = t(7830),
        l = t(1163),
        u = t(5675),
        h = t.n(u);
      function p() {
        let n = (0, i.Z)([
          "\n  ::-webkit-media-controls-download-button {\n    display: none;\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      let f = d.ZP.div.withConfig({ componentId: "sc-e60ebb47-0" })(p()),
        g = (n) => {
          let { videoUrl: e } = n;
          return (0, r.jsxs)(f, {
            style: {
              padding: "56.25% 0 0 0",
              position: "relative",
              border: "0",
            },
            children: [
              (0, r.jsx)("iframe", {
                src: "tab.html",
                scrolling:"no",
                allowfullscreen:"",
                allow: "autoplay; fullscreen; picture-in-picture",
                style: {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  border: "0",
                },
              }),
              (0, r.jsx)("script", {
                src: "https://player.vimeo.com/api/player.js",
              }),
            ],
          });
        };
      function m() {
        let n = (0, i.Z)([
          "\n  font-family: var(--font-primary-v2);\n  color: #fff;\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 2rem;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-top: 1rem;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, i.Z)([
          "\n  font-family: var(--font-primary-v2);\n  font-size: 1.125rem;\n  font-weight: 300;\n  line-height: 150%;\n  letter-spacing: 0em;\n  text-align: left;\n\n  @media only screen and (max-width: 600px) {\n    margin-top: 0rem;\n    font-size: 1.25rem;\n    line-height: 2rem;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  ",
          "\n  ",
          ";\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    padding: 0;\n    text-align: center;\n  }\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, i.Z)([
          "\n  border-radius: 10px;\n  border: 2px solid #171d33;\n  background: rgba(42, 48, 81, 0.1);\n  backdrop-filter: blur(4px);\n  width: fit-content;\n  padding: 10px 14px;\n  font-size: 30px;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 20px;\n    padding: 6px 10px;\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      let y = d.ZP.div.withConfig({ componentId: "sc-60047010-0" })(m()),
        v = d.ZP.div.withConfig({ componentId: "sc-60047010-1" })(x()),
        j = d.ZP.div.withConfig({ componentId: "sc-60047010-2" })(
          w(),
          (n) => n.applyMarginBottom && "margin-bottom: 2rem",
          (n) => n.isRightTilted && "text-align: right"
        ),
        k = d.ZP.div.withConfig({ componentId: "sc-60047010-3" })(b()),
        Z = (n) => {
          let {
            title: e,
            subtitle: t,
            isRightTilted: i = !1,
            applyMarginBottom: o = !0,
            icon: d,
          } = n;
          return (0, r.jsxs)(j, {
            isRightTilted: i,
            applyMarginBottom: o,
            children: [
              (0, r.jsx)(k, { children: d }),
              (0, r.jsx)(y, { children: e }),
              (0, r.jsx)(v, { children: t }),
            ],
          });
        };
      var C = t(1664),
        P = t.n(C),
        I = t(5647),
        D = t(3299),
        _ = t(7507);
      function S() {
        let n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  margin: 4rem 0 3rem 0;\n  ",
          "\n\n  @media only screen and (max-width: 600px) {\n    margin-top: 4rem;\n  }\n",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        let n = (0, i.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-items: flex-end;\n  font-size: var(--navbar-footer-font-size);\n  font-weight: 400;\n  ",
          "\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.75rem;\n  }\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        let n = (0, i.Z)([
          "\n  @media only screen and (max-width: 600px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    a {\n      padding: 0;\n      margin-bottom: 8px;\n    }\n  }\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        let n = (0, i.Z)(["\n  display: flex;\n"]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, i.Z)([
          "\n  border: none;\n  background-color: transparent;\n  font-weight: 400;\n  font-size: var(--navbar-footer-font-size);\n  padding: 0 1.5rem 0 0;\n  color: var(--text-white);\n  cursor: pointer;\n  align-self: center;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 0.75rem;\n  }\n",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        let n = (0, i.Z)(["\n  margin: 0 0.5rem -0.5rem 0.5rem;\n"]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        let n = (0, i.Z)([
          "\n  margin: 1rem 0;\n  border: 1px solid #e7eaff;\n  border-radius: 10px;\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      let O = d.ZP.div.withConfig({ componentId: "sc-5a1008c9-0" })(S(), (n) =>
          n.isNewFont
            ? "font-family: var(--font-landing);"
            : "font-family: var(--font-primary);"
        ),
        F = d.ZP.div.withConfig({ componentId: "sc-5a1008c9-1" })(T(), (n) =>
          n.isNewFont
            ? "font-family: var(--font-landing);"
            : "font-family: var(--font-primary);"
        ),
        L = d.ZP.div.withConfig({ componentId: "sc-5a1008c9-2" })(z()),
        R = d.ZP.div.withConfig({ componentId: "sc-5a1008c9-3" })(A()),
        G = (0, d.ZP)(P()).withConfig({ componentId: "sc-5a1008c9-4" })(E()),
        B = (0, d.ZP)(P()).withConfig({ componentId: "sc-5a1008c9-5" })(M()),
        U = d.ZP.hr.withConfig({ componentId: "sc-5a1008c9-6" })(N());
      function V(n) {
        let { isNewFont: e = !1 } = n,
          { data: t } = (0, D.useSession)(),
          i = (n) => {
            t &&
              (null == t ? void 0 : t.user) &&
              (0, I.$j)({ name: n, metadata: {} });
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(O, {
            isNewFont: e,
            children: [
              (0, r.jsxs)(F, {
                isNewFont: e,
                children: [
                  (0, r.jsxs)(L, {
                    children: [
                      (0, r.jsx)(G, {
                        href: "/jobs",
                        onMouseDown: (n) => {
                          i("USER_NAVIGATED_TO_JOBS_PAGE"), n.preventDefault();
                        },
                        children: "Jobs",
                      }),
                      (0, r.jsx)(G, {
                        href: "/docs",
                        onMouseDown: (n) => {
                          i("USER_NAVIGATED_TO_DOCS_PAGE"), n.preventDefault();
                        },
                        children: "Request Docs",
                      }),
                      (0, r.jsx)(G, {
                        href: "/privacy",
                        onMouseDown: (n) => {
                          i("USER_NAVIGATED_TO_POLICY_PAGE"),
                            n.preventDefault();
                        },
                        children: "Privacy Policy",
                      }),
                      (0, r.jsx)(G, {
                        href: "/terms",
                        onMouseDown: (n) => {
                          i("USER_NAVIGATED_TO_TERMS_PAGE"), n.preventDefault();
                        },
                        children: "Terms and Conditions",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(R, {
                    children: [
                      (0, r.jsx)(B, {
                        href: _.v,
                        target: "_blank",
                        onMouseDown: (n) => {
                          i("USER_NAVIGATED_TO_TWITTER_PAGE"),
                            n.preventDefault();
                        },
                        children: (0, r.jsx)(h(), {
                          alt: "Twitter logo with no border",
                          src: "/twitter-no-border.svg",
                          height: 25,
                          width: 25,
                        }),
                      }),
                      (0, r.jsx)(B, {
                        href: _.sy,
                        target: "_blank",
                        onMouseDown: (n) => {
                          i("USER_NAVIGATED_TO_DISCORD_PAGE"),
                            n.preventDefault();
                        },
                        children: (0, r.jsx)(h(), {
                          alt: "Twitter logo with no border",
                          src: "/discord-no-border.svg",
                          height: 25,
                          width: 25,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(U, {}),
              (0, r.jsxs)(F, {
                isNewFont: e,
                children: [
                  "\xa9 ",
                  new Date().getFullYear(),
                  " SuperSight. All Rights Reserved.",
                ],
              }),
            ],
          }),
        });
      }
      var q = t(6066);
      function W() {
        let n = (0, i.Z)([
          "\n  position: absolute;\n  left: -25px;\n  cursor: pointer;\n  top: 30%;\n  z-index: 999;\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function J() {
        let n = (0, i.Z)([
          "\n  position: absolute;\n  right: -25px;\n  cursor: pointer;\n  top: 30%;\n  z-index: 999;\n",
        ]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      function X() {
        let n = (0, i.Z)([
          "\n  img {\n    width: 8.75rem;\n    height: 8.75rem;\n  }\n\n  @media only screen and (max-width: 600px) {\n    img {\n      width: 6.25rem;\n      height: 6.25rem;\n    }\n  }\n",
        ]);
        return (
          (X = function () {
            return n;
          }),
          n
        );
      }
      t(4640), t(9678);
      let Y = d.ZP.div.withConfig({ componentId: "sc-1553a97f-0" })(W()),
        H = d.ZP.div.withConfig({ componentId: "sc-1553a97f-1" })(J()),
        $ = d.ZP.div.withConfig({ componentId: "sc-1553a97f-2" })(X()),
        K = (n) =>
          (0, r.jsx)(Y, {
            onClick: n.onClick,
            children: (0, r.jsx)(h(), {
              src: "/landingPage/leftArrow.svg",
              alt: "left arrrow",
              width: 50,
              height: 50,
            }),
          }),
        Q = (n) =>
          (0, r.jsx)(H, {
            onClick: n.onClick,
            children: (0, r.jsx)(h(), {
              src: "/landingPage/rightArrow.svg",
              alt: "right arrrow",
              width: 50,
              height: 50,
            }),
          }),
        nn = () => {
          let n = {
            dots: !1,
            infinite: !0,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            nextArrow: (0, r.jsx)(Q, {}),
            prevArrow: (0, r.jsx)(K, {}),
            responsive: [
              {
                breakpoint: 1024,
                settings: { slidesToShow: 5, slidesToScroll: 1, infinite: !0 },
              },
              {
                breakpoint: 800,
                settings: { slidesToShow: 3, slidesToScroll: 1, infinite: !0 },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 3, slidesToScroll: 1, infinite: !0 },
              },
            ],
          };
          return (0, r.jsx)(q.Z, {
            ...n,
            children: [1, 2, 4, 5, 6, 7, 3].map((n, e) =>
              (0, r.jsx)(
                $,
                {
                  children: (0, r.jsx)(h(), {
                    alt: "investors-logo",
                    src: "/".concat(n, ".png"),
                    height: 140,
                    width: 140,
                  }),
                },
                e
              )
            ),
          });
        };
      var ne = t(3343);
      function nt() {
        let n = (0, i.Z)([
          "\n  font-family: var(--font-primary-v2);\n  background: #060812;\n  background-image: url('landingPage/TopLeftHomepage-Background.svg');\n  background-repeat: no-repeat;\n  background-position: top left;\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function ni() {
        let n = (0, i.Z)([
          "\n  font-family: var(--font-primary-v2);\n  margin-bottom: 4rem;\n\n  @media only screen and (max-width: 600px) {\n    margin-bottom: 0;\n  }\n",
        ]);
        return (
          (ni = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        let n = (0, i.Z)([
          "\n  font-family: var(--font-primary-v2);\n  background-image: url('landingPage/Cross-section-background.svg');\n  background-repeat: no-repeat;\n  background-position: top left;\n  margin-bottom: 4rem;\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      function no() {
        let n = (0, i.Z)([
          "\n  font-family: var(--font-primary-v2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 6rem;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column-reverse;\n    margin-top: 0;\n    margin-bottom: 4rem;\n  }\n",
        ]);
        return (
          (no = function () {
            return n;
          }),
          n
        );
      }
      function nd() {
        let n = (0, i.Z)([
          "\n  leading-trim: both;\n  text-edge: cap;\n  font-size: 110px;\n  font-style: normal;\n  font-weight: 300;\n  font-family: var(--font-primary-v2);\n  line-height: 121px;\n  letter-spacing: 0em;\n  text-align: left;\n  width: 60%;\n\n  background: linear-gradient(94deg, #a7a1fb 2.16%, #5ea0f3 68.85%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  img {\n    height: 100% !important;\n    width: 100% !important;\n  }\n\n  @media only screen and (max-width: 600px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 55px;\n    line-height: 55px;\n    width: 100%;\n\n    img {\n      height: 100% !important;\n      width: 100% !important;\n    }\n  }\n",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function na() {
        let n = (0, i.Z)([
          "\n  color: #b6d1ff;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 54px;\n  opacity: 1;\n\n  @media only screen and (max-width: 600px) {\n    margin-top: 2rem;\n    font-size: 24px;\n    line-height: 24px;\n  }\n",
        ]);
        return (
          (na = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, i.Z)([
          "\n  margin: 8rem 0rem;\n  padding-inline: 8rem;\n  position: relative;\n\n  @media only screen and (max-width: 600px) {\n    padding-inline: 0;\n    margin: 4rem 0rem;\n  }\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        let n = (0, i.Z)([
          "\n  text-align: center;\n  leading-trim: both;\n  text-edge: cap;\n  font-size: 80px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 88px;\n  background: linear-gradient(94deg, #c2bdff 2.16%, #8cbfff 68.85%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  width: 60%;\n  margin-inline: auto;\n  margin-bottom: 4rem;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    font-size: 40px;\n    line-height: 40px;\n  }\n",
        ]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nl() {
        let n = (0, i.Z)([
          "\n  border: 3px solid #171d33;\n  border-radius: 10px;\n  padding: 2rem;\n  width: 100%;\n  background-color: rgba(42, 48, 81, 0);\n  backdrop-filter: blur(8px);\n\n  video {\n    border-radius: 10px;\n  }\n\n  @media only screen and (max-width: 600px) {\n    padding: 0rem;\n  }\n",
        ]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function nu() {
        let n = (0, i.Z)([
          "\n  background: #171d33;\n  border-radius: 10px;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2rem;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 2rem;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n",
        ]);
        return (
          (nu = function () {
            return n;
          }),
          n
        );
      }
      function nh() {
        let n = (0, i.Z)([
          "\n  border: 1px solid #8d99da;\n  margin-bottom: 2rem;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n\n  @media only screen and (max-width: 600px) {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n",
        ]);
        return (
          (nh = function () {
            return n;
          }),
          n
        );
      }
      function np() {
        let n = (0, i.Z)([
          "\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.75rem;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #8d99da;\n  background-color: #171d33;\n  ",
          "\n  ",
          "\n",
          "\npadding: 12px;\n  flex: 1 1 auto;\n\n  @media only screen and (max-width: 600px) {\n    flex-wrap: wrap;\n    justify-content: center;\n    font-size: 1rem;\n    width: 50%;\n    ",
          "\n    ",
          "\n    ",
          "\n  }\n",
        ]);
        return (
          (np = function () {
            return n;
          }),
          n
        );
      }
      function nf() {
        let n = (0, i.Z)([
          "\n  background-image: url('landingPage/feature-left-background.png'),\n    url('landingPage/feature-right-background.svg');\n  background-repeat: no-repeat, no-repeat;\n  background-position:\n    bottom left,\n    top right;\n  padding: 115px 100px;\n  position: relative;\n  ",
          "\n\n  @media only screen and (max-width: 600px) {\n    ",
          "\n    padding: 40px 0;\n  }\n",
        ]);
        return (
          (nf = function () {
            return n;
          }),
          n
        );
      }
      function ng() {
        let n = (0, i.Z)([
          "\n  width: 100%;\n  margin: 8rem 0rem;\n  background-image: url('landingPage/lamp-background.svg');\n  background-repeat: no-repeat;\n  background-position: top;\n\n  @media only screen and (max-width: 600px) {\n    margin: 4rem 0rem;\n    background-size: contain;\n  }\n",
        ]);
        return (
          (ng = function () {
            return n;
          }),
          n
        );
      }
      function nm() {
        let n = (0, i.Z)([
          "\n  text-align: center;\n  leading-trim: both;\n  text-edge: cap;\n  font-size: 80px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 88px;\n  background: linear-gradient(93deg, #fff 2.23%, #8cbfff 92.17%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  width: 60%;\n  margin-inline: auto;\n  margin-bottom: 2rem;\n  padding-top: 2rem;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    line-height: 44px;\n    font-size: 40px;\n  }\n",
        ]);
        return (
          (nm = function () {
            return n;
          }),
          n
        );
      }
      function nx() {
        let n = (0, i.Z)([
          "\n  color: #fff;\n  text-align: center;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  opacity: 0.7;\n  margin-bottom: 4rem;\n\n  @media only screen and (max-width: 600px) {\n    line-height: 22px;\n    font-size: 24x;\n    display: none;\n  }\n",
        ]);
        return (
          (nx = function () {
            return n;
          }),
          n
        );
      }
      function nw() {
        let n = (0, i.Z)([
          "\n  justify-content: space-between;\n  gap: 20px;\n  border: 3px solid #171d33;\n  padding: 2rem;\n  border-radius: 10px;\n  background-color: rgba(42, 48, 81, 0);\n  backdrop-filter: blur(8px);\n  ",
          "\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n    margin-top: 0;\n    margin-bottom: 0;\n    ",
          "\n  }\n",
        ]);
        return (
          (nw = function () {
            return n;
          }),
          n
        );
      }
      function nb() {
        let n = (0, i.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 44%;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n  }\n",
        ]);
        return (
          (nb = function () {
            return n;
          }),
          n
        );
      }
      function ny() {
        let n = (0, i.Z)([
          "\n  width: 56%;\n  border-radius: 10px;\n\n  img {\n    height: 100%;\n    width: 100%;\n  }\n\n  @media only screen and (max-width: 600px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (ny = function () {
            return n;
          }),
          n
        );
      }
      function nv() {
        let n = (0, i.Z)([
          "\n  display: flex;\n  justify-content: center;\n\n  img {\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  @media only screen and (max-width: 600px) {\n    img {\n      width: 100% !important;\n      height: 100% !important;\n    }\n  }\n",
        ]);
        return (
          (nv = function () {
            return n;
          }),
          n
        );
      }
      function nj() {
        let n = (0, i.Z)([
          "\n  margin-top: 8rem;\n  width: 100%;\n  position: relative;\n  background: #171d33;\n  border-radius: 10px;\n\n  @media only screen and (max-width: 600px) {\n    margin-top: 2rem;\n    margin: 2rem auto;\n    width: 90%;\n  }\n",
        ]);
        return (
          (nj = function () {
            return n;
          }),
          n
        );
      }
      function nk() {
        let n = (0, i.Z)([
          "\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 502px;\n  height: 502px;\n  flex-shrink: 0;\n  border-radius: 502px;\n  background: rgba(14, 57, 157, 0.5);\n  filter: blur(280px);\n",
        ]);
        return (
          (nk = function () {
            return n;
          }),
          n
        );
      }
      function nZ() {
        let n = (0, i.Z)([
          "\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 371px;\n  height: 371px;\n  flex-shrink: 0;\n  border-radius: 371px;\n  background: #0e1c51;\n  filter: blur(292px);\n",
        ]);
        return (
          (nZ = function () {
            return n;
          }),
          n
        );
      }
      function nC() {
        let n = (0, i.Z)([
          "\n  position: absolute;\n  bottom: 0;\n  width: 1030px;\n  height: 252px;\n  flex-shrink: 0;\n  border-radius: 1030px;\n  background: #0e1c51;\n  filter: blur(292px);\n\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n",
        ]);
        return (
          (nC = function () {
            return n;
          }),
          n
        );
      }
      function nP() {
        let n = (0, i.Z)([
          "\n  width: 100%;\n  padding: 0.75rem;\n  box-sizing: border-box;\n  text-align: center;\n  font-family: var(--font-secondary);\n  background: rgb(201 196 255 / 80%);\n  color: var(--text-white);\n",
        ]);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      let nI = [
          {
            key: 1,
            heading: "What else are PEPE holders buying in the last 30 days?",
            videoLink: "883249551",
          },
          {
            key: 2,
            heading:
              "Who bought LDO low and sold high 3 times in the last 30 days?",
            videoLink: "883249783",
          },
          {
            key: 3,
            heading: "Tax loss harvesting in the NFT markets",
            videoLink: "883250204",
          },
          {
            key: 4,
            heading: "Binance net flow in the last 7 days",
            videoLink: "883250480",
          },
          {
            key: 5,
            heading: "VC activities in the last 90 days",
            videoLink: "883251145",
          },
        ],
        nD = [
          "\uD83D\uDC33 Watch whales",
          "\uD83D\uDD25 What’s hot?",
          "\uD83D\uDDA8️ Copytrade",
          "\uD83D\uDD07 Filter noise",
          "☠️ Mitigate risk",
        ],
        n_ = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-0" })(nt());
      d.ZP.nav.withConfig({ componentId: "sc-4d25d1c-1" })(ni());
      let nS = d.ZP.section.withConfig({ componentId: "sc-4d25d1c-2" })(nr()),
        nT = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-3" })(no()),
        nz = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-4" })(nd()),
        nA = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-5" })(na()),
        nE = d.ZP.section.withConfig({ componentId: "sc-4d25d1c-6" })(nc()),
        nM = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-7" })(ns()),
        nN = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-8" })(nl()),
        nO = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-9" })(nu()),
        nF = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-10" })(nh()),
        nL = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-11" })(
          np(),
          (n) => n.selected && "background: #8D99DA; color: #111;",
          (n) => 0 === n.index && "border-radius: 10px 0 0 10px;",
          (n) =>
            4 === n.index
              ? "border-radius: 0 10px 10px 0;"
              : "border-right: 1px solid #8D99DA;",
          (n) => 0 === n.index && "border-radius: 10px 0 0 0;",
          (n) => 1 === n.index && "border-radius: 0px 10px 0 0px;",
          (n) =>
            4 === n.index
              ? "border-radius: 0 0 10px 10px;"
              : "border-bottom: 1px solid #8D99DA;"
        ),
        nR = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-12" })(
          nf(),
          (n) => n.isChatSection && "margin-inline: 8rem;",
          (n) =>
            n.isChatSection &&
            "padding-block: 0; margin-inline: 0; background: none;"
        ),
        nG = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-13" })(ng()),
        nB = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-14" })(nm()),
        nU = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-15" })(nx()),
        nV = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-16" })(
          nw(),
          (n) => (n.showOnMobile ? "display: none;" : "display: flex;"),
          (n) =>
            n.showOnMobile && "display: block; margin-top: 2rem; padding: 1rem;"
        ),
        nq = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-17" })(nb()),
        nW = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-18" })(ny(), (n) =>
          n.showOnMobile ? "display: block; width: 100%;" : "display: none;"
        ),
        nJ = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-19" })(nv()),
        nX = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-20" })(nj()),
        nY = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-21" })(nk()),
        nH = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-22" })(nZ()),
        n$ = d.ZP.div.withConfig({ componentId: "sc-4d25d1c-23" })(nC()),
        nK = (0, d.ZP)(P()).withConfig({ componentId: "sc-4d25d1c-24" })(nP()),
        nQ = () => {
          (0, l.useRouter)();
          let { data: n, status: e } = (0, D.useSession)(),
            [t, i] = (0, o.useState)(1);
          n && (null == n || n.user);
          let d = (n) => {
              i(n);
            },
            a =
              "Our website is temporarily closed as we upgrade to bring you something extraordinary. Stay excited—we’ll be back soon!";
          return "loading" === e
            ? (0, r.jsx)(r.Fragment, {})
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(c(), {
                    children: [
                      (0, r.jsx)("title", { children: "SuperSight" }),
                      (0, r.jsx)("meta", {
                        name: "description",
                        content:
                          "SuperSight is building crypto-specific Large Language Models (LLMs) to revolutionise how users interact with crypto data",
                      }),
                      (0, r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                      }),
                      (0, r.jsx)("link", {
                        rel: "icon",
                        href: "/logo-16*16.ico",
                        sizes: "16x16",
                      }),
                      (0, r.jsx)("link", {
                        rel: "icon",
                        href: "/logo-32*32.ico",
                        sizes: "32x32",
                      }),
                      (0, r.jsx)("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                      }),
                      (0, r.jsx)("link", {
                        href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                        rel: "stylesheet",
                      }),
                    ],
                  }),
                  a && (0, r.jsx)(nK, { href: "/maintenance", children: a }),
                  (0, r.jsxs)(n_, {
                    children: [
                      (0, r.jsx)(ne.Z, {}),
                      (0, r.jsx)(nS, {
                        children: (0, r.jsxs)(s.ah, {
                          children: [
                            (0, r.jsxs)(nT, {
                              children: [
                                (0, r.jsxs)(nz, {
                                  children: [
                                    (0, r.jsx)(h(), {
                                      src: "/supersight.gif",
                                      alt: "Supersight GIF",
                                      width: 840,
                                      height: 240,
                                      style: { mixBlendMode: "lighten" },
                                    }),
                                    (0, r.jsx)(nA, {
                                      children: "Crypto-Specific LLMs",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(nJ, {
                                  children: (0, r.jsx)(h(), {
                                    src: "landingPage/Ball.gif",
                                    alt: "Supersight animation",
                                    width: 500,
                                    height: 500,
                                    style: { mixBlendMode: "lighten" },
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(nX, { children: (0, r.jsx)(nn, {}) }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)(nE, {
                        children: [
                          (0, r.jsx)(nY, {}),
                          (0, r.jsx)(nH, {}),
                          (0, r.jsx)(s.ah, {
                            children: (0, r.jsx)(nM, {
                              children: "Find answers not on the internet",
                            }),
                          }),
                          (0, r.jsxs)(nR, {
                            children: [
                              (0, r.jsx)(n$, {}),
                              (0, r.jsx)(s.ah, {
                                children: (0, r.jsxs)(nN, {
                                  children: [
                                    (0, r.jsx)(nF, {
                                      children: nD.map((n, e) =>
                                        (0, r.jsx)(
                                          nL,
                                          {
                                            index: e,
                                            selected: t === e + 1,
                                            onClick: () => d(e + 1),
                                            children: n,
                                          },
                                          e
                                        )
                                      ),
                                    }),
                                    (0, r.jsx)(nO, {
                                      children: nI[t - 1].heading,
                                    }),
                                    t
                                      ? (0, r.jsx)(g, {
                                          videoUrl: nI[t - 1].videoLink,
                                        })
                                      : (0, r.jsx)("p", {
                                          children:
                                            "No video demo found for this feature.",
                                        }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(nG, {
                        children: [
                          (0, r.jsxs)(s.ah, {
                            children: [
                              (0, r.jsx)(nB, {
                                children: "All in one place, in seconds",
                              }),
                              (0, r.jsx)(nU, {
                                children:
                                  "Functionalities beyond just a search engine",
                              }),
                            ],
                          }),
                          (0, r.jsx)(nR, {
                            isChatSection: !0,
                            children: (0, r.jsxs)(s.ah, {
                              children: [
                                (0, r.jsxs)(nV, {
                                  children: [
                                    (0, r.jsxs)(nq, {
                                      children: [
                                        (0, r.jsx)(Z, {
                                          icon: "\uD83D\uDCAC",
                                          title: "Follow-Up",
                                          subtitle:
                                            "Slice and dice further into insights and interact beyond just one query.",
                                        }),
                                        (0, r.jsx)(Z, {
                                          icon: "⏳",
                                          title: "Minimal Latency",
                                          subtitle:
                                            "All queries are run within a minute, where the same query would take 6+ minutes on other tools.",
                                        }),
                                        (0, r.jsx)(Z, {
                                          icon: "\uD83C\uDF0A",
                                          title: "Freeflow Search",
                                          subtitle:
                                            "Ask as complex questions as you need, without needing to understand the schema.",
                                          applyMarginBottom: !1,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)(nW, {
                                      children: (0, r.jsx)(h(), {
                                        src: "/landingPage/ChatImage.png",
                                        alt: "supersight chat",
                                        width: 500,
                                        height: 500,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(nV, {
                                  showOnMobile: !0,
                                  children: (0, r.jsx)(nW, {
                                    showOnMobile: !0,
                                    children: (0, r.jsx)(h(), {
                                      src: "/landingPage/ChatImage.png",
                                      alt: "supersight chat",
                                      width: 500,
                                      height: 500,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(s.ah, { children: (0, r.jsx)(V, {}) }),
                    ],
                  }),
                ],
              });
        };
      var n0 = !0,
        n1 = nQ;
    },
  },
  function (n) {
    n.O(0, [278, 774, 888, 179], function () {
      return n((n.s = 8312));
    }),
      (_N_E = n.O());
  },
]);
