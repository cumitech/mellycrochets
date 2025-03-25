import axios from "axios";

export default async function sitemap() {
  const baseUrl = process.env.NEXTAUTH_URL;
  
  const response = await axios.get(`${baseUrl}/api/crochets`);
  const crochets = response.data;

  const crochetsData = crochets?.map((crochet) => {
    return {
      url: `${baseUrl}/crochets/${crochet?.slug}`,
      lastModified: crochet?.createdAt,
      images: crochet?.imageUrls,
    };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...crochetsData,
  ];
}
