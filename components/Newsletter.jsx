import { SubHeading } from "components";

export default function Newsletter() {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">
          And Never Miss Latest Updates!
        </p>
      </div>
      <form className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your e-mail addess"
        />
        <button
          type="button"
          className="custom__button"
        >Subscribe</button>
      </form>
    </div>
  );
}