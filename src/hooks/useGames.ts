import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClinet from "../services/api-client";

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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const useGames = (): { games: Game[]; error: string } => {
  const [games, setGames] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    apiClinet
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return {
    games,
    error,
  };
};
