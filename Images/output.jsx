 var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <style dangerouslySetInnerHTML={{__html: "\n          a,\n          body,\n          div,\n          h1,\n          h2,\n          h3,\n          header,\n          html,\n          img,\n          li,\n          nav,\n          p,\n          span,\n          ul {\n               margin: 0;\n               padding: 0;\n               border: 0;\n               font-size: 100%;\n               vertical-align: baseline;\n               font-weight: inherit\n          }\n\n          header,\n          nav {\n               display: block\n          }\n\n          body {\n               font-weight: 300;\n               line-height: 1.4\n          }\n\n          ul {\n               list-style: none\n          }\n\n          a {\n               text-decoration: none\n          }\n\n          button::-moz-focus-inner {\n               padding: 0 !important;\n               border: 0 none !important\n          }\n\n          *,\n          :after,\n          :before {\n               -webkit-box-sizing: border-box;\n               box-sizing: border-box\n          }\n\n          html {\n               background-color: #fff;\n               font-family: \"SC Sans Web\", \"SC Sans\", Arial, sans-serif;\n               font-size: 100%;\n               width: 100%;\n               min-height: 100%;\n               overflow: visible;\n               overflow: initial\n          }\n\n          body {\n               background-color: #fff;\n               color: #000;\n               font-family: \"SC Sans Web\", \"SC Sans\", Arial, sans-serif;\n               font-weight: 300;\n               line-height: 1.4;\n               letter-spacing: .04em;\n               font-size: 100%;\n               width: 100%;\n               min-height: 100%;\n               overflow-x: hidden\n          }\n\n          button {\n               font-family: \"SC Sans Web\", \"SC Sans\", Arial, sans-serif\n          }\n\n          a,\n          button {\n               outline: 0\n          }\n\n          a {\n               color: #007932\n          }\n\n          h1,\n          h2,\n          h3 {\n               color: #000\n          }\n\n          h1 {\n               font-size: 1.5em;\n               line-height: 1.25;\n               letter-spacing: .02em\n          }\n\n          h2 {\n               font-size: 1.375em;\n               line-height: 1.25;\n               letter-spacing: .02em\n          }\n\n          h3 {\n               font-size: 1.1875em;\n               line-height: 1.25;\n               letter-spacing: .02em\n          }\n\n          p {\n               font-size: .875em\n          }\n\n          li,\n          p {\n               color: #555;\n               margin-bottom: 8px\n          }\n\n          button {\n               border: 0;\n               background-color: transparent\n          }\n\n          .sc-content-wrapper {\n               width: 100%;\n               padding: 0 16px;\n               max-width: 1404px;\n               margin-left: auto;\n               margin-right: auto\n          }\n\n          .sc-hidden {\n               position: absolute;\n               overflow: hidden;\n               clip: rect(0 0 0 0);\n               width: 1px;\n               height: 1px;\n               padding: 0;\n               border: 0\n          }\n\n          .only-desktop {\n               display: none\n          }\n\n          .only-mobile {\n               display: block\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin-italic.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin-italic.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin-italic.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin-italic.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin-italic.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin-italic.svg#sc-sans-web-ultra-thin-italic) format(\"svg\");\n               font-weight: 100;\n               font-style: italic;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-light-italic.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-light-italic.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light-italic.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light-italic.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light-italic.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light-italic.svg#sc-sans-web-light-italic) format(\"svg\");\n               font-weight: 300;\n               font-style: italic;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin.svg#sc-sans-web-thin) format(\"svg\");\n               font-weight: 200;\n               font-style: normal;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-regular.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-regular.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-regular.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-regular.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-regular.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-regular.svg#sc-sans-web-regular) format(\"svg\");\n               font-weight: 400;\n               font-style: normal;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-ultra-thin.svg#sc-sans-web-ultra-thin) format(\"svg\");\n               font-weight: 100;\n               font-style: normal;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin-italic.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin-italic.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin-italic.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin-italic.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin-italic.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-thin-italic.svg#sc-sans-web-thin-italic) format(\"svg\");\n               font-weight: 200;\n               font-style: italic;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold.svg#sc-sans-web-bold) format(\"svg\");\n               font-weight: 700;\n               font-style: normal;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-italic.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-italic.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-italic.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-italic.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-italic.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-italic.svg#sc-sans-web-italic) format(\"svg\");\n               font-weight: 400;\n               font-style: italic;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-light.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-light.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-light.svg#sc-sans-web-light) format(\"svg\");\n               font-weight: 300;\n               font-style: normal;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          @font-face {\n               font-family: 'SC Sans Web';\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold-italic.eot);\n               src: url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold-italic.eot?#iefix) format(\"embedded-opentype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold-italic.woff2) format(\"woff2\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold-italic.woff) format(\"woff\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold-italic.ttf) format(\"truetype\"), url(https://av.sc.com/assets/global/fonts/sc-sans-web-bold-italic.svg#sc-sans-web-bold-italic) format(\"svg\");\n               font-weight: 700;\n               font-style: italic;\n               font-stretch: normal;\n               font-display: swap\n          }\n\n          .tns-outer {\n               padding: 0 !important\n          }\n\n          .tns-slider>.tns-item {\n               -webkit-box-sizing: border-box;\n               box-sizing: border-box\n          }\n\n          .tns-horizontal.tns-subpixel {\n               white-space: nowrap\n          }\n\n          .tns-horizontal.tns-subpixel>.tns-item {\n               display: inline-block;\n               vertical-align: top;\n               white-space: normal\n          }\n\n          .tns-ovh {\n               overflow: hidden\n          }\n\n          .tns-visually-hidden {\n               position: absolute;\n               left: -10000em\n          }\n\n          .sc-btn {\n               text-decoration: none;\n               text-transform: uppercase;\n               display: -webkit-inline-box;\n               display: -ms-inline-flexbox;\n               display: inline-flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center;\n               border-radius: 50px;\n               font-weight: 400;\n               font-size: .875em;\n               line-height: 1.4;\n               -webkit-box-shadow: none;\n               box-shadow: none;\n               border: 2px solid #008738;\n               background-color: #008738;\n               color: #fff;\n               padding: 1em 1.5em;\n               min-width: 200px;\n               white-space: nowrap\n          }\n\n          .sc-heading {\n               font-weight: 300;\n               margin: 16px 0 24px;\n               color: inherit\n          }\n\n          .sc-img {\n               width: 100%;\n               height: 100%;\n               -o-object-fit: cover;\n               object-fit: cover;\n               -o-object-position: center;\n               object-position: center;\n               font-family: 'object-fit: cover; object-position: center;'\n          }\n\n          .sc-img {\n               width: 100%;\n               height: 100%;\n               -o-object-fit: cover;\n               object-fit: cover;\n               -o-object-position: center;\n               object-position: center;\n               font-family: 'object-fit: cover; object-position: center;'\n          }\n\n          .sc-link-icon {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               color: #555;\n               font-size: .875em;\n               position: relative;\n               margin: 16px 0\n          }\n\n          .sc-link-icon svg {\n               width: 16px;\n               height: 16px;\n               margin-left: .375rem\n          }\n\n          .sc-text {\n               display: block;\n               font-size: .875em;\n               margin: 16px 0;\n               color: inherit\n          }\n\n          .sc-text--large {\n               font-size: 1em\n          }\n\n          .sc-icon {\n               width: 30px;\n               height: 30px;\n               display: -webkit-inline-box;\n               display: -ms-inline-flexbox;\n               display: inline-flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center\n          }\n\n          .sc-icon svg {\n               width: 100%;\n               height: 100%\n          }\n\n          .sc-icon svg path {\n               fill: #0c77b9;\n               stroke-linejoin: round;\n               stroke: #0c77b9\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-inline-buttons__item {\n               display: inline-block;\n               margin: 0 0 16px 0;\n               font-size: 1em\n          }\n\n          .sc-inline-buttons__item:last-child {\n               margin-right: 0\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-bnr-pintiles {\n               background-color: #f6f6f6\n          }\n\n          .sc-bnr-pintiles .sc-bnr__content {\n               max-width: 100%\n          }\n\n          .sc-bnr-pintiles .sc-bnr__wrapper {\n               overflow: hidden;\n               -ms-flex-wrap: wrap;\n               flex-wrap: wrap\n          }\n\n          .sc-bnr-pintiles .sc-bnr__heading {\n               font-size: 1.5em;\n               width: 100%;\n               font-weight: 200;\n               margin-top: 0\n          }\n\n          .sc-bnr-pintiles .sc-bnr__heading {\n               max-width: 600px\n          }\n\n          .sc-bnr-pintiles .sc-carousel {\n               padding-top: 16px\n          }\n\n          .sc-bnr-pintiles .sc-carousel__pintiles-item-wrapper {\n               width: 240px;\n               padding: 4px 12px 4px 4px;\n               display: inline-block;\n               -ms-flex-negative: 0;\n               flex-shrink: 0\n          }\n\n          .sc-bnr-pintiles--container .sc-bnr__content {\n               max-width: 100%\n          }\n\n          .sc-bnr-pintiles--container .sc-bnr__heading {\n               color: #000;\n               font-weight: 300;\n               margin-top: 0;\n               margin-bottom: 8px\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-bnr-pintiles {\n               background-color: #f6f6f6\n          }\n\n          .sc-bnr-pintiles .sc-bnr__content {\n               max-width: 100%\n          }\n\n          .sc-bnr-pintiles .sc-bnr__wrapper {\n               overflow: hidden;\n               -ms-flex-wrap: wrap;\n               flex-wrap: wrap\n          }\n\n          .sc-bnr-pintiles .sc-bnr__heading {\n               font-size: 1.5em;\n               width: 100%;\n               font-weight: 200;\n               margin-top: 0\n          }\n\n          .sc-bnr-pintiles .sc-bnr__heading {\n               max-width: 600px\n          }\n\n          .sc-bnr-pintiles .sc-carousel {\n               padding-top: 16px\n          }\n\n          .sc-bnr-pintiles .sc-carousel__pintiles-item-wrapper {\n               width: 240px;\n               padding: 4px 12px 4px 4px;\n               display: inline-block;\n               -ms-flex-negative: 0;\n               flex-shrink: 0\n          }\n\n          .sc-bnr-pintiles--container .sc-bnr__content {\n               max-width: 100%\n          }\n\n          .sc-bnr-pintiles--container .sc-bnr__heading {\n               color: #000;\n               font-weight: 300;\n               margin-top: 0;\n               margin-bottom: 8px\n          }\n\n          .sc-bnr--masthead {\n               text-align: center;\n               overflow: hidden\n          }\n\n          .sc-bnr--masthead .sc-bnr__heading {\n               font-weight: 700;\n               font-size: 1.25em;\n               margin-bottom: 16px;\n               color: #000;\n               min-height: 45px\n          }\n\n          .sc-bnr--masthead .sc-text {\n               color: #000;\n               margin-bottom: 16px;\n               display: none\n          }\n\n          .sc-bnr--masthead .sc-text--large {\n               font-weight: 400\n          }\n\n          .sc-bnr--masthead .sc-bnr__content {\n               display: block;\n               max-width: 100%\n          }\n\n          .sc-bnr--masthead .sc-bnr__wrapper {\n               min-height: auto\n          }\n\n          .sc-bnr--masthead .sc-inline-buttons__item:last-child {\n               margin-bottom: 0\n          }\n\n          .sc-bnr--masthead .sc-bnr__bg-wrapper {\n               position: relative;\n               height: 270px\n          }\n\n          .sc-bnr--masthead .sc-bnr__bg-wrapper::after {\n               content: none\n          }\n\n          .sc-bnr {\n               position: relative\n          }\n\n          .sc-bnr__wrapper {\n               position: relative;\n               max-width: 1404px;\n               z-index: 1;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               padding: 0 16px;\n               height: 100%;\n               min-height: 320px;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center\n          }\n\n          .sc-bnr__wrapper::after {\n               content: '';\n               min-height: inherit\n          }\n\n          .sc-bnr .only-desktop,\n          .sc-bnr .only-mobile {\n               height: 100%\n          }\n\n          .sc-bnr__bg-wrapper {\n               position: absolute;\n               width: 100%;\n               height: 100%\n          }\n\n          .sc-bnr__bg-wrapper::after {\n               content: '';\n               position: absolute;\n               top: 0;\n               left: 0;\n               width: 100%;\n               height: 100%;\n               background: -webkit-gradient(linear, left top, right top, color-stop(25%, #000), to(transparent));\n               background: linear-gradient(to right, #000 25%, transparent 100%);\n               opacity: .5\n          }\n\n          .sc-bnr__content {\n               color: #fff;\n               width: 100%;\n               max-width: 700px;\n               padding: 32px 0\n          }\n\n          .sc-bnr__text-link {\n               color: inherit\n          }\n\n          .sc-bnr__heading {\n               font-size: 1.375em;\n               line-height: 1.25;\n               letter-spacing: .02em;\n               font-weight: 200;\n               color: #fff;\n               margin: 0 0 24px;\n               width: 100%\n          }\n\n          .sc-bnr .sc-link-icon,\n          .sc-bnr .sc-text {\n               width: 100%;\n               margin: 0 0 16px\n          }\n\n          .sc-bnr .sc-inline-buttons {\n               margin: auto 0 0;\n               width: 100%\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-carousel {\n               width: 100%\n          }\n\n          .sc-carousel__item {\n               position: relative;\n               min-height: 270px\n          }\n\n          .sc-carousel .tns-nav {\n               position: absolute;\n               bottom: 30px;\n               left: 0;\n               right: 0;\n               z-index: 3;\n               text-align: center;\n               display: -webkit-inline-box;\n               display: -ms-inline-flexbox;\n               display: inline-flex;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center\n          }\n\n          .sc-carousel .tns-nav button {\n               width: 30px;\n               height: 25px;\n               background-color: rgba(0, 0, 0, .4);\n               border: 0;\n               padding: 0;\n               position: relative\n          }\n\n          .sc-carousel .tns-nav button:first-child {\n               border-top-left-radius: 15px;\n               border-bottom-left-radius: 15px;\n               width: 34px\n          }\n\n          .sc-carousel .tns-nav button:first-child::after {\n               left: 8px\n          }\n\n          .sc-carousel .tns-nav button:last-child {\n               border-top-right-radius: 15px;\n               border-bottom-right-radius: 15px;\n               width: 35px\n          }\n\n          .sc-carousel .tns-nav button:last-child::after {\n               right: 8px\n          }\n\n          .sc-carousel .tns-nav button::after {\n               content: '';\n               position: absolute;\n               width: 13px;\n               height: 13px;\n               border-radius: 50%;\n               background-color: #fff;\n               opacity: .5;\n               top: 6px;\n               left: 0;\n               right: 0;\n               margin: 0 auto\n          }\n\n          .sc-carousel .tns-nav .tns-nav-active::after {\n               opacity: 1\n          }\n\n          .sc-carousel .tns-controls {\n               position: absolute;\n               z-index: 2;\n               top: calc(50% - 20px);\n               width: 100%;\n               height: 36px\n          }\n\n          .sc-carousel .tns-outer {\n               position: relative\n          }\n\n          .sc-carousel button:disabled {\n               opacity: 0\n          }\n\n          .sc-carousel [data-controls] {\n               width: 35px;\n               height: 35px;\n               background-color: transparent;\n               border: 0;\n               position: absolute;\n               text-indent: -9999px;\n               overflow: hidden\n          }\n\n          .sc-carousel [data-controls]::after,\n          .sc-carousel [data-controls]::before {\n               content: '';\n               display: inline-block;\n               position: absolute;\n               width: 35px;\n               height: 35px;\n               background-size: 17px 17px;\n               background-repeat: no-repeat;\n               background-position: center center\n          }\n\n          .sc-carousel [data-controls]::after {\n               border-radius: 50%;\n               border: 2px solid #e1e1e1;\n               left: 0;\n               top: 0\n          }\n\n          .sc-carousel [data-controls=prev] {\n               left: 5px\n          }\n\n          .sc-carousel [data-controls=prev]::before {\n               background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z' class='arrow' transform='translate(100, 100) rotate(180)' fill='%23e1e1e1'%3E%3C/path%3E%3C/svg%3E\");\n               top: 0;\n               right: 0;\n               left: 0;\n               -webkit-transform: rotate(180deg);\n               -ms-transform: rotate(180deg);\n               transform: rotate(180deg)\n          }\n\n          .sc-carousel [data-controls=next] {\n               right: 5px\n          }\n\n          .sc-carousel [data-controls=next]::before {\n               background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 10,50 L 60,100 L 70,90 L 30,50 L 70,10 L 60,0 Z' class='arrow' transform='translate(100, 100) rotate(180)' fill='%23e1e1e1'%3E%3C/path%3E%3C/svg%3E\");\n               left: 0;\n               top: 0;\n               right: 0\n          }\n\n          .sc-carousel--masthead .sc-carousel__list-masthead {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-carousel--masthead .sc-carousel__item {\n               -ms-flex-negative: 0;\n               flex-shrink: 0;\n               width: 100%;\n               display: inline-block\n          }\n\n          .sc-carousel--masthead .tns-nav {\n               top: 230px;\n               bottom: auto\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-quick-links {\n               padding-top: 8px;\n               padding-bottom: 8px;\n               position: relative\n          }\n\n          .sc-quick-links__list {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-quick-links__gradient-fade {\n               position: absolute;\n               width: 40px;\n               height: 100%;\n               top: 0;\n               bottom: 0;\n               right: 0;\n               z-index: 1;\n               background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(white));\n               background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 100%)\n          }\n\n          .sc-quick-links__item {\n               border-right: 1px solid #e1e1e1;\n               padding: 8px;\n               width: 100%;\n               min-width: 110px;\n               margin: 0\n          }\n\n          .sc-quick-links__item:last-child {\n               border: 0\n          }\n\n          .sc-quick-links .sc-icon {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: end;\n               -ms-flex-align: end;\n               align-items: flex-end;\n               margin: 0 auto 8px;\n               background-size: contain;\n               background-position: center bottom;\n               width: 35px;\n               height: 35px\n          }\n\n          .sc-quick-links__link {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-orient: vertical;\n               -webkit-box-direction: normal;\n               -ms-flex-direction: column;\n               flex-direction: column;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               color: #000\n          }\n\n          .sc-quick-links__title {\n               font-size: .875em;\n               font-weight: 300;\n               text-align: center\n          }\n\n          .sc-quick-links .sc-content-wrapper {\n               padding-left: 0;\n               padding-right: 0\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-grid-tile {\n               max-width: 675px;\n               position: relative;\n               background-color: #fff;\n               -webkit-transform: translate3d(0, 0, 0);\n               transform: translate3d(0, 0, 0);\n               color: #000\n          }\n\n          .sc-grid-tile__image {\n               overflow: hidden;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-grid-tile__content {\n               width: 100%;\n               padding: 16px 16px 40px;\n               height: 200px;\n               position: relative\n          }\n\n          .sc-grid-tile .sc-heading {\n               font-size: 1em;\n               height: 41px;\n               overflow: hidden;\n               font-weight: 400;\n               margin-bottom: .75rem;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-text {\n               height: 97px;\n               overflow: hidden;\n               margin-bottom: 8px;\n               margin-top: 0\n          }\n\n          .sc-grid-tile .sc-link-icon {\n               margin: 0;\n               position: absolute;\n               bottom: 16px;\n               left: 16px;\n               font-size: .75em;\n               max-width: 150px\n          }\n\n          .sc-hdr {\n               position: relative;\n               height: 79px;\n               width: 100%;\n               top: 0;\n               z-index: 9999;\n               background: #fff;\n               -webkit-box-shadow: 0 2px 13px 0 rgba(0, 0, 0, .25);\n               box-shadow: 0 2px 13px 0 rgba(0, 0, 0, .25)\n          }\n\n          .sc-hdr__wrapper {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-hdr__container {\n               width: 100%;\n               height: 100%;\n               max-width: 1404px;\n               margin: 0 auto;\n               background: #fff\n          }\n\n          .sc-hdr__nav {\n               width: 100%;\n               height: 100%;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-pack: justify;\n               -ms-flex-pack: justify;\n               justify-content: space-between\n          }\n\n          .sc-hdr__login-open-btn {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex\n          }\n\n          .sc-hdr li,\n          .sc-hdr p,\n          .sc-hdr ul {\n               margin: 0\n          }\n\n          .sc-hdr__btn {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               border: 0;\n               background: 0 0\n          }\n\n          .sc-hdr__account-btn {\n               background: #fff;\n               color: #008738;\n               border: 1px solid #008738;\n               width: 140px;\n               height: 32px;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center;\n               text-transform: uppercase;\n               font-size: 11px\n          }\n\n          .sc-hdr__account-btn svg {\n               width: 16px;\n               height: 16px\n          }\n\n          .sc-hdr__menu {\n               padding: 8px 16px;\n               background: #fff;\n               color: #000;\n               font-size: .875em;\n               height: 79px;\n               -webkit-box-pack: left;\n               -ms-flex-pack: left;\n               justify-content: left;\n               width: 100%;\n               font-weight: 300;\n               border-bottom: 1px solid #e1e1e1\n          }\n\n          .sc-hdr__menu .sc-hdr__icon {\n               width: auto;\n               margin-right: 8px;\n               height: auto\n          }\n\n          .sc-hdr__menu .sc-hdr__icon svg {\n               width: 22px;\n               height: 26px;\n               margin-right: 4px\n          }\n\n          .sc-hdr__menu .sc-hdr__icon--m-icon {\n               margin-left: 4px\n          }\n\n          .sc-hdr__menu .sc-hdr__icon--m-icon svg {\n               width: 7px;\n               height: 7px\n          }\n\n          .sc-hdr__menu .sc-hdr__icon--m-icon svg path {\n               fill: #b7b7b7\n          }\n\n          .sc-hdr__highlight {\n               border-bottom: 1px solid #008738;\n               color: #008738;\n               margin-left: 4px;\n               display: block\n          }\n\n          .sc-hdr__menu-sectors {\n               background: #fafafa;\n               position: fixed;\n               top: 0;\n               z-index: 1;\n               font-weight: 300;\n               display: none\n          }\n\n          .sc-hdr__search .sc-hdr__icon {\n               width: auto;\n               margin-top: 4px\n          }\n\n          .sc-hdr__search path {\n               fill: #b7b7b7\n          }\n\n          .sc-hdr__hamburger {\n               padding: 16px\n          }\n\n          .sc-hdr__logo {\n               width: 80px;\n               margin-left: auto;\n               -ms-flex-negative: 0;\n               flex-shrink: 0\n          }\n\n          .sc-hdr__logo-link-new {\n               display: block;\n               width: 100%;\n               height: 100%;\n               background-image: url(https://av.sc.com/assets/global/images/components/header/logo.svg);\n               background-repeat: no-repeat;\n               background-position: center;\n               background-size: 80px 40px\n          }\n\n          .sc-hdr__logo span {\n               position: absolute;\n               overflow: hidden;\n               clip: rect(0 0 0 0);\n               width: 1px;\n               height: 1px;\n               padding: 0;\n               border: 0\n          }\n\n          .sc-hdr__login {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center\n          }\n\n          .sc-hdr__login-btn {\n               width: 128px;\n               height: 32px;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center;\n               text-transform: uppercase;\n               background-color: #008738;\n               color: #fff;\n               font-size: .75em\n          }\n\n          .sc-hdr__login-btn .sc-hdr__icon {\n               margin-right: 4px\n          }\n\n          .sc-hdr__login-btn path {\n               fill: #fff\n          }\n\n          .sc-hdr .sc-hdr__icon-right {\n               margin-left: 4px\n          }\n\n          .sc-hdr__open-account {\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               margin-right: 16px;\n               display: none\n          }\n\n          .sc-hdr__close-button {\n               width: 48px;\n               height: 48px;\n               position: fixed;\n               z-index: 3;\n               top: 16px;\n               right: 5px;\n               display: none\n          }\n\n          .sc-hdr__close-button::after,\n          .sc-hdr__close-button::before {\n               position: absolute;\n               top: 12px;\n               left: 50%;\n               width: 1px;\n               height: 24px;\n               content: ' ';\n               font-weight: 700;\n               background-color: #b7b7b7\n          }\n\n          .sc-hdr__close-button::before {\n               -webkit-transform: rotate(45deg);\n               -ms-transform: rotate(45deg);\n               transform: rotate(45deg)\n          }\n\n          .sc-hdr__close-button::after {\n               -webkit-transform: rotate(-45deg);\n               -ms-transform: rotate(-45deg);\n               transform: rotate(-45deg)\n          }\n\n          .sc-hdr__mgnv-wrapper {\n               display: none\n          }\n\n          .sc-hdr__back {\n               width: 48px;\n               height: 48px;\n               position: fixed;\n               z-index: 2;\n               top: 16px;\n               display: none;\n               padding: 0\n          }\n\n          .sc-hdr__back::after,\n          .sc-hdr__back::before {\n               position: absolute;\n               left: 20px;\n               width: 1px;\n               height: 12px;\n               content: '';\n               font-weight: 700;\n               background-color: #b7b7b7\n          }\n\n          .sc-hdr__back::before {\n               -webkit-transform: rotate(45deg);\n               -ms-transform: rotate(45deg);\n               transform: rotate(45deg);\n               -webkit-transform-origin: bottom;\n               -ms-transform-origin: bottom;\n               transform-origin: bottom;\n               top: 12px\n          }\n\n          .sc-hdr__back::after {\n               -webkit-transform: rotate(-45deg);\n               -ms-transform: rotate(-45deg);\n               transform: rotate(-45deg);\n               -webkit-transform-origin: top;\n               -ms-transform-origin: top;\n               transform-origin: top;\n               top: 24px\n          }\n\n          .sc-hdr__list {\n               padding-top: 79px;\n               width: 100%;\n               height: 100%;\n               background: #fff;\n               z-index: 1;\n               position: fixed;\n               display: none;\n               overflow: auto\n          }\n\n          .sc-hdr .sc-carousel {\n               height: 196px;\n               margin-top: 16px;\n               padding-left: 16px\n          }\n\n          .sc-hdr .sc-carousel__item-wrapper {\n               display: inline-block;\n               vertical-align: top;\n               height: 100%;\n               width: 200px;\n               padding-right: 16px;\n               -ms-flex-negative: 0;\n               flex-shrink: 0\n          }\n\n          .sc-hdr .sc-carousel__section-list {\n               height: 190px;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               overflow: scroll\n          }\n\n          .sc-hdr .sc-carousel__item {\n               height: 180px;\n               position: relative;\n               display: block;\n               -webkit-transform: translate3d(0, 0, 0) rotateZ(.01deg);\n               transform: translate3d(0, 0, 0) rotateZ(.01deg);\n               border: 1px solid #e1e1e1;\n               background-color: #fff;\n               min-height: auto\n          }\n\n          .sc-hdr .sc-carousel__cover {\n               height: 79px;\n               display: inline-block;\n               width: calc(100% + 2px);\n               background-repeat: no-repeat;\n               background-position: center center;\n               background-size: cover;\n               margin: -1px 0 0 -1px\n          }\n\n          .sc-hdr .sc-carousel__info {\n               padding: 8px\n          }\n\n          .sc-hdr .sc-carousel__info-title {\n               font-size: .75em;\n               line-height: 19px;\n               overflow: hidden;\n               height: auto;\n               max-height: 80px;\n               color: #000\n          }\n\n          .sc-hdr .sc-carousel .tns-controls {\n               display: block\n          }\n\n          .sc-mgnv .sc-hdr__icon svg {\n               width: 11px;\n               height: 6px;\n               margin-left: 4px\n          }\n\n          .sc-mgnv svg path {\n               fill: #d3d3d3\n          }\n\n          .sc-mgnv__location {\n               min-width: 175px;\n               padding: 8px 16px;\n               background: #fafafa;\n               position: fixed;\n               top: 0;\n               z-index: 1;\n               font-weight: 300\n          }\n\n          .sc-mgnv__location .sc-hdr__icon {\n               margin-left: 4px\n          }\n\n          .sc-mgnv__item-icon svg {\n               height: 43px;\n               max-width: 60px\n          }\n\n          .sc-mgnv__item-label {\n               font-size: .875em;\n               font-weight: 400;\n               line-height: 24px;\n               margin: 24px 0 8px;\n               color: #000\n          }\n\n          .sc-mgnv__item-desc {\n               font-size: .75em;\n               line-height: 20px;\n               color: #555\n          }\n\n          .sc-mgnv__view-all .sc-hdr__icon,\n          .sc-mgnv__view-all-link {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center\n          }\n\n          .sc-mgnv__view-all .sc-hdr__icon svg {\n               width: 20px;\n               height: 21px;\n               margin-left: 4px\n          }\n\n          .sc-mgnv__list li a {\n               display: block;\n               color: #000;\n               font-size: .875em\n          }\n\n          .sc-mgnv__list li a,\n          .sc-mgnv__view-all-link {\n               padding: 24px 24px 24px 40px;\n               border-bottom: 1px solid #e1e1e1;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               color: #000;\n               font-size: .875em;\n               background: #fafafa\n          }\n\n          .sc-m-cat__country {\n               color: #008738;\n               padding: 0;\n               border-bottom: 1px solid #e1e1e1;\n               margin-left: 4px;\n               font-weight: 300\n          }\n\n          .sc-m-cat__link {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               position: relative;\n               border: 1px solid #e1e1e1;\n               margin: -1px 0 0 -1px;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               height: 80px;\n               font-weight: 400;\n               color: #000;\n               width: 100%;\n               padding: 8px 16px\n          }\n\n          .sc-m-cat__link .sc-hdr__icon svg {\n               width: 25px;\n               height: 25px\n          }\n\n          .sc-m-cat__link span {\n               display: inline-block\n          }\n\n          .sc-m-cat__link .sc-m-cat__name {\n               font-weight: 300;\n               font-size: .875em;\n               width: calc(100% - 25px)\n          }\n\n          .sc-m-cat .sc-mgnv__title {\n               padding: 32px 24px;\n               background: #f6f6f6;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-pack: center;\n               -ms-flex-pack: center;\n               justify-content: center;\n               text-align: center;\n               font-size: .875em\n          }\n\n          .sc-m-cat .sc-m-cat__sublinks-links {\n               display: block;\n               font-size: .875em;\n               color: #555;\n               padding-top: 8px\n          }\n\n          .sc-m-cat .sc-m-cat__sublinks-links a {\n               padding-right: 8px;\n               margin-right: 8px;\n               border-right: 1px solid #e1e1e1;\n               font-weight: 300\n          }\n\n          .sc-m-cat .sc-m-cat__sublinks-links a:last-child {\n               border: 0\n          }\n\n          .sc-m-prd {\n               display: block;\n               min-height: auto\n          }\n\n          .sc-m-prd__section {\n               display: block;\n               text-transform: uppercase;\n               font-size: .75em;\n               background: #fafafa;\n               padding: 16px;\n               color: #008738;\n               font-weight: 400;\n               border-bottom: 1px solid rgba(225, 225, 225, .5);\n               width: 100%;\n               text-align: left\n          }\n\n          .sc-m-prd__label {\n               width: 100%;\n               font-size: .875em;\n               font-weight: 300;\n               text-align: left;\n               background: #fafafa;\n               padding: 16px 16px 16px 40px;\n               border-bottom: 1px solid rgba(225, 225, 225, .5)\n          }\n\n          .sc-m-prd__col-label {\n               font-size: .625em;\n               font-weight: 700;\n               text-transform: uppercase;\n               position: relative;\n               display: block;\n               color: #008738;\n               padding: 16px\n          }\n\n          .sc-m-prd__col-label--empty {\n               visibility: hidden;\n               height: auto\n          }\n\n          .sc-m-prd__desc {\n               font-size: .875em;\n               line-height: 1.4\n          }\n\n          .sc-m-prd__col-label,\n          .sc-m-prd__link {\n               display: block;\n               border-bottom: 1px solid rgba(225, 225, 225, .5)\n          }\n\n          .sc-m-prd__link {\n               color: #000;\n               padding: 16px 16px 16px 32px;\n               font-size: .875em\n          }\n\n          .sc-m-prd__col-label--empty,\n          .sc-m-prd__desc {\n               display: none\n          }\n\n          .sc-m-prd__content {\n               position: absolute;\n               background: #fff;\n               width: 100%;\n               top: 79px;\n               display: none\n          }\n\n          .sc-minimgnv {\n               position: fixed;\n               width: 100%;\n               height: 100%;\n               background: #fff;\n               top: 0;\n               left: 0;\n               display: none\n          }\n\n          .sc-minimgnv .sc-hdr__icon svg {\n               width: 24px;\n               height: 24px\n          }\n\n          .sc-minimgnv__title {\n               height: 79px;\n               background: #fafafa;\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               padding: 24px;\n               color: #008738;\n               font-size: .875em\n          }\n\n          .sc-minimgnv__link {\n               display: -webkit-box;\n               display: -ms-flexbox;\n               display: flex;\n               padding: 16px;\n               height: 78px;\n               -webkit-box-align: center;\n               -ms-flex-align: center;\n               align-items: center;\n               border-bottom: 1px solid #e1e1e1;\n               background: #fff;\n               color: #0c77b9;\n               font-size: .875em\n          }\n\n          .sc-minimgnv__link .sc-hdr__icon {\n               margin-left: auto\n          }\n\n          .sc-minimgnv__bank-login {\n               background: #fafafa;\n               border-bottom: 0;\n               color: #000\n          }\n\n          @media (min-width:600px) {\n               h1 {\n                    font-size: 2.125em\n               }\n\n               h2 {\n                    font-size: 1.875em\n               }\n\n               h3 {\n                    font-size: 1.5em\n               }\n\n               .sc-content-wrapper {\n                    padding: 0 32px\n               }\n\n               .only-desktop {\n                    display: block\n               }\n\n               .only-mobile {\n                    display: none\n               }\n\n               .sc-icon {\n                    width: 45px;\n                    height: 45px\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-inline-buttons__item {\n                    margin: 0 24px 16px 0\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-bnr__heading {\n                    font-size: 1.875em\n               }\n\n               .sc-bnr__wrapper {\n                    padding: 0 32px;\n                    margin: 0 auto\n               }\n\n               .sc-bnr__content {\n                    padding: 40px 0\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-quick-links__gradient-fade,\n               .sc-quick-links__list::after {\n                    display: none\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-grid-tile .sc-link-icon {\n                    opacity: 0\n               }\n\n               .sc-hdr__open-account {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex\n               }\n          }\n\n          @media (min-width:1024px) {\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               .sc-bnr-pintiles .sc-bnr__heading {\n                    font-size: 2.9375em\n               }\n\n               .sc-bnr-pintiles .sc-carousel__pintiles-item-wrapper {\n                    width: 20%\n               }\n\n               .sc-bnr-pintiles .sc-carousel [data-controls=next] {\n                    right: 30px\n               }\n\n               .sc-bnr-pintiles--container .sc-bnr__heading {\n                    font-size: 1.375em;\n                    line-height: 1.25;\n                    letter-spacing: .02em;\n                    margin: 0\n               }\n\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               .sc-bnr-pintiles .sc-bnr__heading {\n                    font-size: 2.9375em\n               }\n\n               .sc-bnr-pintiles .sc-carousel__pintiles-item-wrapper {\n                    width: 20%\n               }\n\n               .sc-bnr-pintiles .sc-carousel [data-controls=next] {\n                    right: 30px\n               }\n\n               .sc-bnr-pintiles--container .sc-bnr__heading {\n                    font-size: 1.375em;\n                    line-height: 1.25;\n                    letter-spacing: .02em;\n                    margin: 0\n               }\n\n               .sc-bnr--masthead {\n                    text-align: left\n               }\n\n               .sc-bnr--masthead .sc-bnr__wrapper {\n                    min-height: 400px;\n                    -webkit-box-align: center;\n                    -ms-flex-align: center;\n                    align-items: center\n               }\n\n               .sc-bnr--masthead .sc-bnr__heading {\n                    font-size: 2.9375em;\n                    color: #fff;\n                    margin-bottom: 24px\n               }\n\n               .sc-bnr--masthead .sc-text {\n                    color: #fff;\n                    margin-bottom: 32px;\n                    display: block\n               }\n\n               .sc-bnr--masthead .sc-bnr__content {\n                    max-width: 800px\n               }\n\n               .sc-bnr--masthead .sc-bnr__bg-wrapper {\n                    position: absolute;\n                    height: 100%\n               }\n\n               .sc-bnr--masthead .sc-bnr__bg-wrapper::after {\n                    content: ''\n               }\n\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               .sc-carousel__item {\n                    min-height: 400px\n               }\n\n               .sc-carousel--masthead .tns-nav {\n                    top: auto;\n                    bottom: 30px\n               }\n\n               .sc-carousel--masthead .sc-bnr--masthead {\n                    height: 100%\n               }\n\n               .sc-carousel [data-controls=prev] {\n                    left: 17px\n               }\n\n               .sc-carousel [data-controls=next] {\n                    right: 14px\n               }\n\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               .sc-quick-links {\n                    padding-top: 24px;\n                    padding-bottom: 24px;\n                    min-height: 142px\n               }\n\n               .sc-quick-links__title {\n                    font-size: 1.125em\n               }\n\n               .sc-quick-links .sc-content-wrapper {\n                    padding-left: 32px;\n                    padding-right: 32px\n               }\n\n               .sc-quick-links .sc-icon {\n                    width: 48px;\n                    height: 48px\n               }\n\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               .sc-grid-tile__image {\n                    min-height: 180px\n               }\n\n               body {\n                    padding-top: 58px\n               }\n\n               .sc-hdr {\n                    position: fixed;\n                    height: 58px\n               }\n\n               .sc-hdr__logo {\n                    width: 160px;\n                    text-align: right;\n                    margin-left: 0\n               }\n\n               .sc-hdr__logo-link-new {\n                    background-size: 106px 40px;\n                    background-image: url(https://av.sc.com/assets/global/images/components/header/logo-sc.svg)\n               }\n\n               .sc-hdr__login {\n                    margin-left: auto;\n                    position: relative\n               }\n\n               .sc-hdr__highlight {\n                    border: 0\n               }\n\n               .sc-hdr__list {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-align: center;\n                    -ms-flex-align: center;\n                    align-items: center;\n                    padding-top: 0;\n                    position: inherit;\n                    width: auto;\n                    overflow: visible\n               }\n\n               .sc-hdr__search .sc-hdr__icon {\n                    width: auto;\n                    margin-top: 4px\n               }\n\n               .sc-hdr__search .sc-hdr__icon svg path {\n                    fill: #555\n               }\n\n               .sc-hdr__item {\n                    padding: 0 2px\n               }\n\n               .sc-hdr__overlay::after {\n                    content: '';\n                    position: absolute;\n                    left: 0;\n                    width: 100vw;\n                    height: 0;\n                    top: 58px;\n                    background-color: rgba(0, 0, 0, .6);\n                    z-index: -1;\n                    opacity: 0\n               }\n\n               .sc-hdr__menu {\n                    height: 58px;\n                    -webkit-box-pack: center;\n                    -ms-flex-pack: center;\n                    justify-content: center;\n                    font-weight: 400;\n                    padding: 8px 24px;\n                    border: 0;\n                    background: #fff\n               }\n\n               .sc-hdr__menu--home {\n                    padding: 8px 16px;\n                    background-color: rgba(225, 225, 225, .4);\n                    width: 58px\n               }\n\n               .sc-hdr__menu .sc-hdr__icon {\n                    width: 7px;\n                    height: 16px\n               }\n\n               .sc-hdr__menu .sc-hdr__icon svg {\n                    width: 22px;\n                    height: 16px\n               }\n\n               .sc-hdr__menu-sectors {\n                    position: static\n               }\n\n               .sc-hdr__mgnv-wrapper {\n                    position: absolute;\n                    left: 0;\n                    top: 58px;\n                    width: 100%;\n                    background: #fff;\n                    border-top: 1px solid #e1e1e1;\n                    visibility: hidden;\n                    opacity: 0;\n                    display: block\n               }\n\n               .sc-hdr__login-open-btn {\n                    margin-left: auto\n               }\n\n               .sc-hdr .sc-carousel {\n                    height: 250px;\n                    margin-top: 0;\n                    padding-left: 0\n               }\n\n               .sc-hdr .sc-carousel__section-list {\n                    position: relative;\n                    height: 250px;\n                    overflow: hidden\n               }\n\n               .sc-hdr .sc-carousel__item-wrapper {\n                    min-width: 230px;\n                    width: 33.33%;\n                    -ms-flex-negative: 0;\n                    flex-shrink: 0\n               }\n\n               .sc-hdr .sc-carousel__item {\n                    height: 240px;\n                    margin: 4px\n               }\n\n               .sc-hdr .sc-carousel__cover {\n                    height: 155px\n               }\n\n               .sc-hdr .sc-carousel__info {\n                    padding: 16px 16px 0\n               }\n\n               .sc-hdr .sc-carousel__info-title {\n                    font-size: .875em;\n                    font-weight: 400\n               }\n\n               .sc-mgnv {\n                    position: relative;\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    width: 100%;\n                    padding: 16px 0\n               }\n\n               .sc-mgnv__left {\n                    width: 256px;\n                    line-height: 27px;\n                    padding: 16px\n               }\n\n               .sc-mgnv__location {\n                    padding: 8px 24px;\n                    position: static;\n                    background-color: #fff;\n                    font-weight: 400\n               }\n\n               .sc-mgnv__location .sc-hdr__icon svg {\n                    width: 7px;\n                    height: 16px\n               }\n\n               .sc-mgnv__title {\n                    line-height: 27px;\n                    color: #000;\n                    font-size: 1.25em\n               }\n\n               .sc-mgnv__list {\n                    padding-top: 16px\n               }\n\n               .sc-mgnv__right {\n                    width: calc(100% - 256px);\n                    border-left: 1px solid #e1e1e1;\n                    overflow: hidden;\n                    padding: 0 24px 56px;\n                    position: relative;\n                    margin: 0\n               }\n\n               .sc-mgnv__item-wrapper {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    margin-left: -16px\n               }\n\n               .sc-mgnv__item {\n                    position: relative;\n                    padding: 4px 24px 56px;\n                    -ms-flex-preferred-size: 0;\n                    flex-basis: 0;\n                    -webkit-box-flex: 1;\n                    -ms-flex-positive: 1;\n                    flex-grow: 1\n               }\n\n               .sc-mgnv__item:last-of-type::after {\n                    display: none\n               }\n\n               .sc-mgnv__item::after {\n                    content: '';\n                    width: 1px;\n                    height: 65%;\n                    background: #e1e1e1;\n                    position: absolute;\n                    right: 0;\n                    top: 20%\n               }\n\n               .sc-mgnv__item-link {\n                    position: absolute;\n                    bottom: 4px;\n                    min-width: 120px;\n                    border: 2px solid #e1e1e1;\n                    text-transform: uppercase;\n                    color: #555;\n                    text-align: center;\n                    padding: 8px 16px;\n                    font-size: .625em;\n                    font-weight: 400;\n                    border-radius: 30px;\n                    line-height: 1.4\n               }\n\n               .sc-mgnv__view-all {\n                    border-top: 1px solid #e1e1e1;\n                    padding-top: 16px;\n                    position: absolute;\n                    bottom: 0;\n                    left: 24px;\n                    right: 4px;\n                    padding-bottom: 4px;\n                    width: calc(100% - 60px)\n               }\n\n               .sc-mgnv__view-all-link {\n                    -webkit-box-pack: center;\n                    -ms-flex-pack: center;\n                    justify-content: center;\n                    font-weight: 400;\n                    color: #555;\n                    font-size: .75em\n               }\n\n               .sc-mgnv__list li a,\n               .sc-mgnv__view-all-link {\n                    padding: 0;\n                    border-bottom: 0;\n                    background: #fff\n               }\n\n               .sc-m-cat {\n                    padding: 16px 24px\n               }\n\n               .sc-m-cat__country {\n                    margin-left: 0;\n                    font-size: .875em\n               }\n\n               .sc-m-cat__link {\n                    width: 50%;\n                    padding: 0 24px\n               }\n\n               .sc-m-cat__link .sc-hdr__icon svg {\n                    width: 25px;\n                    height: 25px\n               }\n\n               .sc-m-cat .sc-m-cat__name {\n                    font-weight: 400\n               }\n\n               .sc-m-cat__right {\n                    width: calc(100% - 256px);\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -ms-flex-wrap: wrap;\n                    flex-wrap: wrap;\n                    border-top: 1px solid #e1e1e1\n               }\n\n               .sc-m-cat .sc-mgnv__title {\n                    padding: 0;\n                    background: #fff;\n                    border-top: 0;\n                    text-align: left;\n                    display: block;\n                    font-size: 1.25em\n               }\n\n               .sc-m-prd {\n                    display: block;\n                    background: #fafafa;\n                    min-height: 240px\n               }\n\n               .sc-m-prd__section {\n                    width: 254px;\n                    text-align: right;\n                    color: #555;\n                    font-weight: 300;\n                    border-bottom: 0;\n                    padding: 16px 16px 16px 32px\n               }\n\n               .sc-m-prd__section .sc-hdr__icon {\n                    display: inline-block;\n                    width: 16px\n               }\n\n               .sc-m-prd__subsec2 {\n                    position: relative\n               }\n\n               .sc-m-prd__subsec2::before {\n                    content: '';\n                    width: 40px;\n                    height: 1px;\n                    background: #e1e1e1;\n                    top: 0;\n                    right: 20px;\n                    position: absolute\n               }\n\n               .sc-m-prd__subsec1 {\n                    padding-top: 24px\n               }\n\n               .sc-m-prd__list {\n                    width: 256px;\n                    visibility: hidden;\n                    display: block;\n                    height: 0;\n                    overflow: hidden;\n                    padding-bottom: 16px\n               }\n\n               .sc-m-prd__list--active {\n                    height: auto\n               }\n\n               .sc-m-prd__item {\n                    margin-top: 4px;\n                    padding-right: 4px\n               }\n\n               .sc-m-prd .sc-hdr__hover-item .sc-m-prd__label {\n                    color: #008738\n               }\n\n               .sc-m-prd__col-label,\n               .sc-m-prd__link {\n                    padding: 0;\n                    border-bottom: 0;\n                    color: #555\n               }\n\n               .sc-m-prd__label {\n                    -webkit-box-pack: end;\n                    -ms-flex-pack: end;\n                    justify-content: flex-end;\n                    padding: 4px 16px;\n                    border-bottom: 0;\n                    height: 26px;\n                    margin-top: 2px\n               }\n\n               .sc-m-prd__content {\n                    width: calc(100% - 256px);\n                    top: 0;\n                    right: 0;\n                    height: 100%;\n                    padding: 16px;\n                    background: #fff;\n                    visibility: hidden;\n                    display: block\n               }\n\n               .sc-m-prd__content .sc-mgnv__view-all {\n                    bottom: 20px\n               }\n\n               .sc-m-prd__col {\n                    padding: 4px 24px\n               }\n\n               .sc-m-prd__col-label {\n                    padding: 0 0 24px\n               }\n\n               .sc-m-prd__col-label::after {\n                    content: '';\n                    position: absolute;\n                    left: 0;\n                    top: 15px;\n                    width: 50px;\n                    height: 1px;\n                    background: #b7b7b7\n               }\n\n               .sc-m-prd__col-label--empty {\n                    height: 35px;\n                    display: block\n               }\n\n               .sc-m-prd__col-label--empty,\n               .sc-m-prd__desc {\n                    display: block\n               }\n\n               .sc-m-prd__col-item {\n                    padding-bottom: 16px\n               }\n\n               .sc-m-prd__link {\n                    font-size: .625em;\n                    text-transform: uppercase;\n                    font-weight: 700;\n                    line-height: 17px;\n                    color: #000\n               }\n\n               .sc-minimgnv {\n                    position: absolute;\n                    width: 292px;\n                    top: 100%;\n                    left: -80px;\n                    border: 1px solid #e1e1e1;\n                    visibility: hidden;\n                    opacity: 0;\n                    height: auto\n               }\n\n               .sc-minimgnv__title {\n                    height: auto;\n                    background: #fff;\n                    padding: 0;\n                    display: none\n               }\n\n               .sc-minimgnv__link-first::after,\n               .sc-minimgnv__link-first::before {\n                    display: block;\n                    position: absolute;\n                    content: '';\n                    top: -18px;\n                    left: 136px;\n                    border: 9px solid transparent;\n                    border-bottom-color: #e1e1e1\n               }\n\n               .sc-minimgnv__link-first::after {\n                    top: -16px;\n                    border-bottom-color: #fff\n               }\n          }\n\n          @media (min-width:1024px) and (min-width:600px) {\n               .sc-bnr-pintiles--container .sc-bnr__heading {\n                    font-size: 1.875em\n               }\n\n               .sc-bnr-pintiles--container .sc-bnr__heading {\n                    font-size: 1.875em\n               }\n          }\n\n          @media (max-width:1023.98px) {\n               .sc-hdr .only-mobile {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex\n               }\n\n               .sc-hdr .only-desktop {\n                    display: none\n               }\n          }\n\n          @media (max-width:1139.98px) and (min-width:1023.98px) {\n               .sc-hdr__menu {\n                    padding: 8px 16px\n               }\n\n               .sc-hdr .sc-mgnv__location {\n                    min-width: auto\n               }\n\n               .sc-hdr__login-btn {\n                    width: 95px\n               }\n\n               .sc-hdr__logo {\n                    width: 130px\n               }\n\n               .sc-hdr__logo-link-new {\n                    background-size: 95px 40px\n               }\n          }\n\n          /* NOTE: This styles can't be in a external stylesheet due to browsers bug */\n          .no-touchevents .hover-icon-with-gradient-blue-to-green:hover .hover-icon svg path {\n               fill: url('#gradient-blue-to-green');\n          }\n     " }} />
        <link rel="canonical" href="https://www.sc.com/ng/" />
        <title>Standard Chartered Nigeria | Here for Good</title>
        <meta name="robots" content="max-image-preview:large" />
        <link href="//stanchartafrica.sc.omtrdc.net" rel="dns-prefetch" />
        <link href="//stanchartafrica.tt.omtrdc.net" rel="dns-prefetch" />
        <link href="//dpm.demdex.net" rel="dns-prefetch" />
        <link href="//stanchartafrica.demdex.net" rel="dns-prefetch" />
        <link rel="dns-prefetch" href="//av.sc.com" />
        <link rel="dns-prefetch" href="//ocsp.digicert.com" />
        <link rel="dns-prefetch" href="//s3-ap-southeast-1.amazonaws.com" />
        <link href="//www.googletagmanager.com" rel="dns-prefetch" crossOrigin />
        <link href="//www.google-analytics.com" rel="dns-prefetch" crossOrigin />
        <link href="//www.google.com" rel="dns-prefetch" crossOrigin />
        <link href="//stats.g.doubleclick.net" rel="dns-prefetch" crossOrigin />
        <link href="//c.go-mpulse.net" rel="dns-prefetch" crossOrigin />
        <link href="//s.go-mpulse.net" rel="dns-prefetch" crossOrigin />
        <link href="//stanchartafrica.sc.omtrdc.net" rel="preconnect" />
        <link href="//stanchartafrica.tt.omtrdc.net" rel="preconnect" />
        <link href="//dpm.demdex.net" rel="preconnect" />
        <link href="//stanchartafrica.demdex.net" rel="preconnect" />
        <meta name="description" content="Explore Standard Chartered Nigeria banking solutions, such as credit cards, loans, deposits, mortgages, investments and insurance for you or your business." />
        {/* WP SEO */}
        <meta name="keywords" content="standard chartered bank, standard chartered online, credit cards, mortgages, bank accounts, commercial banking, investments, loans, insurance" />
        {/* WP SEO */}
        <meta name="sc:country" content="ng" />
        <meta name="sc:segment" content="personal" />
        <meta name="sc:categories" content="home" />
        <meta name="sc:page-slug" content="homepage" />
        <meta name="sc:page-has-no-translation" content />
        <link rel="preload stylesheet" href="https://av.sc.com/assets/global/css/lite/style-base-home.min.css?ver=4eb94f5" as="style" media="all" />{/*[if lte IE 9]>
<link rel='stylesheet' id='meganav-ie-css'  href='https://av.sc.com/assets/global/css/lite/meganav-ie9.min.css?ver=4eb94f5' media='all' />
<![endif]*/}
        <link rel="stylesheet" id="sc-onetrust-cookie-style-css" href="https://av.sc.com/assets/global/css/onetrust-cookie-custom.min.css?ver=4eb94f5" media="all" />
        <meta property="og:site_name" content="Standard Chartered Nigeria" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="apple-itunes-app" content="app-id=650746202" />
        <meta name="google-play-app" content="app-id=com.sc.breezenigeria.banking&hl=en" />
        <meta name="title" content="Standard Chartered Nigeria | Here for Good" />
        <meta property="og:title" content="Standard Chartered Nigeria | Here for Good" />
        <meta property="og:description" content="Explore Standard Chartered Nigeria banking solutions, such as credit cards, loans, deposits, mortgages, investments and insurance for you or your business." />
        <meta property="og:url" content="https://www.sc.com/ng/" />
        <meta property="og:image" content="https://av.sc.com/ng/content/images/ng-couples-personal-loan-400x-400y.jpg" />
        <meta property="og:image:width" content={400} />
        <meta property="og:image:height" content={400} />
        <meta name="twitter:title" content="Standard Chartered Nigeria | Here for Good" />
        <meta name="twitter:description" content="Explore Standard Chartered Nigeria banking solutions, such as credit cards, loans, deposits, mortgages, investments and insurance for you or your business." />
        <meta name="twitter:image" content="https://av.sc.com/ng/content/images/ng-couples-personal-loan-400x-400y.jpg" />
        <link href="//av.sc.com/assets/global/fonts/sc-sans-web-regular.woff2" rel="preload" as="font" crossOrigin="anonymous" />
        <link href="//av.sc.com/assets/global/fonts/sc-sans-web-light.woff2" rel="preload" as="font" crossOrigin="anonymous" />
        <link href="//av.sc.com/assets/global/fonts/sc-sans-web-bold.woff2" rel="preload" as="font" crossOrigin="anonymous" />
        <link href="//av.sc.com/assets/global/fonts/sc-sans-web-thin.woff2" rel="preload" as="font" crossOrigin="anonymous" />
        <link rel="icon" href="https://av.sc.com/ng/content/images/content/images/cropped-512x512-1-150x150.png" sizes="32x32" />
        <link rel="icon" href="https://av.sc.com/ng/content/images/content/images/cropped-512x512-1-200x200.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://av.sc.com/ng/content/images/content/images/cropped-512x512-1-200x200.png" />
        <meta name="msapplication-TileImage" content="https://av.sc.com/ng/content/images/content/images/cropped-512x512-1-300x300.png" />
        <link rel="android-touch-icon" href="https://av.sc.com/ng/content/images/content/images/cropped-512x512-1-200x200.png" />
        <noscript id="defer-styles">
          &lt;link rel='stylesheet' id='scretail_lite'
          href='https://av.sc.com/assets/global/css/lite/style-base-home.min.css?ver=4eb94f5' media='all' /&gt;
        </noscript>
        <header className="sc-nav">
          <div className="sc-nav__wrapper">
            {/* Top Nav */}
            <div className="sc-nav__top">
              <div className="sc-nav__container sc-nav__top-container">
                <div className="sc-nav__top-left">
                  <div className="sc-nav__top-in">
                    <span>You are in</span>
                    <button className="sc-nav__top-btn">Personal Banking</button>
                    <div className="sc-nav__personal-list">
                      <p className="sc-nav__personal-title">FOR INDIVIDUAL</p>
                      <ul className="sc-nav__personal-lists">
                        <li className="sc-nav__personal-box">
                          <a className="sc-nav__personal-box-link" href="https://www.sc.com/ng/premium/" title="Premium Banking">
                            Premium Banking
                          </a>
                        </li>
                        <li className="sc-nav__personal-box">
                          <a className="sc-nav__personal-box-link" href="https://www.sc.com/ng/priority/" title="Priority Banking">
                            Priority Banking
                          </a>
                        </li>
                        <li className="sc-nav__personal-box">
                          <a className="sc-nav__personal-box-link" href="https://www.sc.com/en/banking/banking-for-individuals/private-banking/" title="Private Banking">
                            Private Banking
                          </a>
                        </li>
                      </ul>
                      <p className="sc-nav__personal-title">FOR BUSINESS</p>
                      <ul className="sc-nav__personal-lists">
                        <li className="sc-nav__personal-box">
                          <a className="sc-nav__personal-box-link" href="https://www.sc.com/en/banking-services/business-banking.html" title="Corporate Banking">
                            Corporate Banking
                          </a>
                        </li>
                        <li className="sc-nav__personal-box">
                          <a className="sc-nav__personal-box-link" href="https://www.sc.com/ng/business/" title="Business Banking">
                            Business Banking
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sc-nav__top-right only-desktop">
                  {/* Desktop screen - Services, Help and Search menu */}
                  <ul className="sc-nav__top-menu only-desktop">
                    <li className="sc-nav__top-item sc-nav__top-item--margin32">
                      <a href="https://www.sc.com/ng/banking/" title="Services">Services </a>
                    </li>
                    <li className="sc-nav__top-item">
                      <a href="https://www.sc.com/ng/banking/sc-mobile/" title="Digital Banking ">
                        Digital Banking </a>
                    </li>
                    {/* Help */}
                    <li className="sc-nav__top-item">
                      <a href="https://www.sc.com/ng/search/" title="Search" aria-label="Search">
                        <svg aria-hidden="true" width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.34 10.903A4.567 4.567 0 0 1 1.778 6.34 4.568 4.568 0 0 1 6.34 1.777a4.569 4.569 0 0 1 4.564 4.564 4.567 4.567 0 0 1-4.564 4.562m8.73 2.721l-3.596-3.592a6.283 6.283 0 0 0 1.208-3.691A6.348 6.348 0 0 0 6.34 0 6.348 6.348 0 0 0 0 6.34a6.347 6.347 0 0 0 6.34 6.34c1.476 0 2.816-.526 3.895-1.374l3.577 3.575a.887.887 0 0 0 1.257 0 .89.89 0 0 0 0-1.257" fill="#221F20" />
                        </svg>
                        <span className="visuallyhidden">Search</span>
                      </a>
                    </li>
                  </ul>
                  <div className="sc-nav__country">
                    <button className="sc-nav__country-btn">Nigeria</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Menubar */}
            <nav className="sc-nav__nav sc-nav__container">
              {/* Logo  */}
              <div className="sc-nav__logo">
                <a href="https://www.sc.com/ng/" className="sc-nav__logo-link" title="Standard Chartered">
                  <span className="visuallyhidden">Standard Chartered</span>
                </a>
                <a href="https://www.sc.com/ng/" className="sc-nav__logo-drop only-desktop" title="Standard Chartered">
                  <span className="visuallyhidden">Standard Chartered</span>
                </a>
              </div>
              {/* Menu Section */}
              <ul className="sc-nav__list">
                {/* Accounts & Deposits */}
                <li className="sc-nav__item sc-nav__item--has-meganav">
                  <button className="sc-nav__btn sc-nav__menu">Accounts &amp; Deposits</button>
                  <div className="sc-nav__mgnv-wrapper">
                    <div className="sc-nav-drop">
                      <button className="sc-nav__btn sc-nav-drop__back sc-nav__back only-mobile">
                        Back
                      </button>
                      <div className="sc-nav-drop__content">
                        <div className="sc-nav-drop__wrapper sc-nav__container">
                          <div className="sc-nav-drop__col-wrapper">
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="CURRENT ACCOUNTS" href="https://www.sc.com/ng/save/current-account/">CURRENT
                                    ACCOUNTS</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="CURRENT ACCOUNT" href="https://www.sc.com/ng/save/current-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        CURRENT ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        Complete solutions for your
                                        day-to-day banking
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="SALARY ACCOUNT" href="https://www.sc.com/ng/save/salary-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        SALARY ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        An account to receive your salary
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="STANDARD CHARTERED WOMEN ACCOUNT (CURRENT)" href="https://www.sc.com/ng/save/women-current-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        STANDARD CHARTERED WOMEN ACCOUNT
                                        (CURRENT)
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        A special account to empower women
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="SAVINGS ACCOUNTS" href="https://www.sc.com/ng/save/savings-account/">SAVINGS
                                    ACCOUNTS</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="SAVINGS ACCOUNT" href="https://www.sc.com/ng/save/savings-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        SAVINGS ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        Enjoy convenient banking services
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="ESAVER ACCOUNT" href="https://www.sc.com/ng/save/esaver/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        ESAVER ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        A high yield savings account
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="MY DREAM ACCOUNT" href="https://www.sc.com/ng/save/my-dream-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        MY DREAM ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        Save for children at an early age
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="sc-nav-drop__col sc-nav-drop__col--no-left-border">
                              <span className="sc-nav-drop__col-spacing" />
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="INSTANT SAVINGS ACCOUNT" href="https://www.sc.com/ng/save/instant-savings-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        INSTANT SAVINGS ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        Enjoy free banking anytime
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="INSTANT PLUS SAVINGS ACCOUNT" href="https://www.sc.com/ng/save/instant-plus-savings-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        INSTANT PLUS SAVINGS ACCOUNT
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        Enjoy Free banking
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="STANDARD CHARTERED WOMEN ACCOUNT (SAVINGS)" href="https://www.sc.com/ng/save/women-savings-account/">
                                    <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                      <p className="sc-nav-drop__link sc-nav-drop__link-indent">
                                        STANDARD CHARTERED WOMEN ACCOUNT
                                        (SAVINGS)
                                      </p>
                                      <p className="sc-nav-drop__desc only-desktop">
                                        A special account to empower women
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* Promotion */}
                            <div className="sc-nav-drop__col sc-nav-drop__col-promo">
                              <a title="Get up to 6.00% interest p.a on your eSaver account" href="https://www.sc.com/ng/save/esaver/">
                                <div className="sc-nav-drop__promo-box">
                                  <img src="https://av.sc.com/ng/content/images/covid-image.jpg" alt="Personal Loans" loading="lazy" width={290} height={150} />
                                  <div className="sc-nav-drop__promo-text">
                                    <p className="sc-nav-drop__promo-title">
                                      Get up to 6.00% interest p.a on your
                                      eSaver account
                                    </p>
                                    <p className="sc-nav-drop__promo-desc">
                                      A Bank in your pocket for the life on
                                      the go
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* View all button */}
                            <div className="sc-nav-drop__view-all">
                              <a href="https://www.sc.com/ng/save/" className="sc-nav-drop__btn">
                                View All Accounts &amp; Deposits
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Loans */}
                <li className="sc-nav__item sc-nav__item--has-meganav">
                  <button className="sc-nav__btn sc-nav__menu">Borrow</button>
                  <div className="sc-nav__mgnv-wrapper">
                    <div className="sc-nav-drop">
                      <button className="sc-nav__btn sc-nav-drop__back sc-nav__back only-mobile">
                        Back
                      </button>
                      <div className="sc-nav-drop__content">
                        <div className="sc-nav-drop__wrapper sc-nav__container">
                          <div className="sc-nav-drop__col-wrapper">
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="Loans" href="https://www.sc.com/ng/borrow/">Loans</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="PERSONAL LOAN" href="https://www.sc.com/ng/borrow/personal-loan/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        PERSONAL LOAN
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        An unsecured personal instalment
                                        loan for your varied needs
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="OVERDRAFT LOAN" href="https://www.sc.com/ng/borrow/overdraft-loan/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        OVERDRAFT LOAN
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        An instant credit with overdraft
                                        facility for Salaried customers
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/*  <div class="sc-nav-drop__col">
                        <div class="sc-nav-drop__col-label">
                          <span><a
                                   title="MORTGAGES"
                                   href="https://www.sc.com/ng/mortgages/home/"
                                 >MORTGAGES</a></span>
                        </div>
                        <ul class="sc-nav-drop__col-list">
                          <li class="sc-nav-drop__col-item">
                            <a
                                title="MORTGAGE"
                                href="https://www.sc.com/ng/mortgages/home/"
                              ><div class="sc-nav-drop__col-text">
                              <p
                                class="sc-nav-drop__link"
                                >
                                MORTGAGE
                              </p>
                              <p class="sc-nav-drop__desc">
                                  A mortgage solution to achieve your dream of home ownership
                              </p>
                            </div></a>
                          </li>
                          </ul>
                      </div> */}
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="Tools To Help" href="https://www.sc.com/ng/borrow/">Tools To
                                    Help</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                {/* <li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="APPLY FOR PERSONAL LOAN"
                                class="sc-nav-drop__link"
                                href="https://www.sc.com/ng/borrow/personal-instalment-loan/apply/?subChanCode=ibpc4p7pk&pid=s-priority-banking&instance=ibps1&state=ibat06-2"
                              >
                                APPLY FOR PERSONAL LOAN
                              </a>
                              
                            </div>
                          </li> */}
                                {/*<li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="APPLY FOR OVERDRAFT LOAN"
                                class="sc-nav-drop__link"
                                href="https://www.sc.com/ng/borrow/personal-instalment-loan/apply/"
                              >
                                APPLY FOR OVERDRAFT LOAN
                              </a>
                              
                            </div>
                          </li>*/}
                                {/*  <li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="APPLY FOR MORTGAGE"
                                class="sc-nav-drop__link"
                                href="https://www.sc.com/ng/borrow/mortgage/apply/?subChanCode=ibpc4p7pk&pid=s-priority-banking&instance=ibps1&state=ibat06-2"
                              >
                                APPLY FOR MORTGAGE
                              </a>
                              
                            </div>
                          </li> */}
                                <li className="sc-nav-drop__col-item">
                                  <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                    <a title="APPLY FOR PERSONAL LOAN" className="sc-nav-drop__link" href="https://www.sc.com/ng/help/download-centre/unsecured-lending-product-form/">APPLY
                                      FOR PERSONAL LOAN</a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            {/* Promotion */}
                            <div className="sc-nav-drop__col sc-nav-drop__col-promo">
                              <a title="The Good Life Privileges" href="https://www.sc.com/ng/promotions/the-good-life-privileges/">
                                <div className="sc-nav-drop__promo-box">
                                  <img src="https://av.sc.com/ng/content/images/ng-tgl-masthead.jpg" alt="My Stanchart Privileges" loading="lazy" width={290} height={150} />
                                  <div className="sc-nav-drop__promo-text">
                                    <p className="sc-nav-drop__promo-title">
                                      The Good Life Privileges
                                    </p>
                                    <p className="sc-nav-drop__promo-desc">
                                      The Good life. Enjoy incredible
                                      privileges with your SC card
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* View all button */}
                            <div className="sc-nav-drop__view-all">
                              <a href="https://www.sc.com/ng/borrow/" className="sc-nav-drop__btn">
                                View All Loans &amp; Mortgages
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/*Credit Cards */}
                <li className="sc-nav__item sc-nav__item--has-meganav">
                  <button className="sc-nav__btn sc-nav__menu">Cards</button>
                  <div className="sc-nav__mgnv-wrapper">
                    <div className="sc-nav-drop">
                      <button className="sc-nav__btn sc-nav-drop__back sc-nav__back only-mobile">
                        Back
                      </button>
                      <div className="sc-nav-drop__content">
                        <div className="sc-nav-drop__wrapper sc-nav__container">
                          <div className="sc-nav-drop__col-wrapper">
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="Credit Cards" href="https://www.sc.com/ng/credit-cards/">Credit
                                    Cards</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="VISA GOLD CREDIT CARD" href="https://www.sc.com/ng/credit-cards/visa-gold/"><img className="sc-nav-drop__img" aria-hidden="true" src="https://av.sc.com/ng/content/images/ng-visa-gold-598x-374y.png" alt="VISA GOLD CREDIT CARD" loading="lazy" width={90} height={55} /></a>
                                  <a title="VISA GOLD CREDIT CARD" href="https://www.sc.com/ng/credit-cards/visa-gold/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        VISA GOLD CREDIT CARD
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Enjoy a whole new world of
                                        exclusive, personalised privileges
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="VISA PLATINUM CREDIT CARD" href="https://www.sc.com/ng/credit-cards/visa-platinum/"><img className="sc-nav-drop__img" aria-hidden="true" src="https://av.sc.com/ng/content/images/ng-visa-platinum-601x-374y.png" alt="VISA PLATINUM CREDIT CARD" loading="lazy" width={90} height={55} /></a>
                                  <a title="VISA PLATINUM CREDIT CARD" href="https://www.sc.com/ng/credit-cards/visa-platinum/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        VISA PLATINUM CREDIT CARD
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Enjoy elite benefits that add more
                                        value to your life
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="Debit Cards" href="https://www.sc.com/ng/debit-cards/">Debit
                                    Cards</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="VISA GOLD DEBIT CARD" href="https://www.sc.com/ng/debit-cards/visa-gold/"><img className="sc-nav-drop__img" aria-hidden="true" src="https://av.sc.com/ng/content/images/visa-gold-debit-card-nav.png" alt="VISA GOLD DEBIT CARD" loading="lazy" width={90} height={55} /></a>
                                  <a title="VISA GOLD DEBIT CARD" href="https://www.sc.com/ng/debit-cards/visa-gold/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        VISA GOLD DEBIT CARD
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Enjoy an exclusive range of
                                        benefits and privileges
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="VISA PLATINUM DEBIT CARD" href="https://www.sc.com/ng/debit-cards/visa-platinum/"><img className="sc-nav-drop__img" aria-hidden="true" src="https://av.sc.com/ng/content/images/visa-platinum-debit-card-nav.png" alt="VISA PLATINUM DEBIT CARD" loading="lazy" width={90} height={55} /></a>
                                  <a title="VISA PLATINUM DEBIT CARD" href="https://www.sc.com/ng/debit-cards/visa-platinum/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        VISA PLATINUM DEBIT CARD
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Enjoy higher spending limits and
                                        have access to more benefits
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="VISA INFINITE DEBIT CARD" href="https://www.sc.com/ng/debit-cards/visa-infinite/"><img className="sc-nav-drop__img" aria-hidden="true" src="https://av.sc.com/ng/content/images/visa-infinite-debit-card-nav.png" alt="VISA INFINITE DEBIT CARD" loading="lazy" width={90} height={55} /></a>
                                  <a title="VISA INFINITE DEBIT CARD" href="https://www.sc.com/ng/debit-cards/visa-infinite/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        VISA INFINITE DEBIT CARD
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Enjoy an exclusive range of
                                        benefits and privileges
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="TOOLS TO HELP" href="https://www.sc.com/ng/credit-cards/compare/">TOOLS
                                    TO HELP</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <div className="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                                    <a title="COMPARE CREDIT CARD" className="sc-nav-drop__link" href="https://www.sc.com/ng/credit-cards/compare/">
                                      COMPARE CREDIT CARD
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            {/* Promotion */}
                            <div className="sc-nav-drop__col sc-nav-drop__col-promo">
                              <a title="360° Rewards" href="https://rewards.sc.com/ng/">
                                <div className="sc-nav-drop__promo-box">
                                  <img src="https://av.sc.com/ng/content/images/ng-shopping-360-rewards.jpg" alt="360° Rewards" loading="lazy" width={290} height={150} />
                                  <div className="sc-nav-drop__promo-text">
                                    <p className="sc-nav-drop__promo-title">
                                      360° Rewards
                                    </p>
                                    <p className="sc-nav-drop__promo-desc">
                                      Earn Reward points each time you use
                                      your Debit or Credit card.
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* View all button */}
                            <div className="sc-nav-drop__view-all">
                              <a href="https://www.sc.com/ng/credit-cards/" className="sc-nav-drop__btn">
                                View All Credit Cards
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Investments */}
                <li className="sc-nav__item sc-nav__item--has-meganav">
                  <button className="sc-nav__btn sc-nav__menu">Invest</button>
                  <div className="sc-nav__mgnv-wrapper">
                    <div className="sc-nav-drop">
                      <button className="sc-nav__btn sc-nav-drop__back sc-nav__back only-mobile">
                        Back
                      </button>
                      <div className="sc-nav-drop__content">
                        <div className="sc-nav-drop__wrapper sc-nav__container">
                          <div className="sc-nav-drop__col-wrapper">
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="Ways to Invest" href="https://www.sc.com/ng/invest/">Ways to
                                    Invest</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="WEALTH BUILDER" href="https://www.sc.com/ng/invest/regular-savings-plan/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        WEALTH BUILDER
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        A designed investment product that
                                        helps in wealth accumulation
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="FIXED INCOME SECURITIES" href="https://www.sc.com/ng/invest/fixed-income-securities/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        FIXED INCOME SECURITIES
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Debt instruments issued by
                                        corporations and governments
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="SECURED WEALTH LENDING" href="https://www.sc.com/ng/invest/secured-wealth-lending/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        SECURED WEALTH LENDING
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Make your investments work harder
                                        for you
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="sc-nav-drop__col sc-nav-drop__col--no-left-border">
                              <span className="sc-nav-drop__col-spacing" />
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <a title="MUTUAL FUNDS" href="/ng/invest/mutual-funds/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        MUTUAL FUNDS
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Collective investment schemes for
                                        wealth management
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="SC DIGIADVISORY" href="https://www.sc.com/ng/invest/sc-digiadvisory/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        SC DIGIADVISORY
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Stay on top of your finances
                                        anywhere, anytime.
                                      </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="sc-nav-drop__col-item">
                                  <a title="BANCASSURANCE" href="https://www.sc.com/ng/invest/bancassurance/">
                                    <div className="sc-nav-drop__col-text">
                                      <p className="sc-nav-drop__link">
                                        BANCASSURANCE
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Allows us to refer you to Leadway
                                        Assurance Company Ltd
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="sc-nav-drop__col">
                              <div className="sc-nav-drop__col-label">
                                <span><a title="Tools to Help" href="https://www.sc.com/ng/invest/">Tools to
                                    Help</a></span>
                              </div>
                              <ul className="sc-nav-drop__col-list">
                                <li className="sc-nav-drop__col-item">
                                  <div className="sc-nav-drop__col-text">
                                    <a title="Market Views-On-The-Go" href="https://www.sc.com/ng/market-outlook/?intcid=web&lang=en&ctry=NG&seg=GWM&channel=PLRB">
                                      <p className="sc-nav-drop__link">
                                        Market Views-On-The-Go
                                      </p>
                                      <p className="sc-nav-drop__desc">
                                        Tap into our global resources to
                                        analyse the
                                        financial markets around the world
                                      </p>
                                    </a>
                                  </div>
                                </li>
                                {/* <li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="LATEST MARKET INSIGHTS"
                                class="sc-nav-drop__link"
                                href="https://www.sc.com/retail/mce/index.html?subChanCode=ibpc4p7pk&pid=s-priority-banking&state=ibat06-2#/landing?lang=en&ctry=NG&channel=PLRB&sapp=PUB&requestId=ef0f11df-7425-420c-bcfd-4043ea7d2589"
                              >
                                LATEST MARKET INSIGHTS
                              </a>
                             
                            </div>
                          </li>
                          <li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="VIX: What you should know about the volatility index"
                                class="sc-nav-drop__link"
                                href="https://av.sc.com/ng/content/docs/ng-vix.pdf"
                              >
                              VIX: What you should know about the volatility index
                              </a>
                             
                            </div>
                          </li>
                          <li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="Why doing nothing may often be best during volatile times"
                                class="sc-nav-drop__link"
                                href="https://av.sc.com/ng/content/docs/ng-volatile-times.pdf"
                              >
                              Why doing nothing may often be best during volatile times
                              </a>
                             
                            </div>
                          </li>
                          <li class="sc-nav-drop__col-item">
                            <div class="sc-nav-drop__col-text sc-nav-drop__col-text--indent">
                              <a
                                title="Implied vs historical volatility: what’s the difference?"
                                class="sc-nav-drop__link"
                                href="https://av.sc.com/ng/content/docs/ng-implied-volatility.pdf"
                              >
                              Implied vs historical volatility: what’s the difference?
                              </a>
                             
                            </div>
                          </li> */}
                              </ul>
                            </div>
                            {/* Promotion */}
                            <div className="sc-nav-drop__col sc-nav-drop__col-promo">
                              <a title="Wealth Builder" href="https://www.sc.com/ng/invest/regular-savings-plan/">
                                <div className="sc-nav-drop__promo-box">
                                  <img src="https://av.sc.com/ng/content/images/ng-regular-savings-plan-400x-400y.jpg" alt="Wealth Builder" loading="lazy" width={290} height={150} />
                                  <div className="sc-nav-drop__promo-text">
                                    <p className="sc-nav-drop__promo-title">
                                      Wealth Builder
                                    </p>
                                    <p className="sc-nav-drop__promo-desc">
                                      A specially designed investment product
                                      that helps in wealth accumulation
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* View all button */}
                            <div className="sc-nav-drop__view-all">
                              <a href="https://www.sc.com/ng/invest/" className="sc-nav-drop__btn">
                                View All Investments
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Help*/}
                <li className="sc-nav__item sc-nav__item--has-meganav">
                  <button className="sc-nav__btn sc-nav__menu">
                    Help
                  </button>
                  <div className="sc-nav__mgnv-wrapper">
                    <div className="sc-nav-drop">
                      <button className="sc-nav__btn sc-nav-drop__back sc-nav__back only-mobile">
                        Back
                      </button>
                      <div className="sc-nav-drop__content">
                        <div className="sc-nav-drop__wrapper sc-nav__container">
                          <div className="sc-nav-drop__col-wrapper">
                            <div className="sc-mgdrop">
                              {/* Services meganav Left side contents */}
                              <div className="sc-mgdrop__left">
                                <span className="sc-mgdrop__title only-desktop">
                                  <a title="Problems? Visit our help centre" href="https://www.sc.com/ng/help/"> Problems?
                                    Visit our help centre</a></span>
                                <ul className="sc-mgdrop__list">
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="Straight2Bank" href="https://www.sc.com/ng/business/straight2bank/">
                                      Straight2Bank
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="SC Mobile" href="https://www.sc.com/ng/banking/sc-mobile/">
                                      SC Mobile
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="Bank With Us" href="https://www.sc.com/ng/banking/">
                                      Bank With Us
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="Online Banking" href="https://www.sc.com/ng/banking/online/">
                                      Online Banking
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="*977# Banking" href="https://www.sc.com/ng/banking/977-banking/">
                                      *977# Banking
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="Locate Us" href="https://www.sc.com/ng/atm-branch-locator/">
                                      Locate Us
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="Contact Us" href="https://www.sc.com/ng/contact-us/">
                                      Contact Us
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="Bank Code Finder" href="https://www.sc.com/ng/help/bank-code-finder/">
                                      Bank Code Finder
                                    </a>
                                  </li>
                                  <li className="sc-mgdrop__list-item">
                                    <a className="sc-mgdrop__list-item-link" title="AGENCY BANKING" href="/ng/agency-banking-services/">
                                      AGENCY BANKING
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* Services meganav Right side contents */}
                              <div className="sc-mgdrop__right" style={{minHeight: '0px'}}>
                                <div className="sc-mgdrop__item-wrapper">
                                  <div className="sc-mgdrop__item">
                                    <div className="sc-mgdrop__item-box">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.06 98">
                                        <g data-name="Layer 2">
                                          <g>
                                            <path d="M29.7 91.14A3.15 3.15 0 1 1 32.85 88a3.15 3.15 0 0 1-3.15 3.14zm0-4.8A1.65 1.65 0 1 0 31.35 88a1.65 1.65 0 0 0-1.65-1.66z" fill="#d4d4d4" data-name="Ellipse 1">
                                            </path>
                                            <path d="M51.8 98H8.2A8.21 8.21 0 0 1 0 89.8V8.2A8.21 8.21 0 0 1 8.2 0h43.6A8.21 8.21 0 0 1 60 8.2v41a1 1 0 1 1-2 0v-41A6.21 6.21 0 0 0 51.8 2H8.2A6.21 6.21 0 0 0 2 8.2v81.6A6.21 6.21 0 0 0 8.2 96h43.6a6.21 6.21 0 0 0 6.2-6.2V72a1 1 0 0 1 2 0v17.8a8.21 8.21 0 0 1-8.2 8.2z" fill="#d4d4d4" data-name="Rounded Rectangle 1">
                                            </path>
                                            <path d="M58 81H1a.5.5 0 0 1 0-1h57a.5.5 0 0 1 0 1zM58 15H1a.5.5 0 0 1 0-1h57a.5.5 0 0 1 0 1zM7.5 60.51A.5.5 0 0 1 7 60V21a.5.5 0 0 1 1 0v39a.5.5 0 0 1-.5.51zM61.34 61.69a.5.5 0 0 1-.39-.81L80.66 35.6a.5.5 0 0 1 .79.61L61.73 61.5a.5.5 0 0 1-.39.19z" fill="#d4d4d4">
                                            </path>
                                            <path d="M35.59 53.49a3.56 3.56 0 1 1 3.56-3.56 3.57 3.57 0 0 1-3.56 3.56zm0-5.63a2.06 2.06 0 1 0 2.06 2.06 2.07 2.07 0 0 0-2.06-2.06z" fill="#d4d4d4" data-name="Ellipse 1 copy">
                                            </path>
                                            <path d="M12.14 72.25a3.56 3.56 0 1 1 3.56-3.56 3.57 3.57 0 0 1-3.56 3.56zm0-5.63a2.06 2.06 0 1 0 2.06 2.06 2.07 2.07 0 0 0-2.06-2.06z" fill="#d4d4d4" data-name="Ellipse 1 copy">
                                            </path>
                                            <path d="M59 66.39a3.56 3.56 0 1 1 3.56-3.56A3.57 3.57 0 0 1 59 66.39zm0-5.63a2.06 2.06 0 1 0 2.06 2.06A2.07 2.07 0 0 0 59 60.76z" fill="#d4d4d4" data-name="Ellipse 1 copy">
                                            </path>
                                            <path d="M82.5 37.07a3.56 3.56 0 1 1 3.56-3.56 3.57 3.57 0 0 1-3.56 3.56zm0-5.63a2.06 2.06 0 1 0 2.06 2.06 2.07 2.07 0 0 0-2.06-2.06z" fill="#d4d4d4" data-name="Ellipse 1 copy">
                                            </path>
                                            <path d="M15 66.44a.5.5 0 0 1-.32-.89l17.78-14.48a.5.5 0 0 1 .63.78L15.27 66.33a.5.5 0 0 1-.27.11zM56.23 63.32a.5.5 0 0 1-.27-.08L38.14 51.88a.5.5 0 1 1 .54-.84L56.5 62.4a.5.5 0 0 1-.27.92z" fill="#d4d4d4">
                                            </path>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="sc-mgdrop__item-label">
                                        Digital Banking</div>
                                      <p className="sc-mgdrop__item-desc">
                                        Access a wide range of banking
                                        services and features digitally.
                                      </p>
                                      <a title="KNOW MORE" data-context="Meganav Services Links" href="https://www.sc.com/ng/digital-banking/" className="sc-mgdrop__item-link">KNOW
                                        MORE</a>
                                    </div>
                                    <a title="Digital Banking" href="https://www.sc.com/ng/digital-banking/" className="sc-mgdrop__item-link only-mobile">
                                      Digital Banking
                                    </a>
                                  </div>
                                  <div className="sc-mgdrop__item">
                                    <div className="sc-mgdrop__item-box">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.57 97">
                                        <title>icon-sc-easy account
                                          management</title>
                                        <g data-name="Layer 2">
                                          <g>
                                            <g data-name="Rounded Rectangle 4">
                                              <rect x="17.57" y={1} width={2} height={51} fill="#d4d4d4">
                                              </rect>
                                              <polygon points="78.57 97 17.52 97 17.98 87.48 19.98 87.58 19.62 95 78.57 95 78.57 97" fill="#d4d4d4">
                                              </polygon>
                                            </g>
                                            <polygon points="78.57 11 68.57 11 68.57 1 70.57 1 70.57 9 78.57 9 78.57 11" fill="#d4d4d4">
                                            </polygon>
                                            <rect x="26.57" y={40} width={29} height={1} fill="#d4d4d4">
                                            </rect>
                                            <rect x="26.57" y={31} width={29} height={1} fill="#d4d4d4">
                                            </rect>
                                            <rect x="26.57" y={23} width={29} height={1} fill="#d4d4d4">
                                            </rect>
                                            <path d="M78.57,97a1,1,0,0,1-1-1V10.41L69.16,2H18.57a1,1,0,0,1,0-2H70l9.59,9.59V96A1,1,0,0,1,78.57,97Z" fill="#d4d4d4">
                                            </path>
                                            <polygon points="85.57 96 84.57 96 84.57 17 78.57 17 78.57 16 85.57 16 85.57 96" fill="#d4d4d4">
                                            </polygon>
                                            <polygon points="91.57 96 90.57 96 90.57 23 85.57 23 85.57 22 91.57 22 91.57 96" fill="#d4d4d4">
                                            </polygon>
                                            <g data-name="Ellipse 9">
                                              <path d="M19,88.53A19,19,0,0,1,0,69.59c0-10.7,8.41-19.41,18.75-19.41A19.67,19.67,0,0,1,38.15,69.59,19.08,19.08,0,0,1,19,88.53Zm-.24-36.34C9.51,52.19,2,60,2,69.59A16.78,16.78,0,0,0,19,86.53,17.07,17.07,0,0,0,36.15,69.59,17.64,17.64,0,0,0,18.75,52.19Z" fill="#d4d4d4">
                                              </path>
                                            </g>
                                            <polygon points="15.98 76.6 10.17 70.78 11.58 69.37 15.98 73.77 25.87 63.89 27.28 65.31 15.98 76.6" fill="#d4d4d4">
                                            </polygon>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="sc-mgdrop__item-label">
                                        Download Application Forms</div>
                                      <p className="sc-mgdrop__item-desc">
                                        You can now download a number of
                                        forms from the convenience of your
                                        home or office.
                                      </p>
                                      <a title="DOWNLOAD" href="https://www.sc.com/ng/help/download-centre/" className="sc-mgdrop__item-link">DOWNLOAD</a>
                                    </div>
                                    <a title="Download Application Forms" href="https://www.sc.com/ng/help/download-centre/" className="sc-mgdrop__item-link only-mobile">
                                      Download Application Forms
                                    </a>
                                  </div>
                                  <div className="sc-mgdrop__item">
                                    <div className="sc-mgdrop__item-box">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 102">
                                        <g data-name="Layer 2">
                                          <g>
                                            <path d="M1 102a1 1 0 0 1-1-1V81.86c0-4 4-9 6.5-9.8l20.88-8.89a4.85 4.85 0 0 0 .72-.17 1 1 0 0 1 .2-.14c1.15-.6 1.15-1.34 1.15-1.59a1 1 0 0 1 2 0 3.61 3.61 0 0 1-1.7 3.05 1 1 0 0 1-.33.27 6.68 6.68 0 0 1-1.56.56L7.21 73.93C5.35 74.57 2 78.87 2 81.86V101a1 1 0 0 1-1 1z" fill="#d4d4d4" data-name="Shape 4">
                                            </path>
                                            <path d="M81 102a1 1 0 0 1-1-1V81.86c0-3-3.38-7.27-5.2-7.9L54 65.13a7.37 7.37 0 0 1-1.52-.57 1 1 0 0 1-.22-.15 3.66 3.66 0 0 1-1.89-3.17 1 1 0 0 1 2 0c0 .24 0 1 1.15 1.59l.13.08a5.52 5.52 0 0 0 .88.3l.17.05 20.82 8.84c2.4.82 6.48 5.74 6.48 9.76V101a1 1 0 0 1-1 1z" fill="#d4d4d4" data-name="Shape 4 copy">
                                            </path>
                                            <path d="M42.39 58h-3c-8.48 0-14.18-8-15.9-15.52L21 25.14a1 1 0 0 1 2-.29l2.49 17.26C27.66 51.63 34.23 56 39.41 56h3c5.3 0 11.93-4.36 13.94-13.94L59 24.85a1 1 0 0 1 2 .31l-2.7 17.26C56.05 53.14 48.48 58 42.39 58z" fill="#d4d4d4" data-name="Rounded Rectangle 2">
                                            </path>
                                            <path d="M60 26a1 1 0 0 1-1-1 18 18 0 0 0-36 0 1 1 0 0 1-2 0 20 20 0 0 1 40 0 1 1 0 0 1-1 1zM7 81h1v21H7z" fill="#d4d4d4">
                                            </path>
                                            <path d="M53.11 48H44v-2h9c.06 0 4.91.08 8.11-3C63 41.09 64 38.41 64 35V25a23 23 0 0 0-46 0v2h-2v-2a25 25 0 0 1 50 0v10c0 4-1.18 7.14-3.51 9.41C59 47.84 54 48 53.11 48z" fill="#d4d4d4">
                                            </path>
                                            <path d="M41.9 50.34a3.15 3.15 0 1 1 3.1-3.15 3.15 3.15 0 0 1-3.1 3.15zm0-4.8a1.65 1.65 0 1 0 1.65 1.65 1.65 1.65 0 0 0-1.65-1.65z" fill="#d4d4d4" data-name="Ellipse 1 copy">
                                            </path>
                                            <path d="M17.73 41h-1.36c-2 0-3.37-2.62-3.37-4.35v-7.34A3.31 3.31 0 0 1 16.37 26h1.36A3.22 3.22 0 0 1 21 29.31v7.34c0 1.82-1.24 4.35-3.27 4.35zm-1.36-13A1.31 1.31 0 0 0 15 29.31v7.34c0 1 .81 2.35 1.37 2.35h1.36c.54 0 1.27-1.36 1.27-2.35v-7.34A1.23 1.23 0 0 0 17.73 28z" fill="#d4d4d4" data-name="Rounded Rectangle 4">
                                            </path>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="sc-mgdrop__item-label">
                                        Contact Us</div>
                                      <p className="sc-mgdrop__item-desc">
                                        We value our relationship with you
                                        and would love to hear about your
                                        experience with us.
                                      </p>
                                      <a title="CONTACT US" href="https://www.sc.com/ng/contact-us/" className="sc-mgdrop__item-link">CONTACT
                                        US</a>
                                    </div>
                                    <a title="CONTACT US" href="https://www.sc.com/ng/contact-us/" className="sc-mgdrop__item-link only-mobile">
                                      CONTACT US
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* View all button */}
                            <div className="sc-nav-drop__view-all">
                              <a href="https://www.sc.com/ng/help/" title="View All Help" className="sc-nav-drop__btn">
                                View All Help
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* This below list is added for creating line in mobile  */}
                <li className="sc-nav__line only-mobile" />
                {/* Mobile screen - Services, Help, Search and country selector menu below */}
                <li className="sc-nav__item sc-nav__item--has-meganav only-mobile">
                  <a href="https://www.sc.com/ng/banking/" className="sc-nav__btn sc-nav__menu" title="Services">Services </a>
                </li>
                {/*<li class="sc-nav__item sc-nav__item--has-meganav only-mobile">
            <a
              href="https://www.sc.com/ng/help/"
              class="sc-nav__btn sc-nav__menu"
              title="Help"
              >Help</a
            >
          </li>*/}
                <li className="sc-nav__item sc-nav__item--has-meganav only-mobile">
                  <a href="https://www.sc.com/ng/search/" title="Search" className="sc-nav__btn sc-nav__menu sc-nav__menu-search">
                    Search
                    <span className="sc-nav__icon only-mobile">
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <path d="M15.33 15.142H0V0h15.33z" />
                        </defs>
                        <path d="M6.34 10.903A4.567 4.567 0 0 1 1.778 6.34 4.568 4.568 0 0 1 6.34 1.777a4.569 4.569 0 0 1 4.564 4.564 4.567 4.567 0 0 1-4.564 4.562m8.73 2.721l-3.596-3.592a6.283 6.283 0 0 0 1.208-3.691A6.348 6.348 0 0 0 6.34 0 6.348 6.348 0 0 0 0 6.34a6.347 6.347 0 0 0 6.34 6.34c1.476 0 2.816-.526 3.895-1.374l3.577 3.575a.887.887 0 0 0 1.257 0 .89.89 0 0 0 0-1.257" fill="#221F20" mask="url(#b)" transform="translate(.584)" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="sc-nav__item sc-nav__item--has-meganav only-mobile">
                  <div className="sc-nav__top-right">
                    <div className="sc-nav__country">
                      <button className="sc-nav__country-btn">Nigeria</button>
                    </div>
                  </div>
                </li>
                {/* This below list is added for creating overlay effect via css.  */}
                <li className="sc-nav__overlay only-desktop" />
              </ul>
              <div className="sc-nav__login-open-btn">
                {/* Open an account Button */}
                <div className="sc-nav__open-account">
                  <a className="sc-nav__btn sc-nav__account-btn" title="Open an account" href="https://www.sc.com/ng/banking/sc-mobile/">
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
                        <path fill="#00a546" d="M1 30c-.6 0-1-.4-1-1v-5.1c0-1.3 1.2-2.7 2.1-3.1l5.7-2.3c.5-.2.7-.4.8-.6.2-.5.8-.7 1.3-.5.5.2.7.8.5 1.3-.4 1-1.4 1.4-1.8 1.6l-.2.1-5.7 2.2c-.2.3-.7 1-.7 1.3V29c0 .5-.4 1-1 1zM23 30c-.6 0-1-.4-1-1v-5.1c0-.4-.4-1.1-.6-1.2l-5.8-2.3c-.5-.2-1.5-.6-2-1.6-.2-.5 0-1.1.5-1.3.5-.2 1.1 0 1.3.5 0 .1.2.2.9.5.1 0 .1.1.2.1l5.6 2.2c.9.3 1.8 1.8 1.8 3.1V29c.1.5-.3 1-.9 1zM13 16h-1.7c-2 0-4-2.2-4.6-5.1v-.1L6 5.7C6 2.5 8.5 0 11.6 0h1.5c2.9.2 5.2 2.7 5.2 5.6v.1l-.7 5C17 13.7 15 16 13 16zm-4.4-5.6c.5 2.2 1.9 3.5 2.7 3.5H13c.8 0 2.2-1.4 2.7-3.5l.6-4.8c0-1.9-1.5-3.4-3.4-3.6h-1.3C9.6 2 8 3.6 8 5.6l.6 4.8zm8.7-4.7z">
                        </path>
                      </svg>
                    </span>
                    Open an account
                  </a>
                </div>
                {/* Login Buttons */}
                <div className="sc-nav__login">
                  <button className="sc-nav__btn sc-nav__login-btn" title="Login" aria-expanded="false">
                    <span className="sc-nav__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} viewBox="0 0 24.19 28.58">
                        <g data-name="Layer 2">
                          <g>
                            <path d="M21.19 28.58H3a3 3 0 0 1-3-3V11.23a3 3 0 0 1 3-3h18.19a3 3 0 0 1 3 3v14.35a3 3 0 0 1-3 3zM3 10.23a1 1 0 0 0-1 1v14.35a1 1 0 0 0 1 1h18.19a1 1 0 0 0 1-1V11.23a1 1 0 0 0-1-1z" fill="#d4d4d4" />
                            <path d="M19 9.43a1 1 0 0 1-1-1v-2.7A3.74 3.74 0 0 0 14.26 2H9.92a3.74 3.74 0 0 0-3.73 3.73v2.7a1 1 0 0 1-2 0v-2.7A5.74 5.74 0 0 1 9.92 0h4.34A5.74 5.74 0 0 1 20 5.73v2.7a1 1 0 0 1-1 1zM12.19 23.33a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z" fill="#d4d4d4" />
                            <path d="M12.12 18.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2.44a.47.47 0 1 0 .47.47.47.47 0 0 0-.47-.47z" fill="#d4d4d4" data-name="Ellipse 7" />
                            <path d="M12.12 18.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2.44a.47.47 0 1 0 .47.47.47.47 0 0 0-.47-.47z" fill="#d4d4d4" data-name="Ellipse 7" />
                          </g>
                        </g>
                      </svg>
                    </span>
                    Login
                  </button>
                  {/* Login Popup box links */}
                  <div className="sc-login-drop">
                    <span className="sc-login-drop__title only-mobile">Welcome to Standard Chartered</span>
                    <ul>
                      <li>
                        <a title="Online Banking Login" href="https://www.sc.com/ng/online-banking-login/" className="sc-login-drop__link sc-login-drop__link-first" data-send="null" data-context="Meganav Links Online Banking Login">
                          Online Banking Login
                          <span className="sc-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.19 28.58">
                              <g data-name="Layer 2">
                                <g>
                                  <path d="M21.19 28.58H3a3 3 0 0 1-3-3V11.23a3 3 0 0 1 3-3h18.19a3 3 0 0 1 3 3v14.35a3 3 0 0 1-3 3zM3 10.23a1 1 0 0 0-1 1v14.35a1 1 0 0 0 1 1h18.19a1 1 0 0 0 1-1V11.23a1 1 0 0 0-1-1z" fill="#d4d4d4" />
                                  <path d="M19 9.43a1 1 0 0 1-1-1v-2.7A3.74 3.74 0 0 0 14.26 2H9.92a3.74 3.74 0 0 0-3.73 3.73v2.7a1 1 0 0 1-2 0v-2.7A5.74 5.74 0 0 1 9.92 0h4.34A5.74 5.74 0 0 1 20 5.73v2.7a1 1 0 0 1-1 1zM12.19 23.33a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z" fill="#d4d4d4" />
                                  <path d="M12.12 18.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2.44a.47.47 0 1 0 .47.47.47.47 0 0 0-.47-.47z" fill="#d4d4d4" data-name="Ellipse 7" />
                                  <path d="M12.12 18.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2.44a.47.47 0 1 0 .47.47.47.47 0 0 0-.47-.47z" fill="#d4d4d4" data-name="Ellipse 7" />
                                </g>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a title="360º Rewards" href="https://rewards.sc.com/ng/" className="sc-login-drop__link" data-send="null" data-context="Meganav Links Online Rewards">
                          360º Rewards
                          <span className="sc-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.63 34.61">
                              <g data-name="Layer 2">
                                <g fill="#d4d4d4">
                                  <path d="M15.45 23.51A8.49 8.49 0 1 1 23.93 15a8.5 8.5 0 0 1-8.48 8.51zm0-16A7.49 7.49 0 1 0 22.93 15a7.5 7.5 0 0 0-7.48-7.46z">
                                  </path>
                                  <path d="M11.74 19.16a.6.6 0 0 1-.43-.19 5.72 5.72 0 0 1 0-7.94.6.6 0 0 1 .86.84 4.52 4.52 0 0 0 0 6.27.6.6 0 0 1-.43 1z">
                                  </path>
                                  <path d="M15.32 29.83L12 27.13l-4.3.72-1.51-4-4.1-1.47.71-4.18L0 14.92l2.8-3.28-.74-4.19L6.16 6l1.51-4 4.3.72L15.32 0l3.35 2.71L23 2l1.51 4 4.1 1.47-.74 4.19 2.8 3.28-2.8 3.28.74 4.19-4.1 1.47-1.51 4-4.3-.72zM12.53 25l2.79 2.26L18.1 25l3.57.6 1.25-3.31 3.38-1.22-.61-3.46 2.3-2.7-2.3-2.7.61-3.46-3.37-1.21-1.26-3.31-3.57.6-2.78-2.26-2.79 2.26L9 4.23 7.71 7.54 4.32 8.76l.61 3.46-2.3 2.7 2.3 2.7-.61 3.46L7.7 22.3 9 25.6z">
                                  </path>
                                  <path d="M23.32 34.61l-8-2.29-8 2.29v-4.32a1 1 0 0 1 2 0V32l6-1.71 6 1.71v-1.71a1 1 0 0 1 2 0z">
                                  </path>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a title="Straight2Bank Login" href="https://s2b.standardchartered.com/ssoapp/login.jsp" className="sc-login-drop__link sc-login-drop__bank-login" data-send="null" data-context="Meganav Links Straight2Bank Login">
                          Straight2Bank Login
                          <span className="sc-nav__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width={28} height={26} viewBox="0 0 28 26">
                              <image href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAMAAACTisy7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAPFBMVEUAAADU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NQAAAAamdYyAAAAEnRSTlMAJa3xJ++3GfPhw8TyGK61GyjofnilAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAHxJREFUKM/V0tsKgCAQBNBptZtZ1vz/x2ZJ9/Uh6KUBFTy4gi5QiKESIwVgS2ZSWgirGkrqigJD1aKyAQm0t33nljnKgrwh+QZTqbQ+kDxOfYzbfSqex4/RddeR/ZX9rVKZR9oVfa5N+tgmA0Ov2Rg4YMq35hQbV7xGXixmgYwWLY107UoAAAAASUVORK5CYII=" width={28} height={26} />
                            </svg>
                          </span>
                        </a>
                      </li>
                      {/*<li>
                  <a
                    title="Card Activation"
                    href="https://www.sc.com/retail/servicerequest/cards/activation/card-activation.html?subChanCode=iboldpc5p1#/en/AE/choose-card-type/step1"
                    class="sc-login-drop__link sc-login-drop__link-first"
                    data-send="null"
                    data-context="Meganav Links Online Banking Login"
                  >
                    Card Activation
                    <span class="sc-nav__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24.19 28.58"
                      >
                        <g data-name="Layer 2">
                          <g>
                            <path
                              d="M21.19 28.58H3a3 3 0 0 1-3-3V11.23a3 3 0 0 1 3-3h18.19a3 3 0 0 1 3 3v14.35a3 3 0 0 1-3 3zM3 10.23a1 1 0 0 0-1 1v14.35a1 1 0 0 0 1 1h18.19a1 1 0 0 0 1-1V11.23a1 1 0 0 0-1-1z"
                              fill="#d4d4d4"
                            ></path>
                            <path
                              d="M19 9.43a1 1 0 0 1-1-1v-2.7A3.74 3.74 0 0 0 14.26 2H9.92a3.74 3.74 0 0 0-3.73 3.73v2.7a1 1 0 0 1-2 0v-2.7A5.74 5.74 0 0 1 9.92 0h4.34A5.74 5.74 0 0 1 20 5.73v2.7a1 1 0 0 1-1 1zM12.19 23.33a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z"
                              fill="#d4d4d4"
                            ></path>
                            <path
                              d="M12.12 18.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2.44a.47.47 0 1 0 .47.47.47.47 0 0 0-.47-.47z"
                              fill="#d4d4d4"
                              data-name="Ellipse 7"
                            ></path>
                            <path
                              d="M12.12 18.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2.44a.47.47 0 1 0 .47.47.47.47 0 0 0-.47-.47z"
                              fill="#d4d4d4"
                              data-name="Ellipse 7"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>*/}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Hamburger Menu: Visible only for mobile  */}
              <button className="sc-nav__btn sc-nav__close-button">
                <span className="visuallyhidden">Close button</span>
              </button>
              <button className="sc-nav__btn sc-nav__hamburger only-mobile">
                <svg width={26} height={21} viewBox="0 0 26 21" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5 11H.5a.5.5 0 0 1 0-1h25a.5.5 0 0 1 0 1zm0-10H.5a.5.5 0 0 1 0-1h25a.5.5 0 0 1 0 1zM.5 20h25a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1z" fill="#B9B9B9" />
                </svg>
                <span className="visuallyhidden">Menu</span>
              </button>
            </nav>
          </div>
          {/* Country List */}
          <div className="sc-modal c-modal is-visible">
            <div className="sc-modal__scroll">
              <div className="sc-modal__wrapper">
                <div className="sc-modal__content">
                  <div className="sc-country">
                    <button className="sc-nav__btn sc-nav-drop__back sc-country__js-btn">
                      <span className="visuallyhidden">Back button</span>
                    </button>
                    <div className="sc-country__search-box" data-size="auto">
                      <label className="sc-country__wrapper">
                        <input type="text" className="sc-country__input" name="country" placeholder="Enter your market" id="sc-country__input-2" />
                        <span className="sc-country__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35.278" height="33.073" viewBox="2 2 35.278 33.073">
                            <path fill="#cccccc" d="M15.94 28.88C8.797 28.88 3 23.082 3 15.94 3 8.798 8.901 3 15.94 3s12.94 5.798 12.94 12.94c0 7.142-5.798 12.94-12.94 12.94zm0-23.914c-6.004 0-10.87 4.866-10.87 10.974a10.915 10.915 0 0 0 10.974 10.974c6.107 0 10.87-4.97 10.87-10.974 0-6.004-4.865-10.974-10.974-10.974zm11.389 21.326l8.281 7.246m.517-.619l-8.281-7.248-1.035 1.139 8.281 7.246 1.035-1.137z">
                            </path>
                          </svg>
                        </span>
                      </label>
                    </div>
                    <div className="sc-country__list">
                      <ul className="sc-country__list-items">
                        <li className="sc-country__list-item" data-value="AGO">
                          <a href="https://www.sc.com/ao/" className="sc-country__country-link" title="Angola" data-url-updated="true" data-url-updated-param="true">
                            Angola
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="ARG">
                          <a href="https://www.sc.com/ar-en/" className="sc-country__country-link" title="Argentina">
                            Argentina
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="AUS">
                          <a href="https://www.sc.com/au/" className="sc-country__country-link" title="Australia">
                            Australia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="BHR">
                          <a href="https://www.sc.com/bh/" className="sc-country__country-link" title="Bahrain">
                            Bahrain
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="BGD">
                          <a href="https://www.sc.com/bd/" className="sc-country__country-link" title="Bangladesh">
                            Bangladesh
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="BWA">
                          <a href="https://www.sc.com/bw/" className="sc-country__country-link" title="Botswana">
                            Botswana
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="BRA">
                          <a href="https://www.sc.com/br-en/" className="sc-country__country-link" title="Brazil">
                            Brazil
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="BRN">
                          <a href="https://www.sc.com/bn/en/" className="sc-country__country-link" title="Brunei Darussalam">
                            Brunei Darussalam
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="KHM">
                          <a href="https://www.sc.com/kh/" className="sc-country__country-link" title="Cambodia">
                            Cambodia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="CMR">
                          <a href="https://www.sc.com/cm/" className="sc-country__country-link" title="Cameroon">
                            Cameroon
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="CHL">
                          <a href="https://www.sc.com/ar-en/" className="sc-country__country-link" title="Chile">
                            Chile
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="CHN">
                          <a href="https://www.sc.com/cn/" className="sc-country__country-link" title="China">
                            China
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="COL">
                          <a href="https://www.sc.com/co-en/" className="sc-country__country-link" title="Colombia">
                            Colombia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="CHN">
                          <a href="https://www.sc.com/ci/" className="sc-country__country-link" title="Cote d'Ivoire">
                            Cote d'Ivoire
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="FLK">
                          <a href="https://www.sc.com/fk/" className="sc-country__country-link" title="Falkland Islands">
                            Falkland Islands
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="FRA">
                          <a href="https://www.sc.com/fr-en/" className="sc-country__country-link" title="France">
                            France
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="DEU">
                          <a href="https://www.sc.com/de-en/" className="sc-country__country-link" title="Germany">
                            Germany
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="GHA">
                          <a href="https://www.sc.com/gh/" className="sc-country__country-link" title="Ghana">
                            Ghana
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="HKG">
                          <a href="https://www.sc.com/hk/" className="sc-country__country-link" title="Hong Kong">
                            Hong Kong
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="IND">
                          <a href="https://www.sc.com/in/" className="sc-country__country-link" title="India">
                            India
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="IDN">
                          <a href="https://www.sc.com/id/en/" className="sc-country__country-link" title="Indonesia">
                            Indonesia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="IRL">
                          <a href="https://www.sc.com/ie/" className="sc-country__country-link" title="Ireland">
                            Ireland
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="ITA">
                          <a href="https://www.sc.com/it/en/" className="sc-country__country-link" title="Italy">
                            Italy
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="JPN">
                          <a href="https://www.sc.com/jp/" className="sc-country__country-link" title="Japan">
                            Japan
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="JEY">
                          <a href="https://www.sc.com/je/" className="sc-country__country-link" title="Jersey">
                            Jersey
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="JOR">
                          <a href="https://www.sc.com/jo/" className="sc-country__country-link" title="Jordan">
                            Jordan
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="KEN">
                          <a href="https://www.sc.com/ke/" className="sc-country__country-link" title="Kenya">
                            Kenya
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="VTA">
                          <a href="https://www.sc.com/la/" className="sc-country__country-link" title="Laos">
                            Laos
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="LBN">
                          <a href="https://www.sc.com/lb/" className="sc-country__country-link" title="Lebanon">
                            Lebanon
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="MFM">
                          <a href="https://www.sc.com/mo/" className="sc-country__country-link" title="Macau">
                            Macau
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="MYS">
                          <a href="https://www.sc.com/my/" className="sc-country__country-link" title="Malaysia">
                            Malaysia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="MUS">
                          <a href="https://www.sc.com/mu/" className="sc-country__country-link" title="Mauritius">
                            Mauritius
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="MEX">
                          <a href="https://www.sc.com/us/" className="sc-country__country-link" title="Mexico">
                            Mexico
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="MMR">
                          <a href="https://www.sc.com/en/contact-us/" className="sc-country__country-link" title="Myanmar">
                            Myanmar
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="NPL">
                          <a href="https://www.sc.com/np/" className="sc-country__country-link" title="Nepal">
                            Nepal
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="NGA">
                          <a href="https://www.sc.com/ng/" className="sc-country__country-link" title="Nigeria">
                            Nigeria
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="OMN">
                          <a href="https://www.sc.com/om-en/" className="sc-country__country-link" title="Oman">
                            Oman
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="PAK">
                          <a href="https://www.sc.com/pk/" className="sc-country__country-link" title="Pakistan">
                            Pakistan
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="PER">
                          <a href="https://www.sc.com/co-en/" className="sc-country__country-link" title="Peru">
                            Peru
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="PHL">
                          <a href="https://www.sc.com/ph/" className="sc-country__country-link" title="Philippines">
                            Philippines
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="QAT">
                          <a href="https://www.sc.com/qa/" className="sc-country__country-link" title="Qatar">
                            Qatar
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="SGP">
                          <a href="https://www.sc.com/sg/" className="sc-country__country-link" title="Singapore">
                            Singapore
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="SLE">
                          <a href="https://www.sc.com/sl/" className="sc-country__country-link" title="Sierra Leone">
                            Sierra Leone
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="ZAF">
                          <a href="https://www.sc.com/za/" className="sc-country__country-link" title="South Africa">
                            South Africa
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="KOR">
                          <a href="https://www.standardchartered.co.kr/np/kr/Intro.jsp" className="sc-country__country-link" title="South Korea">
                            South Korea
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="LKA">
                          <a href="https://www.sc.com/lk/" className="sc-country__country-link" title="Sri Lanka">
                            Sri Lanka
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="SWE">
                          <a href="https://www.sc.com/se/" className="sc-country__country-link" title="Sweden">
                            Sweden
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="TWN">
                          <a href="https://www.sc.com/tw/" className="sc-country__country-link" title="Taiwan">
                            Taiwan
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="TZA">
                          <a href="https://www.sc.com/tz/" className="sc-country__country-link" title="Tanzania">
                            Tanzania
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="THA">
                          <a href="https://www.sc.com/th-en/" className="sc-country__country-link" title="Thailand">
                            Thailand
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="GMB">
                          <a href="https://www.sc.com/gm/" className="sc-country__country-link" title="The Gambia">
                            The Gambia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="TUR">
                          <a href="https://www.sc.com/tr-en/" className="sc-country__country-link" title="Turkey">
                            Turkey
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="UGA">
                          <a href="https://www.sc.com/ug/" className="sc-country__country-link" title="Uganda">
                            Uganda
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="ARE">
                          <a href="https://www.sc.com/ae/" className="sc-country__country-link" title="United Arab Emirates">
                            United Arab Emirates
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="GBR">
                          <a href="https://www.sc.com/uk/" className="sc-country__country-link" title="United Kingdom">
                            United Kingdom
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="USA">
                          <a href="https://www.sc.com/us/" className="sc-country__country-link" title="United States">
                            United States
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="SGN">
                          <a href="https://www.sc.com/vn/en/" className="sc-country__country-link" title="Vietnam">
                            Vietnam
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="ZMB">
                          <a href="https://www.sc.com/zm/" className="sc-country__country-link" title="Zambia">
                            Zambia
                          </a>
                        </li>
                        <li className="sc-country__list-item" data-value="ZWE">
                          <a href="https://www.sc.com/zw/" className="sc-country__country-link" title="Zimbabwe">
                            Zimbabwe
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sc-modal__close">
                  <button className="sc-modal__close-button" aria-label="Close country selector" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div role="banner" className="sc-carousel sc-carousel--masthead" id="sc-lb-module-sc-slider-banner" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-carousel__list-masthead">
            <div className="sc-carousel__item">
              {/* sc-banner partial */}
              <div className="sc-bnr sc-bnr--masthead">
                <a href="https://www.sc.com/ng/enaira/" target="_blank" className="sc-bnr__link">
                  <div className="sc-bnr__bg-wrapper">
                    <picture>
                      <source srcSet="https://av.sc.com/ng/content/images/ng-SC_E-Naira_Banner-alt-3.jpg" media="(min-width: 768px)" />
                      <source srcSet="https://av.sc.com/ng/content/images/ng-SC_E-Naira_Banner-alt-mobile.jpg" media="(max-width: 767px)" />
                      <img src="https://av.sc.com/ng/content/images/ng-SC_E-Naira_Banner-alt-3.jpg" className="sc-img" loading="lazy" alt="Mobile Phone, Electronics, Phone" />
                    </picture>
                  </div>
                  <div className="sc-bnr__wrapper">
                    <div className="sc-bnr__content">
                      <h1 className="sc-bnr__heading">eNaira</h1>
                      <p className="sc-text sc-text--large">
                        eNaira Digital Currency is live on our digital platforms! </p>
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <span title="Read more" data-context="Banner CTA" className="sc-btn">
                            <span className="only-desktop">Read more</span>
                            <span className="only-mobile">Read more</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="sc-carousel__item">
              {/* sc-banner partial */}
              <div className="sc-bnr sc-bnr--masthead">
                <a href="https://www.sc.com/ng/digital-banking/" target="_self" className="sc-bnr__link">
                  <div className="sc-bnr__bg-wrapper">
                    <img width={1600} height={350} src="https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y.jpg" className="sc-img" alt="City Light View" loading="lazy" srcSet="https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y.jpg 1600w, https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y-1024x224.jpg 1024w, https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y-768x168.jpg 768w, https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y-860x188.jpg 860w, https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y-1280x280.jpg 1280w, https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y-1536x336.jpg 1536w, https://av.sc.com/ng/content/images/ng-digital-banking-tinified-1600x-350y-600x131.jpg 600w" sizes="(max-width: 1600px) 100vw, 1600px" />
                  </div>
                  <div className="sc-bnr__wrapper">
                    <div className="sc-bnr__content">
                      <h2 className="sc-bnr__heading">Digital banking designed with you in mind</h2>
                      <p className="sc-text sc-text--large">
                        Explore everything that can be done digitally in just minutes </p>
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <span title="Find Out More" data-context="Banner CTA" className="sc-btn">
                            <span className="only-desktop">Find Out More</span>
                            <span className="only-mobile">Find Out More</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="sc-carousel__item">
              {/* sc-banner partial */}
              <div className="sc-bnr sc-bnr--masthead">
                <a href="https://www.sc.com/ng/customized-wealth-investment-solutions/" target="_blank" className="sc-bnr__link">
                  <div className="sc-bnr__bg-wrapper">
                    <img width={1600} height={490} src="https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px.jpg" className="sc-img" alt="Personalized Expert Guidance" loading="lazy" srcSet="https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px.jpg 1600w, https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px-1024x314.jpg 1024w, https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px-768x235.jpg 768w, https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px-860x263.jpg 860w, https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px-1280x392.jpg 1280w, https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px-1536x470.jpg 1536w, https://av.sc.com/ng/content/images/ng-wm-campaign-masthead-1600x490px-600x184.jpg 600w" sizes="(max-width: 1600px) 100vw, 1600px" />
                  </div>
                  <div className="sc-bnr__wrapper">
                    <div className="sc-bnr__content">
                      <h2 className="sc-bnr__heading">Are you getting only one-sided advice?</h2>
                      <p className="sc-text sc-text--large">
                        With Priority Banking, you enjoy advice form a trained Relationship Manager
                        who consults certified experts </p>
                      <ul className="sc-inline-buttons">
                        <li className="sc-inline-buttons__item">
                          <span title="Learn More" data-context="Banner CTA" className="sc-btn">
                            <span className="only-desktop">Learn More</span>
                            <span className="only-mobile">Learn More</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-quick-links" id="sc-lb-module-quick-links" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-content-wrapper">
            <div className="sc-quick-links__gradient-fade" />
            <div className="sc-carousel">
              <ul className="sc-quick-links__list">
                <li className="sc-quick-links__item">
                  <a className="sc-quick-links__link" href="/ng/save/">
                    <div className="sc-icon sc-icon--hover icon_sc_l_building_bank" aria-hidden="true">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="building bank">
                        <title>building bank</title>
                        <path fill="#555" d="M13 21.25a.25.25 0 010-.5h36a.25.25 0 010 .5H13zM7 25.5a.5.5 0 010-1h49a.5.5 0 010 1H7zM6.5 30a.5.5 0 011 0v22a.5.5 0 01-1 0V30zm13 0a.5.5 0 011 0v22a.5.5 0 01-1 0V30zm12 0a.5.5 0 011 0v22a.5.5 0 01-1 0V30zm12 0a.5.5 0 011 0v22a.5.5 0 01-1 0V30zm13 0a.5.5 0 011 0v22a.5.5 0 01-1 0V30zM6 56.25a.25.25 0 010-.5h51a.25.25 0 010 .5H6zM2 61.5a.5.5 0 010-1h60a.5.5 0 010 1H2zm3.286-40.09a.5.5 0 11-.571-.821l22.83-15.898a16.624 16.624 0 011.558-1.078c.476-.289.94-.534 1.383-.72.602-.253 1.148-.393 1.634-.393.499 0 1.066.145 1.696.406.432.179.884.41 1.348.681a17.146 17.146 0 011.577 1.043L59.29 20.591a.5.5 0 01-.578.816L36.148 5.435a16.174 16.174 0 00-1.487-.985 10.28 10.28 0 00-1.228-.621c-.519-.216-.967-.33-1.313-.33-.332 0-.757.109-1.246.315a9.85 9.85 0 00-1.252.653 15.243 15.243 0 00-1.478 1.024L5.286 21.41zm30.089-8.91a2.875 2.875 0 11-5.75 0 2.875 2.875 0 015.75 0zm-.75 0a2.124 2.124 0 10-4.249-.001 2.124 2.124 0 004.249.001z">
                        </path>
                      </svg>
                    </div>
                    <h2 className="sc-quick-links__title">Accounts &amp; Deposits</h2>
                  </a>
                </li>
                <li className="sc-quick-links__item">
                  <a className="sc-quick-links__link" href="/ng/borrow/">
                    <div className="sc-icon sc-icon--hover icon_sc_l_people_cashone_personal_loan" aria-hidden="true">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="people cashone personal loan">
                        <title>people cashone personal loan</title>
                        <path fill="#555" d="M50.75 47.239c-1.005-.07-1.776-.464-2.334-1.081-.372-.411-.574-.823-.656-1.109l.481-.137c.014.049.05.146.113.274.107.217.249.434.433.637.525.58 1.269.928 2.291.928 1.784 0 2.673-.807 2.673-2.156 0-.833-.631-1.382-1.861-1.833a16.544 16.544 0 00-.958-.312c-1.987-.61-2.75-1.267-2.75-2.424 0-1.286.978-2.16 2.569-2.264v-1.761h.5v1.753c1.111.039 1.857.461 2.283 1.144.269.432.358.862.358 1.162h-.5c0-.215-.071-.557-.283-.897-.354-.569-.995-.912-2.032-.912-1.527 0-2.395.704-2.395 1.775 0 .88.595 1.393 2.396 1.946.55.169.706.219.983.321 1.407.517 2.189 1.197 2.189 2.303 0 1.59-1.06 2.598-3 2.654v1.752h-.5v-1.761zm-10.071-5.63a.5.5 0 01-.661.353l-7.401-2.77a3.997 3.997 0 01-.89-.32l-.035-.018a.496.496 0 01-.115-.081c-.659-.394-1.077-.978-1.077-1.774a.5.5 0 011 0c0 .433.255.748.719.987a.49.49 0 01.076.048c.208.092.417.156.605.201l7.468 2.789a.5.5 0 01.321.53c.943-5.133 5.309-9.055 10.621-9.055 6.075 0 11.191 5.09 11.191 11.136 0 6.022-4.956 10.864-11.054 10.864-.873 0-1.721-.099-2.533-.288v5.787a.5.5 0 01-1 0v-5.783c0-.096.027-.186.074-.262-4.366-1.424-7.487-5.481-7.487-10.319 0-.691.061-1.369.179-2.026zM13.505 16.073a.457.457 0 01-.005-.082C13.505 9.644 18.652 4.5 25 4.5s11.495 5.144 11.5 11.491a.52.52 0 01-.006.088l-.001.009-1.559 9.727c-1.141 5.279-5.022 8.685-9.128 8.685h-1.728c-4.065 0-7.875-3.373-9.134-8.717l-1.438-9.701-.001-.009zm.995-.109l1.426 9.631c1.149 4.872 4.576 7.905 8.152 7.905h1.728c3.617 0 7.105-3.062 8.145-7.87l1.549-9.67C35.479 10.179 30.786 5.499 25 5.499s-10.48 4.682-10.5 10.464zm3.183 22.106a.515.515 0 01.113-.081c.454-.237.704-.553.704-.989a.5.5 0 011 0c0 .751-.369 1.316-.959 1.709a.495.495 0 01-.169.144l-.08.04c-.298.145-.59.234-.809.281L5.522 44.285C4.336 44.692 2.5 47.306 2.5 48.93V60a.5.5 0 01-1 0V48.93c0-2.048 2.105-5.045 3.664-5.578l11.973-5.118.103-.031c.109-.021.271-.065.443-.133zM5.75 48h.5v12h-.5V48zm45.559-14.5c-5.447 0-9.809 4.563-9.809 10.136 0 5.487 4.417 9.864 9.946 9.864 5.552 0 10.054-4.4 10.054-9.864 0-5.492-4.667-10.136-10.191-10.136z">
                        </path>
                      </svg>
                    </div>
                    <h2 className="sc-quick-links__title">Personal Loans</h2>
                  </a>
                </li>
                <li className="sc-quick-links__item">
                  <a className="sc-quick-links__link" href="/ng/credit-cards/">
                    <div className="sc-icon sc-icon--hover icon_sc_l_card_mastercard" aria-hidden="true">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="card mastercard">
                        <title>card mastercard</title>
                        <path fill="#555" d="M61.5 20.75v-4.029c0-2.334-1.837-4.221-4.096-4.221H6.595c-2.259 0-4.096 1.887-4.096 4.221v30.557c0 2.334 1.837 4.221 4.096 4.221h50.809c2.259 0 4.096-1.887 4.096-4.221V21.249H3a.25.25 0 010-.5h58.5zm1-4.029v30.557c0 2.881-2.278 5.221-5.096 5.221H6.595c-2.817 0-5.096-2.34-5.096-5.221V16.721c0-2.881 2.278-5.221 5.096-5.221h50.809c2.817 0 5.096 2.341 5.096 5.221zM6.25 47a.25.25 0 01-.5 0V25a.25.25 0 01.5 0v22zM46 29.7c2.383 0 4.3 1.946 4.3 4.332s-1.917 4.332-4.3 4.332c-2.384 0-4.3-1.946-4.3-4.332S43.616 29.7 46 29.7zm0 .541c-2.035 0-3.7 1.69-3.7 3.79s1.665 3.791 3.7 3.791 3.7-1.69 3.7-3.791-1.665-3.791-3.7-3.791zm5-.541c2.383 0 4.3 1.946 4.3 4.332s-1.917 4.332-4.3 4.332-4.3-1.946-4.3-4.332S48.617 29.7 51 29.7zm0 .541c-2.035 0-3.7 1.69-3.7 3.79s1.665 3.791 3.7 3.791 3.7-1.69 3.7-3.791-1.665-3.791-3.7-3.791z">
                        </path>
                      </svg>
                    </div>
                    <h2 className="sc-quick-links__title">Credit Cards</h2>
                  </a>
                </li>
                <li className="sc-quick-links__item">
                  <a className="sc-quick-links__link" href="/ng/debit-cards/">
                    <div className="sc-icon sc-icon--hover icon_sc_l_card_debit" aria-hidden="true">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="card debit">
                        <title>card debit</title>
                        <path fill="#555" d="M61.5 20.75v-4.029c0-2.334-1.837-4.221-4.096-4.221H6.595c-2.259 0-4.096 1.887-4.096 4.221v30.557c0 2.334 1.837 4.221 4.096 4.221h50.809c2.259 0 4.096-1.887 4.096-4.221V21.249H3a.25.25 0 010-.5h58.5zm1-4.029v30.557c0 2.881-2.278 5.221-5.096 5.221H6.595c-2.817 0-5.096-2.34-5.096-5.221V16.721c0-2.881 2.278-5.221 5.096-5.221h50.809c2.817 0 5.096 2.341 5.096 5.221zM6.25 47a.25.25 0 01-.5 0V25a.25.25 0 01.5 0v22zm30.511-14.896c-.233 0-.444-.043-.634-.129s-.352-.208-.486-.366c-.134-.157-.236-.35-.307-.576s-.107-.48-.107-.761c0-.285.039-.541.117-.767s.184-.419.32-.576c.136-.157.297-.278.482-.363s.386-.126.602-.126a1.247 1.247 0 011.101.615h.013c-.009-.078-.014-.175-.016-.291s-.003-.233-.003-.35v-1.23h.602V32h-.596v-.498h-.013c-.112.19-.258.338-.437.443s-.392.159-.638.159zm.045-.499c.186 0 .345-.033.479-.1s.245-.16.333-.278c.088-.119.153-.259.194-.421s.062-.338.062-.528c0-.194-.023-.373-.068-.537s-.113-.305-.204-.424c-.091-.119-.203-.21-.337-.275s-.287-.097-.46-.097c-.16 0-.3.033-.421.1s-.221.16-.301.278c-.08.119-.14.26-.181.424s-.062.341-.062.531.02.366.062.528.101.302.181.421c.08.119.18.211.301.278s.261.1.421.1zm3.975.492c-.268 0-.506-.047-.715-.142s-.387-.226-.534-.392c-.147-.166-.258-.36-.333-.583a2.227 2.227 0 01.007-1.424c.08-.222.192-.416.337-.583a1.556 1.556 0 011.207-.534c.259 0 .488.047.686.142s.367.227.505.395c.142.173.249.38.32.621s.107.511.107.809h-2.667c.013.168.045.326.097.473s.123.274.214.382c.091.108.201.192.33.252s.278.091.447.091c.242 0 .441-.053.599-.159s.264-.251.32-.437h.589c-.078.324-.249.586-.515.787s-.599.301-1 .301zm-.033-3.191c-.155 0-.293.027-.414.081s-.224.128-.311.223c-.086.095-.155.207-.207.337s-.086.272-.104.427h2.013c-.017-.337-.109-.599-.275-.787s-.4-.282-.702-.282zm3.962 3.198c-.233 0-.444-.051-.634-.152s-.341-.249-.453-.443h-.019v.492h-.596v-4.816h.602v1.23c0 .134-.002.259-.007.375l-.013.285h.019c.112-.186.263-.338.453-.456s.412-.178.667-.178c.22 0 .421.042.602.126s.338.205.469.363c.132.157.233.35.304.576s.107.482.107.767c0 .28-.035.534-.104.761s-.168.419-.298.576c-.129.157-.287.279-.473.366s-.395.129-.628.129zm-.065-.499c.16 0 .299-.033.417-.1s.218-.16.298-.278c.08-.119.139-.259.178-.421s.058-.338.058-.528-.019-.367-.058-.531-.097-.305-.175-.424c-.078-.119-.176-.211-.294-.278s-.258-.1-.417-.1c-.186 0-.345.035-.479.104s-.245.164-.333.285c-.088.121-.154.262-.197.424s-.065.335-.065.521c0 .19.023.366.068.528s.112.302.201.421c.088.119.2.211.333.278s.289.1.466.1zm2.194-4.421h.628v.699h-.628v-.699zm.013 1.34h.602V32h-.602v-3.476zm1.217 0h.544V27.43h.596v1.094h.718v.466h-.718v2.194c0 .125.031.21.094.256s.15.068.262.068c.052 0 .107-.005.165-.016s.105-.02.139-.029h.019v.505a2.094 2.094 0 01-.486.058c-.233-.004-.423-.059-.57-.165s-.22-.286-.22-.541v-2.33h-.544v-.466z">
                        </path>
                      </svg>
                    </div>
                    <h2 className="sc-quick-links__title">Debit Cards</h2>
                  </a>
                </li>
                <li className="sc-quick-links__item">
                  <a className="sc-quick-links__link" href="/ng/invest/">
                    <div className="sc-icon sc-icon--hover icon_sc_l_added_value_grow_02" aria-hidden="true">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="added value grow">
                        <title>added value grow</title>
                        <path fill="#555" d="M50.056 27.289l.044.184c.056.243.112.518.163.823.305 1.792.349 3.679-.04 5.459-1.035 4.737-4.791 7.323-11.915 6.639a.346.346 0 01-.031.022l-3 2a.5.5 0 11-.554-.832l2.065-1.376-.011-.002-.066-.355a11.21 11.21 0 01-.107-.776c-.203-1.864-.144-3.897.363-5.823 1.337-5.078 5.342-7.693 12.658-6.45l.186.032.02-.018a.25.25 0 11.339.367l-.114.105zM37.581 38.804l.017.164c.014.13.028.246.041.346 7.141.898 10.648-1.386 11.607-5.773.358-1.637.317-3.401.031-5.078a16.674 16.674 0 00-.071-.39L37.581 38.804zm-.051-.633l11.346-10.474c-6.423-.93-9.771 1.363-10.942 5.81-.401 1.522-.501 3.136-.404 4.663zM29.75 21.18a3.717 3.717 0 01-2.238-1.251 3.951 3.951 0 01-.587-.906 2.87 2.87 0 01-.166-.426l.482-.131c.017.064.061.186.136.345.127.27.296.54.513.791.62.718 1.498 1.148 2.699 1.148 2.101 0 3.16-1.007 3.16-2.691 0-1.052-.75-1.736-2.202-2.294a17.95 17.95 0 00-1.119-.382c-2.302-.74-3.175-1.528-3.175-2.908 0-1.405.935-2.401 2.497-2.659V8h.5v1.76a5.4 5.4 0 01.34-.01c1.396 0 2.32.518 2.833 1.381a2.994 2.994 0 01.409 1.386h-.5a2.47 2.47 0 00-.339-1.131c-.422-.71-1.182-1.136-2.403-1.136-1.8 0-2.836.88-2.836 2.225 0 1.111.71 1.751 2.828 2.432.641.206.823.267 1.146.391 1.624.625 2.523 1.443 2.523 2.761 0 1.966-1.289 3.191-3.66 3.191a5.39 5.39 0 01-.34-.011V23h-.5v-1.82zm-16.651 6.481l10.069 9.154a.25.25 0 11-.336.37l-10.36-9.418c-.134.025-.268.053-.404.082a11.53 11.53 0 00-.231.82c-.387 1.595-.478 3.257-.095 4.792.982 3.939 4.832 6.175 12.697 5.779l.205-.01 2.689 2.398a.5.5 0 11-.666.746l-2.383-2.125c-8.169.367-12.41-2.128-13.512-6.545-.428-1.715-.328-3.531.093-5.27.08-.329.166-.629.252-.893a6.65 6.65 0 01.12-.342l.097-.247.259-.058.21-.045.012-.015a.25.25 0 01.308-.05c4.467-.858 7.891.265 10.22 2.896 1.822 2.059 2.83 4.984 2.83 7.315a.5.5 0 01-1 0c0-2.096-.926-4.785-2.578-6.652-1.954-2.208-4.761-3.232-8.496-2.68zM30.5 43.505c1.814-.004 3.005-.005 3.419-.005 1.959 0 3.543 1.477 3.581 3.519.035 1.997-1.695 3.489-3.616 3.489l-10.558-.003a.5.5 0 010-1l10.558.003c1.395 0 2.64-1.073 2.616-2.471-.027-1.485-1.156-2.537-2.581-2.537l-3.669.006V48a.25.25 0 01-.5 0v-3.493l-3.199.007-.683.001-4.744.01-2.102.005c-4.089 0-7.166.919-10.308 3.811l-4.376 4.027a.5.5 0 01-.678-.735l4.376-4.027c3.352-3.085 6.667-4.075 10.984-4.075l2.101-.005 4.744-.01.683-.001 2.951-.006V31.001a.5.5 0 011 0v12.505zm13.8 4.52a.499.499 0 01.092-.12l.15-.145.089-.098a.508.508 0 01.098-.083l9.442-9.108c1.386-1.337 3.619-1.307 5.192.16 1.542 1.439 1.464 3.746.093 5.069L45.795 56.878c-2.722 2.626-5.506 3.683-9.441 3.683l-13.439.047-.457-.001c-1.88-.005-2.923.02-4.152.136-2.343.222-4.048.738-4.958 1.616a.5.5 0 11-.694-.72c1.118-1.078 3.007-1.65 5.558-1.892 1.271-.12 2.338-.145 4.248-.141l.453.001 13.439-.047c3.685 0 6.218-.962 8.748-3.403l13.661-13.178c.972-.938 1.028-2.583-.081-3.618-1.191-1.111-2.819-1.132-3.815-.171l-9.606 9.266c-2.117 2.317-1.787 1.966-2.319 2.342-.785.555-1.531.7-3.226.7H39a.5.5 0 010-1h.714c1.506 0 2.074-.111 2.649-.517.422-.298.184-.039 1.938-1.959zM29.273 1.5C36.452 1.5 42.5 7.517 42.5 14.661c0 7.116-5.856 12.839-13.065 12.839-7.185 0-12.935-5.7-12.935-12.839C16.5 7.433 22.172 1.5 29.273 1.5zm0 1C22.735 2.5 17.5 7.976 17.5 14.661c0 6.585 5.301 11.839 11.935 11.839 6.661 0 12.065-5.28 12.065-11.839C41.5 8.07 35.901 2.5 29.273 2.5z">
                        </path>
                      </svg>
                    </div>
                    <h2 className="sc-quick-links__title">Wealth</h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <link rel="stylesheet" id="sc-promo-carousel-style-css" href="https://av.sc.com/assets/global/css/lite/sc-promo-carousel.min.css?ver=4eb94f5" media="all" />
        <div className="sc-promo-carousel sc-promo-carousel--with-tags" id="sc-lb-module-promo-carousel" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-content-wrapper">
            <div className="sc-promo-carousel__head sc-promo-carousel__head--left">
              <div className="sc-promo-carousel__headings">
                <h2 className="sc-promo-carousel__main-title">Promotions</h2>
              </div>
              <a href="https://www.sc.com/ng/promotions/the-good-life-privileges/?incid=hppromtlevwal" className="sc-promo-carousel__view-all">View More</a>
            </div>
            <div className="sc-carousel">
              <div className="sc-promo-carousel__list" role="list">
                <div className="sc-promo-carousel__item" role="listitem">
                  <div className="sc-promo-carousel__link sc-promo-carousel__link--black">
                    <a href="https://www.sc.com/ng/invest/fixed-income-securities/?intcid=hppromtle2" className="sc-promo-carousel__image-link">
                      <picture>
                        <source srcSet="https://av.sc.com/ng/content/images/ng-frame-3390.jpg" media="(min-width: 1025px)" />
                        <source srcSet="https://av.sc.com/ng/content/images/ng-frame-3390-mbl.png" media="(max-width: 1024px)" />
                        <img src="https://av.sc.com/ng/content/images/ng-frame-3390.jpg" className="sc-promo-carousel__image" loading="lazy" alt="Electronics, Phone, Mobile Phone" />
                      </picture>
                    </a>
                    <p className="sc-promo-carousel__title">
                      <a href="https://www.sc.com/ng/invest/fixed-income-securities/?intcid=hppromtle2">Maximize
                        opportunities for greater returns with our Bonds offering</a>
                    </p>
                    <p className="sc-promo-carousel__desc">
                      <a href="https://www.sc.com/ng/invest/fixed-income-securities/?intcid=hppromtle2">Start
                        by investing a minimum of NGN100,000 in FGN Bonds</a>
                    </p>
                  </div>
                </div>
                <div className="sc-promo-carousel__item" role="listitem">
                  <div className="sc-promo-carousel__link sc-promo-carousel__link--black">
                    <a href="https://www.sc.com/ng/invest/?intcid=hppromtle4" className="sc-promo-carousel__image-link">
                      <picture>
                        <source srcSet="https://av.sc.com/ng/content/images/ng-frame-3396.jpg" media="(min-width: 1025px)" />
                        <source srcSet="https://av.sc.com/ng/content/images/ng-frame-3396-mbl.png" media="(max-width: 1024px)" />
                        <img src="https://av.sc.com/ng/content/images/ng-frame-3396.jpg" className="sc-promo-carousel__image" loading="lazy" alt="Nature, Outdoors, Furniture" />
                      </picture>
                    </a>
                    <p className="sc-promo-carousel__title">
                      <a href="https://www.sc.com/ng/invest/?intcid=hppromtle4">Interested in
                        attractive Yields</a>
                    </p>
                    <p className="sc-promo-carousel__desc">
                      <a href="https://www.sc.com/ng/invest/?intcid=hppromtle4">Maximise opportunities
                        for greater returns with our Bonds offering</a>
                    </p>
                  </div>
                </div>
                <div className="sc-promo-carousel__item" role="listitem">
                  <div className="sc-promo-carousel__link sc-promo-carousel__link--black">
                    <a href="https://www.sc.com/ng/banking/sc-mobile/?intcid=hppromtle5" className="sc-promo-carousel__image-link">
                      <picture>
                        <source srcSet="https://av.sc.com/ng/content/images/ng-frame-3394.jpg" media="(min-width: 1025px)" />
                        <source srcSet="https://av.sc.com/ng/content/images/ng-frame-3394-mbl.png" media="(max-width: 1024px)" />
                        <img src="https://av.sc.com/ng/content/images/ng-frame-3394.jpg" className="sc-promo-carousel__image" loading="lazy" alt="Electronics, Phone, Mobile Phone" />
                      </picture>
                    </a>
                    <p className="sc-promo-carousel__title">
                      <a href="https://www.sc.com/ng/banking/sc-mobile/?intcid=hppromtle5">Tailor-made
                        Investment services for you</a>
                    </p>
                    <p className="sc-promo-carousel__desc">
                      <a href="https://www.sc.com/ng/banking/sc-mobile/?intcid=hppromtle5">Log on to
                        SC Mobile App and click on Investment Profile under Investing Menu</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-bnr sc-bnr-pintiles   sc-bnr-pintiles--container" id="sc-lb-module-promotional-masthead" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-bnr__wrapper">
            <div className="sc-bnr__content">
              <h2 className="sc-bnr__heading">
                What’s New </h2>
              {/* Tiles */}
              <div className="sc-carousel sc-carousel--activated ">
                <div className="sc-carousel__pintiles">
                  {/* Tile item */}
                  <div className="sc-carousel__pintiles-item-wrapper" data-banner-id id="sc-lb-module-promotional-masthead-1" data-disallow-personalization="on">
                    <a title="Does that online bargain look like a steal?" data-context="Promotional Masthead Tiles" href="https://www.sc.com/en/about/fighting-financial-crime/fighting-fraud/personal-account/" className="sc-carousel__pintiles-item">
                      <div className="sc-grid-tile ">
                        <div className="sc-grid-tile__image">
                          <img width={300} height={300} src="https://av.sc.com/ng/content/images/ng-app-online-purchasing-mobile-banner-400x400-1-300x300.jpg" className="sc-img sc-grid-tile__img" alt="Ng app online purchasing mobile banner " loading="lazy" />
                        </div>
                        <div className="sc-grid-tile__content">
                          <h3 className="sc-heading">
                            Does that online bargain look like a steal? </h3>
                          <p className="sc-text">
                            Careful – it just might be </p>
                          <span className="sc-link-icon">
                            More <span className="icon-arrow-2" aria-hidden="true">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="icon-arrow-2">
                                <title>icon-arrow-2</title>
                                <path fill="#c4c4c4" d="M54.642 32.084l-10.694-10.36v6.851H9.358v6.851h34.59v7.018z">
                                </path>
                              </svg> </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End tile item */}
                  {/* Tile item */}
                  <div className="sc-carousel__pintiles-item-wrapper" data-banner-id id="sc-lb-module-promotional-masthead-2" data-disallow-personalization="on">
                    <a title="Visa Platinum Credit Card – Enjoy Higher Credit Card Limits" data-context="Promotional Masthead Tiles" href="https://www.sc.com/ng/credit-cards/visa-platinum/" className="sc-carousel__pintiles-item">
                      <div className="sc-grid-tile ">
                        <div className="sc-grid-tile__image">
                          <img width={300} height={300} src="https://av.sc.com/ng/content/images/PlatinumCreditCard-ng.jpg" className="sc-img sc-grid-tile__img" alt="Platinumcreditcard ng" loading="lazy" />
                        </div>
                        <div className="sc-grid-tile__content">
                          <h3 className="sc-heading">
                            Visa Platinum Credit Card – Enjoy Higher Credit Card Limits </h3>
                          <p className="sc-text">
                            Welcome to a whole new world of elite privileges coming your way
                          </p>
                          <span className="sc-link-icon">
                            More <span className="icon-arrow-2" aria-hidden="true">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="icon-arrow-2">
                                <title>icon-arrow-2</title>
                                <path fill="#c4c4c4" d="M54.642 32.084l-10.694-10.36v6.851H9.358v6.851h34.59v7.018z">
                                </path>
                              </svg> </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End tile item */}
                  {/* Tile item */}
                  <div className="sc-carousel__pintiles-item-wrapper" data-banner-id id="sc-lb-module-promotional-masthead-3" data-disallow-personalization="on">
                    <a title="Personal Loan | Online Loan In Nigeria" data-context="Promotional Masthead Tiles" href="https://www.sc.com/ng/borrow/personal-loan/" className="sc-carousel__pintiles-item">
                      <div className="sc-grid-tile ">
                        <div className="sc-grid-tile__image">
                          <img width={300} height={300} src="https://av.sc.com/ng/content/images/ng-couples-personal-loan-400x-400y.jpg" className="sc-img sc-grid-tile__img" alt="Personal Loan" loading="lazy" />
                        </div>
                        <div className="sc-grid-tile__content">
                          <h3 className="sc-heading">
                            Personal Loan | Online Loan In Nigeria </h3>
                          <p className="sc-text">
                            Unlock a world of possibilities, fulfil your future plans today
                            with an unsecured Personal Loan </p>
                          <span className="sc-link-icon">
                            More <span className="icon-arrow-2" aria-hidden="true">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="icon-arrow-2">
                                <title>icon-arrow-2</title>
                                <path fill="#c4c4c4" d="M54.642 32.084l-10.694-10.36v6.851H9.358v6.851h34.59v7.018z">
                                </path>
                              </svg> </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End tile item */}
                  {/* Tile item */}
                  <div className="sc-carousel__pintiles-item-wrapper" data-banner-id id="sc-lb-module-promotional-masthead-4" data-disallow-personalization="on">
                    <a title="SC Mobile" data-context="Promotional Masthead Tiles" href="/ng/banking/sc-mobile/" className="sc-carousel__pintiles-item">
                      <div className="sc-grid-tile ">
                        <div className="sc-grid-tile__image">
                          <img width={300} height={300} src="https://av.sc.com/ng/content/images/ng-sc-mobile-app-masthead-400x400y.jpg" className="sc-img sc-grid-tile__img" alt="Ng sc mobile app masthead xy" loading="lazy" />
                        </div>
                        <div className="sc-grid-tile__content">
                          <h3 className="sc-heading">
                            SC Mobile </h3>
                          <p className="sc-text">
                            Open your bank account instantly on our SC Mobile App. </p>
                          <span className="sc-link-icon">
                            More <span className="icon-arrow-2" aria-hidden="true">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="icon-arrow-2">
                                <title>icon-arrow-2</title>
                                <path fill="#c4c4c4" d="M54.642 32.084l-10.694-10.36v6.851H9.358v6.851h34.59v7.018z">
                                </path>
                              </svg> </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End tile item */}
                  {/* Tile item */}
                  <div className="sc-carousel__pintiles-item-wrapper" data-banner-id id="sc-lb-module-promotional-masthead-5" data-disallow-personalization="on">
                    <a title="Reward for As" data-context="Promotional Masthead Tiles" href="https://www.sc.com/ng/priority/reward-for-a/" className="sc-carousel__pintiles-item">
                      <div className="sc-grid-tile ">
                        <div className="sc-grid-tile__image">
                          <img width={300} height={300} src="https://av.sc.com/ng/content/images/ng-reward-for-a-pintile-300x300.jpg" className="sc-img sc-grid-tile__img" alt="Person, Human, People" loading="lazy" />
                        </div>
                        <div className="sc-grid-tile__content">
                          <h3 className="sc-heading">
                            Reward for As </h3>
                          <p className="sc-text">
                            Spur children to excel academically, reward them for good
                            performance and cultivate savings culture from a tender age </p>
                          <span className="sc-link-icon">
                            More <span className="icon-arrow-2" aria-hidden="true">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" role="img" aria-label="icon-arrow-2">
                                <title>icon-arrow-2</title>
                                <path fill="#c4c4c4" d="M54.642 32.084l-10.694-10.36v6.851H9.358v6.851h34.59v7.018z">
                                </path>
                              </svg> </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* End tile item */}
                </div>
              </div>
              {/* End tiles */}
            </div>
          </div>
        </div>{/* /Hero */}
        <div className="sc-segments sc-segments--remove-top-padding" id="sc-lb-module-segment-list" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-content-wrapper">
            <input type="radio" className="sc-segments__input sc-segments__input--left" id="sc-lb-module-segment-list-22184-sc-segments-left" name="sc-lb-module-segment-list-sc-segments" defaultChecked />
            <label className="sc-segments__label" htmlFor="sc-lb-module-segment-list-22184-sc-segments-left">
              <span className="sc-segments__text">For individuals</span>
            </label>
            <input type="radio" className="sc-segments__input sc-segments__input--right" id="sc-lb-module-segment-list-22184-sc-segments-right" name="sc-lb-module-segment-list-sc-segments" />
            <label className="sc-segments__label" htmlFor="sc-lb-module-segment-list-22184-sc-segments-right">
              <span className="sc-segments__text">For companies</span>
            </label>
            <div className="sc-segments__block sc-segments__block--left" id="sc-lb-module-segment-list-22184-sc-segments-block-0">
              <a title="Banking for individuals" data-context="Segment List header links" href="#segment-title-22184-0" data-toggle-tab className="segment-tab">
                <h2 className="sc-heading only-desktop">Banking for individuals</h2>
              </a>
              <ul className="sc-segments__list">
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Personal Banking" data-context="Segment List segment links" href="/ng/personal/">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/gh-personal-banking-banner-400x-400y.jpg-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Gh personal banking banner x yjpg" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Personal Banking</h3>
                        <p className="sc-text">Simple and smarter banking to help you save, spend and
                          get rewarded.</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Priority Banking" data-context="Segment List segment links" href="/ng/priority/">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/gh-priority-banking-400x-400y.jpg-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Gh priority banking x yjpg" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Priority Banking</h3>
                        <p className="sc-text">Global expertise to help you preserve and grow your
                          wealth.</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Private Banking" data-context="Segment List segment links" href="https://www.sc.com/privatebank/en/">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/gh-private-banking-400x-400y.jpg-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Gh private banking x yjpg" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Private Banking</h3>
                        <p className="sc-text">Bespoke services that connect you to wealth
                          opportunities in our footprint.</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Premium Banking" data-context="Segment List segment links" href="/ng/premium/">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/ng-sky-premium-banking-400x-400y-new-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Premium Banking" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Premium Banking</h3>
                        <p className="sc-text">Premium Banking helps you prepare for life’s key
                          moments.</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Digital Banking" data-context="Segment List segment links" href="/ng/digital-banking/">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/ng-online-banking-digital-banking-ipad-computer-scaled-400x-400y.jpg-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Ng online banking digital banking ipad computer scaled x yjpg" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Digital Banking</h3>
                        <p className="sc-text">Bank anywhere with the World’s Best Digital Bank.</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sc-segments__block sc-segments__block--right" id="sc-lb-module-segment-list-22184-sc-segments-block-1">
              <a title="Banking for companies" data-context="Segment List header links" href="#segment-title-22184-1" data-toggle-tab className="segment-tab">
                <h2 className="sc-heading only-desktop">Banking for companies</h2>
              </a>
              <ul className="sc-segments__list">
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Business Banking" data-context="Segment List segment links" href="/ng/business/">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/gh-business-banking-400x-400y-new-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Gh business banking x y new" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Business Banking</h3>
                        <p className="sc-text">Easy and transparent banking to help you grow your
                          business.</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sc-segments__item">
                  <a className="sc-produt-tile__link" title="Corporate Banking" data-context="Segment List segment links" href="https://www.sc.com/en/banking-services/business-banking.html">
                    <div className="sc-grid-tile sc-grid-tile--horizondal">
                      <div className="sc-grid-tile__image">
                        <img width={200} height={200} src="https://av.sc.com/ng/content/images/gh-corporate-banking-400x-400y.jpg-200x200.jpg" className="sc-img sc-grid-tile__img" alt="Gh corporate banking x yjpg" loading="lazy" />
                      </div>
                      <div className="sc-grid-tile__content">
                        <h3 className="sc-heading">Corporate Banking</h3>
                        <p className="sc-text">Global banking solutions for MNCs and financial
                          institutions.</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sc-inline-bnr-wrapper">
          {/* SC Inline Banner Module Partial */}
          <div className="sc-bnr sc-bnr--inline" id="sc-lb-module-sc-inline-banner" data-post-status="publish-status" data-post-status-label="Published">
            <div className="sc-bnr__bg-wrapper">
              <img width={900} height={490} src="https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new.jpg" className="sc-img" alt="Nature, Outdoors, Spider Web" loading="lazy" srcSet="https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new.jpg 900w, https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new-768x418.jpg 768w, https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new-860x468.jpg 860w, https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new-882x480.jpg 882w, https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new-643x350.jpg 643w, https://av.sc.com/ng/content/images/ng-markets-view-on-the-go-new-600x327.jpg 600w" sizes="(max-width: 900px) 100vw, 900px" />
            </div>
            <div className="sc-bnr__wrapper">
              <div className="sc-bnr__content">
                <p className="sc-text sc-text--uppercase">
                  MARKET VIEWS ON-THE-GO </p>
                <h2 className="sc-bnr__heading">
                  Outlook 2021: Vaccinating against valuations </h2>
                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a href="https://www.sc.com/ng/market-outlook/?intcid=web&lang=en&ctry=NG&seg=GWM&channel=PLRB" title="Find Out More" data-context="Banner inline CTA link" className="sc-btn sc-btn--secondary sc-btn--white" target="_blank" aria-label="Find Out More - MARKET VIEWS ON-THE-GO">
                      <span className="only-desktop">Find Out More</span>
                      <span className="only-mobile">Find Out More</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* SC Inline Banner Module Partial */}
          <div className="sc-bnr sc-bnr--inline" id="sc-lb-module-sc-inline-banner-1" data-post-status="publish-status" data-post-status-label="Published">
            <div className="sc-bnr__bg-wrapper">
              <img width={882} height={480} src="https://av.sc.com/ng/content/images/ng-sc-mobile-key-882x-480y.jpg" className="sc-img" alt="Standard Chartered Mobile Key" loading="lazy" />
            </div>
            <div className="sc-bnr__wrapper">
              <div className="sc-bnr__content">
                <p className="sc-text sc-text--uppercase">
                  Standard Chartered Mobile Key </p>
                <h2 className="sc-bnr__heading">
                  Your mobile phone is now your token with Standard Chartered Mobile Key </h2>
                <ul className="sc-inline-buttons">
                  <li className="sc-inline-buttons__item">
                    <a href="https://www.sc.com/ng/banking/standard-chartered-mobile-key/" title="Find Out More" data-context="Banner inline CTA link" className="sc-btn sc-btn--secondary sc-btn--white" target="_blank" aria-label="Find Out More - Standard Chartered Mobile Key">
                      <span className="only-desktop">Find Out More</span>
                      <span className="only-mobile">Find Out More</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{/* Important Information List - Variant partial */}
        <div className="sc-information" id="sc-lb-module-important-info-list" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-content-wrapper">
            <div className="sc-information__header">
              <h2 className="sc-heading">Important Information</h2>
              <a className="sc-link-icon" href="/ng/important-information/" aria-label="More - Important Information">More <svg viewBox="0 0 38.3 38.3" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#c4c4c4" d="M32.7 19.2L26.3 13v4.1H5.6v4.1h20.7v4.2z" />
                </svg>
              </a>
            </div>
            <ul className="sc-information__list">
              <li className="sc-information__list-item">
                <a title="Unsecured Lending Empanelled Companies" data-context="Important Information icon link" href="https://av.sc.com/ng/content/docs/ng-unsecured-lending-empanalled-companies-list.pdf">
                  <span className="sc-information__highlight">January 16, 2024</span> Unsecured Lending
                  Empanelled Companies</a>
              </li>
              <li className="sc-information__list-item">
                <a title="Daily Card Exchange Rates" data-context="Important Information icon link" href="https://av.sc.com/ng/content/docs/ng-card-exchange-rate.pdf"> <span className="sc-information__highlight">March 1, 2024</span> Daily Card Exchange Rates</a>
              </li>
              <li className="sc-information__list-item">
                <a title="Bond & FX Prices" data-context="Important Information icon link" href="https://av.sc.com/ng/content/docs/ng-bond-fxdaily-prices.pdf"> <span className="sc-information__highlight">March 1, 2024</span> Bond &amp; FX Prices</a>
              </li>
              <li className="sc-information__list-item">
                <a title="Retail Banking Fees & Charges" data-context="Important Information icon link" href="https://www.sc.com/ng/retail-banking-fees-charges/"> <span className="sc-information__highlight">February 9, 2023</span> Retail Banking Fees &amp;
                  Charges</a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="sc-footer" id="sc-lb-module-footer" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-content-wrapper">
            <div className="sc-footer__column only-desktop">
              <ul className="sc-footer__list">
                <li>
                  <a title="About Us" data-context="Footer left column links" href="/ng/about-us/"> About Us
                  </a>
                </li>
                <li>
                  <a title="Board of Directors" data-context="Footer left column links" href="/ng/about-us/board-of-directors/"> Board of Directors </a>
                </li>
                <li>
                  <a title="News & Media" data-context="Footer left column links" href="/ng/news-media/"> News &amp; Media </a>
                </li>
                <li>
                  <a title="Protecting our clients and the financial system" data-context="Footer left column links" href="https://www.sc.com/protecting-our-clients/"> Protecting our clients and the
                    financial system </a>
                </li>
              </ul>
            </div>
            <div className="sc-footer__column only-desktop">
              <ul className="sc-footer__list">
                <li>
                  <a title="Careers" data-context="Footer center column links" href="https://www.sc.com/en/careers/"> Careers </a>
                </li>
                <li>
                  <a title="Client Terms" data-context="Footer center column links" href="https://av.sc.com/ng/content/docs/ng-client-terms.pdf"> Client Terms </a>
                </li>
                <li>
                  <a title="Our Global Website" data-context="Footer center column links" href="https://www.sc.com/en/"> Our Global Website </a>
                </li>
                <li>
                  <a title="Worldwide Locations" data-context="Footer center column links" href="https://www.sc.com/en/about-us/standard-chartered-worldwide/"> Worldwide
                    Locations </a>
                </li>
              </ul>
            </div>
            <div className="sc-footer__column only-desktop ">
              <ul className="sc-footer__list">
                <li>
                  <a title="Fighting Fraud" data-context="Footer right column links" href="https://www.sc.com/en/about/fighting-financial-crime/#fighting-fraud" target="_blank"> Fighting Fraud </a>
                </li>
                <li>
                  <a title="Important Information" data-context="Footer right column links" href="/ng/important-information/"> Important Information </a>
                </li>
                <li>
                  <a title="Security Tips" data-context="Footer right column links" href="https://www.sc.com/global/security-tips/"> Security Tips </a>
                </li>
                <li>
                  <a title="Terms and Conditions" data-context="Footer right column links" href="/ng/terms-conditions/"> Terms and Conditions </a>
                </li>
                <li>
                  <a title="Cookies Policy" data-context="Footer right column links" href="/ng/cookie-policy/"> Cookies Policy </a>
                </li>
                <li>
                  <a title="Privacy Notice" data-context="Footer right column links" href="/ng/privacy-notice/"> Privacy Notice </a>
                </li>
                <li>
                  <a title="IMS Policy Statement" data-context="Footer right column links" href="/ng/ims-policy-statements/"> IMS Policy Statement </a>
                </li>
                <li>
                  <a title="ISO 45001 Statement" data-context="Footer right column links" href="https://www.sc.com/ng/iso-45001-ohsms/"> ISO 45001 Statement </a>
                </li>
              </ul>
            </div>
            <div className="sc-footer__column">
              <div className="sc-footer__download-apps" data-ios-url="http://retail.sc.com/scmobile/ng/" data-android-url="http://retail.sc.com/scmobile/ng/">
                <div className="sc-footer__store-icon">
                  <a href="https://apps.apple.com/ng/app/sc-mobile-nigeria/id650746202" title="App Store" aria-label="Download On The App Store" className="sc-footer__app-link" target="_blank">
                    <span className="sc-hidden">App Icon</span>
                    <div className="icon hover-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="119.664" height={40} viewBox="0 0 119.664 40" role="img" aria-label="Download on the App Store">
                        <title>Download on the App Store</title>
                        <path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 005.517.19a6.665 6.665 0 00-1.9.627 6.438 6.438 0 00-1.62 1.18A6.258 6.258 0 00.82 3.617 6.601 6.601 0 00.195 5.52a12.993 12.993 0 00-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 00.18 2.002 6.588 6.588 0 00.624 1.905A6.208 6.208 0 001.998 38a6.274 6.274 0 001.618 1.179 6.7 6.7 0 001.901.63 13.455 13.455 0 002.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 002-.178 6.804 6.804 0 001.908-.63A6.277 6.277 0 00117.666 38a6.395 6.395 0 001.182-1.614 6.604 6.604 0 00.619-1.905 13.506 13.506 0 00.185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 00-.185-2.003 6.618 6.618 0 00-.62-1.903 6.466 6.466 0 00-2.798-2.8 6.768 6.768 0 00-1.908-.627 13.044 13.044 0 00-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z" fill="#a6a6a6" />
                        <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 01-1.87-.164 5.884 5.884 0 01-1.656-.548 5.406 5.406 0 01-1.397-1.016 5.32 5.32 0 01-1.02-1.397 5.722 5.722 0 01-.544-1.657 12.414 12.414 0 01-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 01.165-1.872 5.755 5.755 0 01.544-1.662 5.373 5.373 0 011.015-1.398 5.565 5.565 0 011.402-1.023 5.823 5.823 0 011.653-.544A12.586 12.586 0 017.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 011.858.162 5.938 5.938 0 011.671.548 5.594 5.594 0 012.415 2.42 5.763 5.763 0 01.535 1.649 12.995 12.995 0 01.174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 01-.17 1.853 5.739 5.739 0 01-.54 1.67 5.48 5.48 0 01-1.016 1.386 5.413 5.413 0 01-1.4 1.022 5.862 5.862 0 01-1.668.55 12.542 12.542 0 01-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z">
                        </path>
                        <g data-name="<Group>" fill="#fff">
                          <g data-name="<Group>">
                            <path data-name="<Path>" d="M24.769 20.3a4.949 4.949 0 012.356-4.151 5.066 5.066 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 001.52-3.092 4.782 4.782 0 01-2.92-4.4zm-2.732-8.09a4.872 4.872 0 001.115-3.49 4.957 4.957 0 00-3.208 1.66 4.636 4.636 0 00-1.144 3.36 4.1 4.1 0 003.237-1.53z">
                            </path>
                          </g>
                          <path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051zm17.101.38c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zm11.875 0c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm8.495 1.066c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 00.611-.043v1.463a5.104 5.104 0 01-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3zm2.719 6.67c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zm3.426-4.528h1.773v1.541h.043a2.16 2.16 0 012.177-1.635 2.866 2.866 0 01.637.069v1.738a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37h-1.858zm13.198 6.395c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 002.436 2.564 2.048 2.048 0 002.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z">
                          </path>
                        </g>
                        <path d="M37.826 8.731a2.64 2.64 0 012.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73zm-1.228 5.123h1.125a1.876 1.876 0 001.967-2.146 1.881 1.881 0 00-1.967-2.134h-1.125zm5.082-1.41a2.133 2.133 0 114.248 0 2.134 2.134 0 11-4.247 0zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm6.559 2.254h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889zm2.281-4.503h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.888zm5.24-1.758h.888v6.26h-.888zm2.124 4.007a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm1.849.98c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 001.166-.983zm2.053-.596c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 011.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 01-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zm6.964 0a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm2.107-2.249h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.889zm8.845-1.121v1.141h.976v.749h-.976v2.315c0 .472.194.679.637.679a2.967 2.967 0 00.339-.021v.74a2.916 2.916 0 01-.484.046c-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074zm2.19-.637h.88v2.481h.07a1.386 1.386 0 011.374-.806 1.483 1.483 0 011.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 00-1.134 1.142v2.63h-.888zm9.056 5.045a1.828 1.828 0 01-1.95 1.303 2.045 2.045 0 01-2.081-2.325 2.077 2.077 0 012.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 001.2 1.29 1.08 1.08 0 001.07-.546zm-3.126-1.451h2.275a1.086 1.086 0 00-1.109-1.167 1.152 1.152 0 00-1.166 1.167z" fill="#fff" data-name="<Group>" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="sc-footer__store-icon">
                  <a href="https://play.google.com/store/apps/details?id=com.sc.breezenigeria.banking&hl=en" title="Google Play" aria-label="Get It On Google Play" className="sc-footer__app-link" target="_blank">
                    <span className="sc-hidden">App Icon</span>
                    <div className="icon hover-icon">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} width={135} height={40} viewBox="0 0 135 40" xmlSpace="preserve" role="img" aria-label="Get it On GooglePlay">
                        <title>Get it On GooglePlay</title>
                        <path d="M130 40H5c-2.75 0-5-2.25-5-5V5c0-2.75 2.25-5 5-5h125c2.75 0 5 2.25 5 5v30c0 2.75-2.25 5-5 5z">
                        </path>
                        <path d="M130 .8a4.2 4.2 0 014.2 4.2v30a4.2 4.2 0 01-4.2 4.2H5A4.2 4.2 0 01.8 35V5A4.2 4.2 0 015 .8h125m0-.8H5C2.25 0 0 2.25 0 5v30c0 2.75 2.25 5 5 5h125c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5z" fill="#a6a6a6" />
                        <path d="M47.42 10.24c0 .84-.25 1.51-.75 2-.56.59-1.3.89-2.2.89-.87 0-1.6-.3-2.21-.9s-.91-1.35-.91-2.23c0-.89.3-1.63.91-2.23s1.34-.9 2.21-.9c.43 0 .84.08 1.23.25s.7.39.94.67l-.53.53c-.4-.47-.94-.71-1.64-.71-.63 0-1.18.22-1.64.67-.46.44-.69 1.02-.69 1.73s.23 1.29.69 1.73c.46.44 1.01.67 1.64.67.67 0 1.23-.22 1.68-.67.29-.29.46-.7.5-1.22h-2.18V9.8h2.91c.02.15.04.3.04.44zm4.61-2.5H49.3v1.9h2.46v.72H49.3v1.9h2.73V13h-3.5V7h3.5v.74zM55.28 13h-.77V7.74h-1.68V7h4.12v.74h-1.68l.01 5.26zm4.66 0V7h.77v6h-.77zm4.19 0h-.77V7.74h-1.68V7h4.12v.74h-1.68l.01 5.26zm9.48-.78c-.59.61-1.32.91-2.2.91s-1.61-.3-2.2-.91-.88-1.35-.88-2.22.29-1.62.88-2.22c.59-.61 1.32-.91 2.2-.91.87 0 1.6.3 2.2.91.59.61.89 1.35.89 2.22-.01.88-.3 1.62-.89 2.22zm-3.83-.5c.44.45.99.67 1.63.67s1.19-.22 1.63-.67c.44-.45.67-1.02.67-1.72s-.22-1.27-.67-1.72c-.44-.45-.99-.67-1.63-.67s-1.19.22-1.63.67c-.44.45-.67 1.02-.67 1.72s.23 1.27.67 1.72zm5.8 1.28V7h.94l2.92 4.67h.03l-.03-1.16V7h.77v6h-.8l-3.05-4.89h-.03l.03 1.16V13h-.78z" fill="#fff" stroke="#fff" strokeWidth=".2" strokeMiterlimit={10}>
                        </path>
                        <path d="M68.14 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25s4.27-1.8 4.27-4.25c0-2.46-1.92-4.25-4.27-4.25zm0 6.83c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58s2.4 1.05 2.4 2.58c0 1.52-1.12 2.58-2.4 2.58zm-9.32-6.83c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25s4.27-1.8 4.27-4.25c0-2.46-1.92-4.25-4.27-4.25zm0 6.83c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58s2.4 1.05 2.4 2.58c0 1.52-1.11 2.58-2.4 2.58zm-11.08-5.52v1.8h4.32c-.13 1.01-.47 1.76-.98 2.27-.63.63-1.61 1.32-3.33 1.32-2.66 0-4.74-2.14-4.74-4.8s2.08-4.8 4.74-4.8c1.43 0 2.48.56 3.25 1.29l1.27-1.27c-1.08-1.03-2.51-1.82-4.53-1.82-3.64 0-6.7 2.96-6.7 6.61 0 3.64 3.06 6.61 6.7 6.61 1.97 0 3.45-.64 4.61-1.85 1.19-1.19 1.56-2.87 1.56-4.22 0-.42-.03-.81-.1-1.13h-6.07v-.01zm45.31 1.4c-.35-.95-1.43-2.71-3.64-2.71-2.19 0-4.01 1.72-4.01 4.25 0 2.38 1.8 4.25 4.22 4.25 1.95 0 3.08-1.19 3.54-1.88l-1.45-.97c-.48.71-1.14 1.18-2.09 1.18s-1.63-.44-2.06-1.29l5.69-2.35-.2-.48zm-5.8 1.42c-.05-1.64 1.27-2.48 2.22-2.48.74 0 1.37.37 1.58.9l-3.8 1.58zM82.63 30h1.87V17.5h-1.87V30zm-3.06-7.3h-.07c-.42-.5-1.22-.95-2.24-.95-2.13 0-4.08 1.87-4.08 4.27 0 2.38 1.95 4.24 4.08 4.24 1.01 0 1.82-.45 2.24-.97h.06v.61c0 1.63-.87 2.5-2.27 2.5-1.14 0-1.85-.82-2.14-1.51l-1.63.68c.47 1.13 1.71 2.51 3.77 2.51 2.19 0 4.04-1.29 4.04-4.43v-7.64h-1.77l.01.69zm-2.15 5.88c-1.29 0-2.37-1.08-2.37-2.56 0-1.5 1.08-2.59 2.37-2.59 1.27 0 2.27 1.1 2.27 2.59.01 1.48-.99 2.56-2.27 2.56zm24.39-11.08h-4.47V30h1.87v-4.74h2.61c2.07 0 4.1-1.5 4.1-3.88s-2.05-3.88-4.11-3.88zm.04 6.02H99.2v-4.29h2.65c1.4 0 2.19 1.16 2.19 2.14s-.79 2.15-2.19 2.15zm11.54-1.79c-1.35 0-2.75.6-3.33 1.91l1.66.69c.35-.69 1.01-.92 1.7-.92.96 0 1.95.58 1.96 1.61v.13c-.34-.19-1.06-.48-1.95-.48-1.79 0-3.6.98-3.6 2.81 0 1.67 1.46 2.75 3.1 2.75 1.25 0 1.95-.56 2.38-1.22h.06v.97h1.8v-4.79c.01-2.22-1.65-3.46-3.78-3.46zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-.96 1.06-1.33 1.98-1.33.82 0 1.21.18 1.7.42a2.257 2.257 0 01-2.22 1.97zM123.74 22l-2.14 5.42h-.06L119.32 22h-2.01l3.33 7.58-1.9 4.21h1.95L125.82 22h-2.08zm-16.8 8h1.87V17.5h-1.87V30z" fill="#fff" />
                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="21.802" y1="2074.429" x2="5.02" y2="2091.211" gradientTransform="translate(0 -2065.717)">
                          <stop offset={0} stopColor="#00a0ff" />
                          <stop offset=".007" stopColor="#00a1ff" />
                          <stop offset=".26" stopColor="#00beff" />
                          <stop offset=".512" stopColor="#00d2ff" />
                          <stop offset=".76" stopColor="#00dfff" />
                          <stop offset={1} stopColor="#00e3ff" />
                        </linearGradient>
                        <path d="M10.44 7.54c-.29.31-.46.79-.46 1.4v22.12c0 .62.17 1.1.46 1.4l.07.07L22.9 20.15v-.3L10.51 7.47l-.07.07z" fill="url(#a)" />
                        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="33.834" y1="2085.717" x2="9.637" y2="2085.717" gradientTransform="translate(0 -2065.717)">
                          <stop offset={0} stopColor="#ffe000" />
                          <stop offset=".409" stopColor="#ffbd00" />
                          <stop offset=".775" stopColor="orange" />
                          <stop offset={1} stopColor="#ff9c00" />
                        </linearGradient>
                        <path d="M27.03 24.28l-4.13-4.13v-.3l4.13-4.13.09.05 4.89 2.78c1.4.79 1.4 2.09 0 2.89l-4.89 2.78-.09.06z" fill="url(#b)" />
                        <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="24.826" y1="2088.011" x2="2.067" y2="2110.769" gradientTransform="translate(0 -2065.717)">
                          <stop offset={0} stopColor="#ff3a44" />
                          <stop offset={1} stopColor="#c31162" />
                        </linearGradient>
                        <path d="M27.12 24.22L22.9 20 10.44 32.46c.46.49 1.22.55 2.08.06l14.6-8.3" fill="url(#c)" />
                        <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="7.294" y1="2065.896" x2="17.457" y2="2076.058" gradientTransform="translate(0 -2065.717)">
                          <stop offset={0} stopColor="#32a071" />
                          <stop offset=".069" stopColor="#2da771" />
                          <stop offset=".476" stopColor="#15cf74" />
                          <stop offset=".801" stopColor="#06e775" />
                          <stop offset={1} stopColor="#00f076" />
                        </linearGradient>
                        <path d="M27.12 15.78l-14.61-8.3c-.86-.49-1.62-.43-2.08.06L22.9 20l4.22-4.22z" fill="url(#d)" />
                        <path d="M27.03 24.13l-14.52 8.25c-.81.46-1.54.43-2 .01l-.07.07.07.07c.47.42 1.19.45 2-.01l14.61-8.3-.09-.09z" opacity=".2" />
                        <path d="M10.44 32.32c-.29-.31-.46-.79-.46-1.4v.15c0 .62.17 1.1.46 1.4l.07-.07-.07-.08zM32.01 21.3l-4.99 2.83.09.09L32 21.44c.7-.4 1.05-.92 1.05-1.44-.05.47-.4.94-1.04 1.3z" opacity=".12" />
                        <path d="M12.51 7.62l19.5 11.08c.63.36.99.82 1.05 1.3 0-.52-.35-1.05-1.05-1.44L12.51 7.48c-1.4-.79-2.54-.13-2.54 1.47v.15c0-1.61 1.15-2.27 2.54-1.48z" opacity=".25" fill="#fff" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="sc-footer__contact-data">
                <ul className="sc-footer__segment">
                  <li>
                    <h3 className="sc-heading">PERSONAL BANKING CONTACTS </h3>
                    <p className="sc-footer__number-detail">Contact Centre Numbers</p>
                    <p className="sc-footer__number">
                      <a href="tel:+234127046114">
                        +234 1 270 4611 - 4 </a>
                    </p>
                    <p className="sc-footer__number">
                      <a href="tel:+2348001235000">
                        +234 800 123 5000 (Toll Free) </a>
                    </p>
                  </li>
                  <li>
                    <h3 className="sc-heading">CORPORATE &amp; INSTITUTIONAL AND COMMERCIAL BANKING CLIENTS
                      CONTACT </h3>
                    <p className="sc-footer__number-detail">Client Service Lines (Mon-Fri during business
                      hours)</p>
                    <p className="sc-footer__number">
                      <a href="tel:+234123682204">
                        +234 1 2368220 - 4 </a>
                    </p>
                    <p className="sc-footer__number">
                      <a href="tel:+23412368344">
                        +234 1 2368344 </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="sc-accordion only-mobile">
                <input className="sc-accordion__input" id="footer-quick-links" name="footer-quick-links-27762" type="checkbox" tabIndex={-1} />
                <label className="sc-accordion__label" htmlFor="footer-quick-links" tabIndex={0}>Quick Links</label>
                <div className="sc-accordion__content">
                  <div className="sc-footer__mobile-list">
                    <ul>
                      <li>
                        <a title="About Us" data-context="Footer mobile links" href="/ng/about-us/"> About Us </a>
                      </li>
                      <li>
                        <a title="Board of Directors" data-context="Footer mobile links" href="/ng/about-us/board-of-directors/"> Board of Directors </a>
                      </li>
                      <li>
                        <a title="News & Media" data-context="Footer mobile links" href="/ng/news-media/"> News &amp; Media </a>
                      </li>
                      <li>
                        <a title="Protecting our clients and the financial system" data-context="Footer mobile links" href="https://www.sc.com/protecting-our-clients/"> Protecting our
                          clients and the financial system </a>
                      </li>
                      <li>
                        <a title="Careers" data-context="Footer mobile links" href="https://www.sc.com/en/careers/"> Careers </a>
                      </li>
                      <li>
                        <a title="Client Terms" data-context="Footer mobile links" href="https://av.sc.com/ng/content/docs/ng-client-terms.pdf"> Client
                          Terms </a>
                      </li>
                      <li>
                        <a title="Our Global Website" data-context="Footer mobile links" href="https://www.sc.com/en/"> Our Global Website </a>
                      </li>
                      <li>
                        <a title="Worldwide Locations" data-context="Footer mobile links" href="https://www.sc.com/en/about-us/standard-chartered-worldwide/">
                          Worldwide Locations </a>
                      </li>
                      <li>
                        <a title="Fighting Fraud" data-context="Footer mobile links" href="https://www.sc.com/en/about/fighting-financial-crime/#fighting-fraud">
                          Fighting Fraud </a>
                      </li>
                      <li>
                        <a title="Important Information" data-context="Footer mobile links" href="/ng/important-information/"> Important Information </a>
                      </li>
                      <li>
                        <a title="Security Tips" data-context="Footer mobile links" href="https://www.sc.com/global/security-tips/"> Security Tips </a>
                      </li>
                      <li>
                        <a title="Terms and Conditions" data-context="Footer mobile links" href="/ng/terms-conditions/"> Terms and Conditions </a>
                      </li>
                      <li>
                        <a title="Cookies Policy" data-context="Footer mobile links" href="/ng/cookie-policy/"> Cookies Policy </a>
                      </li>
                      <li>
                        <a title="Privacy Notice" data-context="Footer mobile links" href="/ng/privacy-notice/"> Privacy Notice </a>
                      </li>
                      <li>
                        <a title="IMS Policy Statement" data-context="Footer mobile links" href="/ng/ims-policy-statements/"> IMS Policy Statement </a>
                      </li>
                      <li>
                        <a title="ISO 45001 Statement" data-context="Footer mobile links" href="https://www.sc.com/ng/iso-45001-ohsms/"> ISO 45001 Statement
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-footer__footer">
              <div className="sc-footer__site-info only-desktop">
                <span className="sc-footer__company">© Standard Chartered Bank Nigeria Limited (Licensed by the
                  Central Bank of Nigeria)</span>
                <span className="sc-footer__sitemap">
                  <a title="Site map" data-context="Footer site map link" href="/ng/sitemap/"> Sitemap </a>
                </span>
              </div>
              <ul className="sc-footer__social-links">
                <li>
                  <a title="Facebook" data-context="Footer social media links" href="https://www.facebook.com/StandardCharteredNG/"><svg width={11} height={20} viewBox="0 0 11 20" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Facebook">
                      <title>icon-facebook</title>
                      <path d="M10.013 10.398H6.924v9.111H3.103v-9.111H.993V7.397h2.11V4.37c0-1.514.804-3.88 3.826-3.88l3.388.011v3.693H7.426c-.322 0-.502.168-.502.89v2.314h3.409l-.32 3z" fill="#434343" stroke="none" strokeWidth={1} fillRule="evenodd" />
                    </svg> </a>
                </li>
                <li>
                  <a title="Twitter" data-context="Footer social media links" href="https://twitter.com/StanChart/"><svg width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.025 19.59c-2.428-3.24-4.86-6.483-7.289-9.727l-1.062 1.128c2.376 3.173 4.755 6.342 7.135 9.51.044.058.088.115.132.177H16.87l-5.84-7.933-1.062 1.133c1.402 1.904 2.803 3.808 4.204 5.707l1.93 2.618H23c-.666-.868-1.318-1.741-1.975-2.614zM3.301 2.251h2.816l2.37 3.165c1.076 1.432 2.151 2.869 3.226 4.3.353-.378.706-.753 1.063-1.127C10.81 5.972 8.845 3.35 6.878.728H.277c1.86 2.525 3.715 5.05 5.575 7.575 1.058 1.432 2.111 2.86 3.164 4.292.353-.379.705-.753 1.063-1.132L3.3 2.253z" fill="#434343" />
                      <path d="M11.03 12.75c-.356.379-.709.758-1.061 1.132-1.785 1.904-3.574 3.808-5.36 5.707-.819.873-1.634 1.745-2.454 2.618H0l2.455-2.618 3.41-3.635c1.054-1.12 2.103-2.24 3.156-3.363.353-.379.705-.753 1.062-1.132l.948 1.29zM22.313.723c-2.86 3.045-5.72 6.095-8.576 9.14l-1.062 1.128-.961-1.282c.352-.379.705-.754 1.062-1.128 2.459-2.618 4.914-5.24 7.373-7.862h2.164v.004z" fill="#434343" />
                      <path d="M21.025 19.59c-2.428-3.24-4.86-6.483-7.289-9.727l-1.062 1.128c2.376 3.173 4.755 6.342 7.135 9.51.044.058.088.115.132.177H16.87l-5.84-7.933-1.062 1.133c1.402 1.904 2.803 3.808 4.204 5.707l1.93 2.618H23c-.666-.868-1.318-1.741-1.975-2.614zM3.301 2.251h2.816l2.37 3.165c1.076 1.432 2.151 2.869 3.226 4.3.353-.378.706-.753 1.063-1.127C10.81 5.972 8.845 3.35 6.878.728H.277c1.86 2.525 3.715 5.05 5.575 7.575 1.058 1.432 2.111 2.86 3.164 4.292.353-.379.705-.753 1.063-1.132L3.3 2.253z" fill="#434343" />
                      <path d="M11.03 12.75c-.356.379-.709.758-1.061 1.132-1.785 1.904-3.574 3.808-5.36 5.707-.819.873-1.634 1.745-2.454 2.618H0l2.455-2.618 3.41-3.635c1.054-1.12 2.103-2.24 3.156-3.363.353-.379.705-.753 1.062-1.132l.948 1.29zM22.313.723c-2.86 3.045-5.72 6.095-8.576 9.14l-1.062 1.128-.961-1.282c.352-.379.705-.754 1.062-1.128 2.459-2.618 4.914-5.24 7.373-7.862h2.164v.004z" fill="#434343" />
                    </svg> </a>
                </li>
                <li>
                  <a title="Linked In" data-context="Footer social media links" href="https://www.linkedin.com/company/standardchartered/"><svg width={21} height={20} viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="linkedin">
                      <title>icon-linkedin</title>
                      <path d="M20.011 12.444V20h-3.953v-7.049c0-1.771-.794-2.98-2.393-2.98-1.22 0-2.307.814-2.627 1.603-.117.282-.146.673-.146 1.068V20H6.938s.06-11.735 0-12.972h4.107v1.664l-.029.042h.029v-.042c.587-.896 1.843-2.177 4.189-2.177 2.906-.001 4.777 1.882 4.777 5.929zM1.18 20h3.849V7.028H1.18V20zM3.094 0c1.501 0 2.719 1.042 2.719 2.328 0 1.286-1.217 2.328-2.719 2.328-1.502 0-2.719-1.042-2.719-2.328C.375 1.042 1.592 0 3.094 0z" fill="#434343" stroke="none" strokeWidth={1} fillRule="evenodd" />
                    </svg> </a>
                </li>
              </ul>
            </div>
            <div className="clearer" />
          </div>
        </footer>
        <div className="sc-disclaimer" data-modal-id="external-links-disclaimer" id="sc-lb-module-sc-exter-disclaimer" data-post-status="publish-status" data-post-status-label="Published">
          <div className="sc-content-wrapper">
            <h2 className="sc-heading sc-heading--bordered" tabIndex={0}>Disclaimer</h2>
            <div className="sc-disclaimer__content">
              <div className="sc-disclaimer__content-mask sc-rte">
                <p className="sc-text">This is to inform that by clicking on the hyperlink, you will be leaving&nbsp;<a href="https://www.sc.com/ng/" rel="noopener">www.sc.com/ng</a>&nbsp;and entering a website
                  operated by other parties:</p>
                <p className="sc-text">Such links are only provided on our website for the convenience of the
                  Client and Standard Chartered Bank does not control or endorse such websites, and is not
                  responsible for their contents.</p>
                <p className="sc-text">The use of such website is also subject to the terms of use and other terms
                  and guidelines, if any, contained within each such website. In the event that any of the
                  terms contained herein conflict with the terms of use or other terms and guidelines
                  contained within any such website, then the terms of use and other terms and guidelines
                  for such website shall prevail.</p>
                <p className="sc-text">Thank you for visiting&nbsp;<a href="https://www.sc.com/ng/" target="_blank" rel="noopener">www.sc.com/ng</a></p>
                <p>&nbsp;</p>
              </div>
              <a href="#null" className="sc-btn sc-external-link-button" target="_blank" data-send="close-modal" title="PROCEED" rel="noopener noreferrer" data-context="Modal Disclaimer External Links Proceed Button">
                PROCEED </a>
            </div>
          </div>
        </div>
        <div className="helper-svg-gradients">
          <svg width="100px" height="100px" viewBox="0 0 100 100">
            <defs>
              {/* Gradient from blue to green */}
              <linearGradient id="gradient-blue-to-green" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#6cc9fe" offset={0} />
                <stop stopColor="#38d54a" offset={1} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
});