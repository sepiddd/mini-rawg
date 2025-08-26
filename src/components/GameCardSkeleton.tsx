import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={8} overflow="hidden" width={"300px"}>
      <Card.Header>
        <Skeleton height="200px" />
      </Card.Header>
      <Card.Body gap={4}>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
