import { Button, HStack, Image, List } from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { cropImage } from "../utils/cropImage";
import SideBarListItemSkeleton from "./SideBarListItemSkeleton";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const SideBar = ({ setSelectedGenre, selectedGenre }: Props) => {
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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="plain"
              fontSize="lg"
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default SideBar;
