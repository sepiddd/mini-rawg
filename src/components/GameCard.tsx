import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { cropImage } from "../utils/cropImage";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={8} overflow="hidden" width="100%">
      <Card.Header padding={0}>
        <Image src={cropImage(game.background_image)} />
      </Card.Header>
      <Card.Body gap={4}>
        <Heading fontSize={"xl"} color={"#c3c3c3"}>
          {game.name}
        </Heading>
        <HStack justifyContent="space-between" alignItems="start">
          {game?.parent_platforms?.length > 0 && (
            <PlatformIconList
              platforms={game.parent_platforms.map((item) => item.platform)}
            />
          )}

          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
        <Text color={"gray.700"}>Released data: {game.released}</Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
