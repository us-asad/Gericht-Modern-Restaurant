import images from "constants/images";
import data from "constants/data";
import { SubHeading, MenuItem } from "components";

const AwardCard = ({imgUrl, title, subtitle}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl.src} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p
        className="p__cormorant"
        style={{color: "#dcca87"}}
      >{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

export default function Laurels() {
  return (
    <section id="awards" className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award, index) => <AwardCard key={index} {...award} />)}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img
          src={images.laurels.src}
          alt="laurels G"
        />
      </div>
    </section>
  );
}