import { Box, Text, Image, Grid } from "@chakra-ui/react";
import { Game, useGames } from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Grid gridTemplateColumns={{ base: "1fr 1fr 1fr 1fr" }} gap={4}>
      {games.map((game: Game) => (
        <Box key={game.id} borderRadius={8} overflow="hidden" bg={"#151515"}>
          <Image src={game.background_image} />

          <Text color={"#c3c3c3"}>{game.name}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default GameGrid;
