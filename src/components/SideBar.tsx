import { HStack, Image, List } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { cropImage } from "../utils/cropImage";
import SideBarListItemSkeleton from "./SideBarListItemSkeleton";

const SideBar = () => {
  const { data: genres, loading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <></>;
  return (
    <List.Root padding={8} listStyle="none" display="flex" gap={2}>
      {loading &&
        skeleton.map((item) => <SideBarListItemSkeleton key={item} />)}
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              width="40px"
              height="40px"
              borderRadius="4px"
              src={cropImage(genre.image_background)}
            />
            {genre.name}
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default SideBar;
