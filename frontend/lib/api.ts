import type { HomePayload } from "@/types/api";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api";

export async function getHomeData(): Promise<HomePayload> {
  const response = await fetch(`${API_BASE_URL}/home`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Unable to load Novera API: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<HomePayload>;
}
