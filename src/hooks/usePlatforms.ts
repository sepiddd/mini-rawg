import { useData } from "./useData";
import { PlatformItem } from "./useGames";

export const usePlatforms = (selectedPlatform: PlatformItem | null) =>
  useData<PlatformItem>(
    "/platforms/lists/parents",
    { params: { parent_platforms: selectedPlatform?.id } },
    [selectedPlatform?.id]
  );
