import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
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
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={10}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
