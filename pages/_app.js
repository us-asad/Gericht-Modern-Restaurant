// Container Styles
import "styles/container-styles/AboutUs.css";
import "styles/container-styles/Chef.css";
import "styles/container-styles/Footer.css";
import "styles/container-styles/Gallery.css";
import "styles/container-styles/Header.css";
import "styles/container-styles/Intro.css";
import "styles/container-styles/Laurels.css";
import "styles/container-styles/SpecialMenu.css";
// Component Styles
import "styles/component-styles/FooterOverlay.css";
import "styles/component-styles/MenuItem.css";
import "styles/component-styles/Navbar.css";
import "styles/component-styles/Newsletter.css";
// Global Styles
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="overflow-x-hidden">
      <Component {...pageProps} />
		</div>
	);
}

export default MyApp;
