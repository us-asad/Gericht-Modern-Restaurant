import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "constants/images";
import data from "constants/data";
console.log(images)

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Image
          src={images.gericht.src}
          alt="app logo"
          layout="fill"
        />
      </div>
      <ul className="app__navbar-links">
        {data.navItems.map(({ name, url }, index) => (
          <li key={index} className="p__opensans">
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <Link href="#login">
          <a className="p__opensans">Log In / Register</a>
        </Link>
        <div />
        <Link href="/">
          <a className="p__opensans">Book Table</a>
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          cursor="pointer"
          onClick={() => setToggleMenu(prevState => !prevState)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(prevState => !prevState)}
            />
            <ul className="app__navbar-smallscreen_links">
              {data.navItems.map(({ name, url }, index) => (
                <li key={index} className="p__opensans">
                  <Link href={url}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}