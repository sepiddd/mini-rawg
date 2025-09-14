import { Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import FiltersBox from "./components/FiltersBox";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SortSelector from "./components/SortSelector";
import { PlatformItem } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

// export type OrderType = "name" | "released" | "added" | "rating" | "metacritic";

export interface GameQuery {
  genre: Genre | null;
  platform: PlatformItem | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          setSearchText={(value) => {
            setGameQuery({ ...gameQuery, searchText: value });
          }}
        />
      </GridItem>
      <Show when={window.innerWidth > 1200}>
        <GridItem area="aside">
          <SideBar
            setSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={10}>
        <GameHeading gameQuery={gameQuery} />
        <HStack marginBottom={5} gap={5}>
          <FiltersBox
            selectedPlatform={gameQuery.platform}
            setSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectedOrder={gameQuery.sortOrder}
            setSlectedOrder={(order) =>
              setGameQuery({ ...gameQuery, sortOrder: order })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
