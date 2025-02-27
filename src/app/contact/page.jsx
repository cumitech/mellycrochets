import ContactSection from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";
import AppNavigation from "../../components/nav.component";
import "../../assets/css/globals.css";

export default function Contact() {
  return (
    <div>
      <AppNavigation />
      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">
            Get in touch for inquiries, consultations, or car purchases.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="bg-gray-100 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Find Your Car Today!</h2>
        <p className="text-lg mt-2">
          Get in touch for a free consultation on the best car options for you.
        </p>

        <a
          href="/services"
          className="mt-6 inline-block bg-blue-500 px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Get a Free Consultation
        </a>
      </section> */}

      {/* Contact Details */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
