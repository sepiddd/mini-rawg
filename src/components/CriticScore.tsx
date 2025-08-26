import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      bg={score > 60 ? "green" : score > 30 ? "yellow" : "red"}
      color="white"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
