import Head from "next/head";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "containers";
import { Navbar } from "components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gericht</title>
      </Head>
      <main>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </main>
    </div>
  );
}