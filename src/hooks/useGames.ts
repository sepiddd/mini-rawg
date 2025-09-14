import { GameQuery } from "../App";
import { useData } from "./useData";

export interface PlatformItem {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  parent_platforms: { platform: PlatformItem }[];
  metacritic: number;
}

export const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
