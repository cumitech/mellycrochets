import Footer from "../../components/footer/footer.component";
import AppNavigation from "../../components/nav.component";
import "../../assets/css/globals.css";
import ContactSection from "../../components/contact/contact.component";
import HowWeHelp from "../../components/how-can-we-help/how-can-we-help.component";

export default function Services() {
  return (
    <>
      <AppNavigation />

      {/* HowWeHelp */}
      <HowWeHelp />
      
      {/* ContactSection  */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
