import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "constants/images";
import data from "constants/data";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => setToggleMenu(prevState => !prevState);

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
          <li
            key={index}
            className="p__opensans"
            onClick={handleToggleMenu}
          >
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
          onClick={handleToggleMenu}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={handleToggleMenu}
            />
            <ul className="app__navbar-smallscreen_links">
              {data.navItems.map(({ name, url }, index) => (
                <li
                  key={index}
                  className="p__opensans"
                  onClick={handleToggleMenu}
                >
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