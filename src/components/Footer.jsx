import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

import footerLogo from "../assets/images/logo1.png";
import recentWork1 from "../assets/images/11.jpg";
import recentWork2 from "../assets/images/12.jpg";
import recentWork3 from "../assets/images/13.jpg";
import recentWork4 from "../assets/images/14.jpg";
import recentWork5 from "../assets/images/15.jpg";
import recentWork6 from "../assets/images/16.jpg";
import whatsappIcon from "../assets/images/whatsaap-icon.webp";
import "./Layout.css";

const recentWorks = [
  recentWork1,
  recentWork2,
  recentWork3,
  recentWork4,
  recentWork5,
  recentWork6,
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) {
      setStatus("Please enter your email address.");
      return;
    }
    setStatus("Thank you for subscribing.");
    setEmail("");
  }

  return (
    <>
      <footer className="sdbFooter">
        <div className="sdbFooterContainer">
          <div className="sdbFooterGrid">
            <div className="sdbFooterLeft">
              <div className="sdbFooterLogoBox">
                <img src={footerLogo} alt="Space Decor Belle" />
              </div>

              <div className="sdbJournal">
                <p className="sdbJournalEyebrow">SPACE DECOR BELLE JOURNAL</p>
                <h3 className="sdbJournalTitle">
                  Subscribe to our
                  <span>design journal.</span>
                </h3>
                <p className="sdbJournalCopy">
                  Rare projects, studio notes and
                  <br />
                  thoughtful material studies—shared
                  <br />
                  seasonally.
                </p>

                <form className="sdbNewsletterForm" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setStatus("");
                    }}
                    required
                  />
                  <button type="submit">
                    SUBSCRIBE
                    <span aria-hidden="true">→</span>
                  </button>
                </form>

                {status && <p className="sdbNewsletterStatus">{status}</p>}
              </div>
            </div>

            <div className="sdbFooterCenter">
              <p className="sdbRecentHeading">RECENT WORKS</p>
              <div className="sdbRecentGrid">
                {recentWorks.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Recent interior work ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>

              <div className="sdbTeamContact">
                <h4>TALK TO THE TEAM</h4>
                <a href="tel:+919654232327">(+91) 96542 32327</a>
                <a href="mailto:info@spacedecorbelle.com">info@spacedecorbelle.com</a>
              </div>
            </div>

            <div className="sdbFooterRight">
              <p className="sdbFollowHeading">FOLLOW US</p>
              <div className="sdbSocialVerticalLine" />

              <div className="sdbSocialGrid">
                <a href="https://wa.me/919654232327" target="_blank" rel="noreferrer" className="sdbSocialButton sdbWhatsapp" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="#" className="sdbSocialButton sdbFacebook" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="sdbSocialButton sdbLinkedin" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="sdbSocialButton sdbInstagram" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>

              <address className="sdbStudioCard sdbConsultationCard">
                <div className="sdbStudioIcon">
                  <FiMapPin />
                </div>
                <div className="sdbStudioText">
                  <strong>VISIT OUR CONSULTATION</strong>
                  <span>
                    K1, Green Park Extension
                    <br />
                    New Delhi – 110016
                    <br />
                    Opposite MCD Nursery
                    <br />
                    Office
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>

        <div className="sdbFooterBottom">
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
          <p>© SPACEDECORBELLE ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      <a
        href="https://wa.me/919654232327?text=Hello%20Space%20Decor%20Belle%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project."
        target="_blank"
        rel="noreferrer"
        className="sdbFloatingWhatsapp"
        aria-label="Chat with Space Decor Belle on WhatsApp"
      >
        <span className="sdbWhatsappInner">
          <img src={whatsappIcon} alt="WhatsApp" />
        </span>
      </a>
    </>
  );
}
