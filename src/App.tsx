import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg="skyblue">
        nav
      </GridItem>
      <Show when={window.innerWidth > 1200}>
        <GridItem bg={"pink"} area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"}>main</GridItem>
    </Grid>
  );
}

export default App;
