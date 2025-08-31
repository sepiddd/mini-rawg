import { useData } from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export const useGenres = () => useData<Genre>("/genres");
