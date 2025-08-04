import type { ITrack } from "@/app/type/music-type";

function extractNumberFromId(title: string): number {
  const parts = title.split(" ");
  return parts[1] ? Number.parseInt(parts[1], 10) : 0;
}

export function sortTracksById(tracks: ITrack[]): ITrack[] {
  return tracks.slice().sort((a, b) => {
    const numA = extractNumberFromId(a.title);
    const numB = extractNumberFromId(b.title);
    return numA - numB;
  });
}

