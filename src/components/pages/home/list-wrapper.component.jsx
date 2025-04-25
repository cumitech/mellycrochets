import CrochetList from "../../crochet/crochet-list.component";
import axios from "axios";

export default async function CrochetListWrapper() {
  const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/crochets`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch crochetType details");
  }
  const { data } = response;
  return <CrochetList crochets={data} />;
}
