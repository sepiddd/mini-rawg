import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import FiltersBox from "./components/FiltersBox";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { PlatformItem } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: PlatformItem | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show when={window.innerWidth > 1200}>
        <GridItem area={"aside"} width={250}>
          <SideBar
            setSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={10}>
        <FiltersBox
          selectedPlatform={gameQuery.platform}
          setSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
