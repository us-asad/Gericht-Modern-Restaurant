import images from "constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter, SpoonSvg } from "components";

export default function Footer() {
  return (
    <footer id="footer" className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img
            src={images.gericht.src}
            alt="GERICHT"
          />
          <p className="p__opensans">&#8220; The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others. &#8221;</p>
          <SpoonSvg
            className="spoon__img"
            style={{marginTop: 15}}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Mondat-Friday:</p>
          <p className="p__opensans">08:00 Am - 12:00 Pm</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 Am - 11:00 Pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">{new Date().getFullYear()} Gericht. All Rights reserved.</p>
      </div>
    </footer>
  );
}