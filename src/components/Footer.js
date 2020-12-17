import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/company/cloud-nord/"
              className="icon alt fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Cloud_Nord"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
                href="https://www.youtube.com/channel/UCD_iUcnDZgFlU_7fBmWH3tA"
                className="icon alt fa-youtube"
            >
              <span className="label">Youtube</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:cloudnord2020@gmail.com"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; 2020 association Cloud Nord</li>
          <li>
            Crédits : <a href="https://html5up.net/">HTML5 UP</a>
            &nbsp;+&nbsp;<a href="https://www.gatsbyjs.org/">Gatsby</a>
            &nbsp;+&nbsp;<a href="https://unsplash.com/">Unsplash</a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            <a href="/codeOfConduct/">Code of Conduct</a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1P-EIGURyrEvMpRafA7NaAXVYP0z6AZEo?usp=sharing">
              Kit Presse
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;
