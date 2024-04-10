import "./App.scss";
import AboutUs from "./components/about-us/AboutUs";
import Banner from "./components/banner/Banner";
import ContactUsButtonModal from "./components/contact-us-button-modal/ContactUsButtonModal";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import IntermediateSection from "./components/intermediate-section/IntermediateSection";
import LatestAlerts from "./components/latest-alerts/LatestAlerts";
import OurServices from "./components/our-services/OurServices";
import OurTeam from "./components/our-team/OurTeam";

function App() {
  return (
    <>
      <Banner></Banner>
      <Header></Header>
      <AboutUs></AboutUs>
      <IntermediateSection></IntermediateSection>
      <Features></Features>
      <LatestAlerts></LatestAlerts>
      <Gallery></Gallery>
      <OurTeam></OurTeam>
      <OurServices></OurServices>
      <Footer></Footer>
      {/* contact button */}
      <ContactUsButtonModal></ContactUsButtonModal>
    </>
  );
}

export default App;
