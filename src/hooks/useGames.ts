import { useData } from "./useData";

export interface PlatformItem {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  parent_platforms: { platform: PlatformItem }[];
  metacritic: number;
}

export const useGames = () => useData<Game>("/games");
