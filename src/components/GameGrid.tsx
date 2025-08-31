import { Text, SimpleGrid } from "@chakra-ui/react";
import { Game, useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const { error, data: games, loading } = useGames();

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4}>
      {loading && skeleton.map((item) => <GameCardSkeleton key={item} />)}
      {games?.map((game: Game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
