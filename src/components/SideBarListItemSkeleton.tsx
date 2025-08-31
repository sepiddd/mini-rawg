import { HStack, List, Skeleton, SkeletonText } from "@chakra-ui/react";

const SideBarListItemSkeleton = () => {
  return (
    <List.Item>
      <HStack>
        <Skeleton height="40px" width="40px" borderRadius="8px" />
        <SkeletonText noOfLines={1} />
      </HStack>
    </List.Item>
  );
};

export default SideBarListItemSkeleton;
