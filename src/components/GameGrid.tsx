import { Text, Grid, SimpleGrid } from "@chakra-ui/react";
import { Game, useGames } from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} gap={4}>
      {games.map((game: Game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
