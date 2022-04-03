import Image from "next/image";
import images from "constants/images";
import { SubHeading } from "components";

export default function Header() {
  return (
    <header id="home" className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{margin: "2rem 0"}}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
        </p>
        <button 
          type="button"
          className="custom__button"
        >Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <Image
          src={images.welcome.src}
          alt="welcome"
          width={images.welcome.width}
          height={images.welcome.height}
        />
      </div>
    </header>
  );
}