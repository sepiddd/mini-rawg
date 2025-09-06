import { useData } from "./useData";
import { Genre } from "./useGenres";

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

export const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
