import { Card, Heading, Image, Show, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [showData, setShowData] = useState(false);
  return (
    <Card.Root
      borderRadius={8}
      overflow="hidden"
      onMouseOver={() => setShowData(!showData)}
    >
      <Card.Header padding={0}>
        <Image src={game.background_image} />
      </Card.Header>
      <Card.Body>
        <Heading fontSize={"xl"} color={"#c3c3c3"}>
          {game.name}
        </Heading>

        <Text color={"gray.700"}>Released data: {game.released}</Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
