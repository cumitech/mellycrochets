import ContactSection from "../../components/contact/contact.component";
import "../../assets/css/globals.css";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#fdf3f3] text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">
            Get in touch for all your inquiries.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <ContactSection />

    </div>
  );
}
