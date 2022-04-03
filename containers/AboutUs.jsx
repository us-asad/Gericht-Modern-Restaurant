import Image from "next/image";
import images from "constants/images";
import { SpoonSvg } from "components";

export default function AboutUs() {
  return (
    <section id="about" className="app__aboutus app__bg flex__center section__padding">
      <div className="app__aboutus-overlay flex__center">
        <div>
          <Image
            src={images.G.src}
            alt="G"
            layout="fill"
          />
        </div>
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <SpoonSvg className="spoon__img" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button
            type="button"
            className="custom__button"
          >Know More</button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <div>
            <Image
              src={images.knife.src}
              alt="knife"
              layout="fill"
            />
          </div>
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <SpoonSvg className="spoon__img" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button
            type="button"
            className="custom__button"
          >Know More</button>
        </div>
      </div>
    </section>
  );
}