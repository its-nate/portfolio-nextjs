import React from "react";

const Footer = () => (
  <footer className="page-footer">
    <div className="footer-copyright">
      <div className="container center-align">
        <div className="row">
          <div className="col s12">
            <span className="footer-text">
              © {new Date().getUTCFullYear()} Nate Micinski
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
