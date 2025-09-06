import { Text, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { Game, useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6];

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data: games, loading } = useGames(gameQuery);

  if (error) {
    return <Text>{error}</Text>;
  }
  if (games.length === 0) {
    return <Text>there is no game...</Text>;
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
