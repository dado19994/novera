import { HomePage } from "@/components/home/HomePage";
import { AppFrame } from "@/components/layout/AppFrame";
import { getHomeData } from "@/lib/api";
import type { HomePayload } from "@/types/api";

export default async function Page() {
  let data: HomePayload | null = null;
  let loadError: string | null = null;

  try {
    data = await getHomeData();
  } catch (error) {
    loadError = error instanceof Error ? error.message : "Unknown error";
  }

  if (!data) {
    return (
      <AppFrame>
        <div style={{ padding: 24 }}>
          <h1>Unable to load Novera API</h1>
          <p>
            Make sure Laravel is running on http://127.0.0.1:8000 and try
            again.
          </p>
          <p>{loadError}</p>
        </div>
      </AppFrame>
    );
  }

  return (
    <AppFrame>
      <HomePage data={data} />
    </AppFrame>
  );
}
