import Nav from "./components/Nav.jsx";
import SocialsIsland from "./components/SocialsIsland.jsx";


import {
  Hero,
  CardDesign,
  OurFeatures,
  GlobalPurchase,
  CustomerReviews,
  Footer,
  MobileApp,
} from "./sections/index.js";

const App = () => {
  return (
    <main className="relative top-8">

      <Nav />
      <SocialsIsland/>

      <section>
        <Hero />
      </section>

      <section className="padding-x mb-20">
        <CardDesign />
      </section>

      <section>
        <OurFeatures />
      </section>

      <section>
        < GlobalPurchase className="-z-10"/>
      </section>

      <section>
        <CustomerReviews  className="z-0"/>
      </section>

      <section>
        <MobileApp className="z-10" />
      </section>

      <section className="-z-10 bg-main-black">
        <Footer />
      </section>

    </main>
  );
};

export default App;
