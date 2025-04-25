// components/gallery-section.js
import Image from "next/image";
import ViewMoreButton from "./view-more-button.component";

export default function GallerySection({
  title,
  summary,
  subSummary,
  buttonText,
}) {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Image
            priority={true}
            src="/photos/image8.jpg"
            alt="Crochet 1"
            className="rounded-lg border-4 border-pink-200 w-full h-auto object-cover"
            style={{ width: 245, height: 220 }}
            width={245}
            height={220}
          />
          <Image
            priority={true}
            src="/photos/image7.jpg"
            alt="Crochet 2"
            className="rounded-lg border-2 border-black w-full h-auto object-cover"
            style={{ width: 245, height: 220 }}
            width={245}
            height={220}
          />
          <Image
            priority={true}
            src="/mellycrochets/dd/crochet-bags-main.jpg"
            alt="Crochet 3"
            className="rounded-lg border-2 border-black w-full h-auto object-cover"
            style={{ width: 245, height: 220 }}
            width={245}
            height={220}
          />
          <Image
            priority={true}
            src="/photos/image9.jpg"
            alt="Crochet 4"
            className="rounded-lg border-4 border-pink-200 w-full h-auto object-cover"
            style={{ width: 245, height: 220 }}
            width={245}
            height={220}
          />
        </div>

        <div className="text-center max-w-lg mt-20 md:mt-0">
          <h2
            className="text-2xl font-semibold text-gray-800 font-playfair"
            style={{ marginBottom: 30 }}
          >
            {/* {t("crochetaftercare")} */}
            {title}
          </h2>
          <p className="text-gray-700 mb-3">{summary}</p>
          <p className="text-sm text-gray-600" style={{ marginBottom: 30 }}>
            {subSummary}
          </p>

          <ViewMoreButton
            href="https://www.instagram.com/mellycrochets_?igsh=cTkwZTc1eDcyaThw&utm_source=qr"
            text={buttonText}
            textKey="btn"
          />
        </div>
      </div>
    </section>
  );
}
