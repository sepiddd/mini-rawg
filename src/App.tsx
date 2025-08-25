import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show when={window.innerWidth > 1200}>
        <GridItem area={"aside"} width={250}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={10}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
