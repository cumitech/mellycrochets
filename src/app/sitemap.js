import { crochetAPI } from "../store/api/crochet_api";
import axios from "axios";

export default async function sitemap() {
  const baseUrl = process.env.NEXTAUTH_URL;
  //   const { data: crochets } = crochetAPI.useFetchAllCrochetsQuery(1);
  const response = await axios.get(`${baseUrl}/api/crochets`);
  const crochets = response.data;
  const crochetsData = crochets?.map((crochet) => {
    return {
      url: `${baseUrl}/crochets/${crochet?.id}`,
      lastModified: crochet?.createdAt,
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
