import { HomePage } from "@/components/home/HomePage";
import { AppFrame } from "@/components/layout/AppFrame";
import { getHomeData } from "@/lib/api";
import type { HomePayload } from "@/types/api";

export default async function Page() {
  let data: HomePayload | null = null;

  try {
    data = await getHomeData();
  } catch {
    data = null;
  }

  return (
    <AppFrame>
      <HomePage data={data} />
    </AppFrame>
  );
}
