import images from "constants/images";
import { SubHeading } from "components";

export default function FindUs() {
  return (
    <section id="contact" className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 
          className="headtext__cormorant"
          style={{marginBottom: "3rem"}}
        >Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p
            className="p_cormorant"
            style={{color: "#dcca87", margin: "2rem 0"}}
          >Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{marginTop: "2rem"}}
        >Visit US</button>
      </div>
      <div className="app__wrapper_img">
        <img
          src={images.findus.src}
          alt="find us"
        />
      </div>
    </section>
  );
}