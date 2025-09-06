import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import FiltersBox from "./components/FiltersBox";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { PlatformItem } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformItem | null>(
    null
  );
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
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={10}>
        <FiltersBox
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
