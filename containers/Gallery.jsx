import { useState, useRef } from "react";
import images from "constants/images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading, MenuItem } from "components";

const galleryImages = [];

for (const image in images) {
  image.includes("gallery") && galleryImages.push(images[image]);
}

export default function Gallery() {
  const scrollRef = useRef(null);

  const handleScroll = direction => scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;

  return (
    <section id="gallery" className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p 
          className="p__opensans"
          style={{color: "#aaa", marginTop: "2rem"}}
        >
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button
          type="button"
          className="custom__button"
        >View More</button>
      </div>
      <div className="app__gallery-images">
        <div
          className="app__gallery-images_container"
          ref={scrollRef}
        >
          {galleryImages?.map((image, index) => (
            <div key={`gallery_image${index}`} className="app__gallery-images_card flex__center">
              <img
                src={image.src}
                alt="gallery"
              />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort 
            className="gallery__arrow-icon"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort 
            className="gallery__arrow-icon"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </section>
  );
}