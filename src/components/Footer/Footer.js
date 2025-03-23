import React from "react";
import "./Footer.css";
import jeppiaar_logo from "../../static/jeppiaar.jpeg";
import LinkedInSVG from "../../static/social/linkedin2x.png";
import MapSVG from "../../static/social/Map.png";
import InstagramSVG from "../../static/social/instagram2x.png";
import FaceBookSVG from "../../static/social/facebook2x.png";
export default function Footer() {
  return (
    <div className="footer_div">
      <div className="footer_logo">
        <a referrerPolicy="no-referrer" target="_blank" href="https://jeppiaarcollege.org/">
        <img src={jeppiaar_logo} alt="logo" />
        </a>
        <div
          style={{ height: "50px", backgroundColor: "white", width: "2px" }}
        />
        <div className="text">
          DEPARTMENT OF INFORMATION TECHNOLOGY
        </div>
      </div>
      <div className="footer_social">
      <a referrerPolicy="no-referrer" target="_blank" href="https://maps.app.goo.gl/gqXQJakT4Lu7irWg9?g_st=aw">
        <div className="footer_social_icon">
          <img src={MapSVG} alt="map social" />
        </div>
        </a>
        <a referrerPolicy="no-referrer" target="_blank" href="https://www.instagram.com/revoitz_3.0">
        <div className="footer_social_icon">
          <img src={InstagramSVG} width="32px" alt="instagram social" />
        </div>
        </a>
        <a referrerPolicy="no-referrer" target="_blank" href="https://www.linkedin.com/school/jeppiaarengineeringcollege/">
        <div className="footer_social_icon">
          <img src={LinkedInSVG} width="32px" alt="linkedin social" />
        </div>
        </a>
      </div>
    </div>
  );
}
