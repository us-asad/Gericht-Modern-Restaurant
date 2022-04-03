import data from "constants/data";
import images from "constants/images";
import { SubHeading, MenuItem } from "components";

export default function SpecialMenu() {
  return (
    <section id="menu" className="app__specialMenu flex__center section__padding">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits Your Palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => <MenuItem key={index} {...wine} />)}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img
            src={images.menu.src}
            alt="menu img"
          />
        </div>
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => <MenuItem key={index} {...cocktail} />)}
          </div>
        </div>
      </div>
      <div style={{marginTop: "15px"}}>
        <button
          type="button"
          className="custom__button"
        >View More</button>
      </div>
    </section>
  );
}