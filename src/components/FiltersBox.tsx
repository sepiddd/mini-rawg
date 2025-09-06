import { Button, HStack, Icon, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { PlatformItem } from "../hooks/useGames";
import { usePlatforms } from "../hooks/usePlatforms";

interface Props {
  setSelectedPlatform: (platform: PlatformItem) => void;
  selectedPlatform: PlatformItem | null;
}

const FiltersBox = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data: platforms, loading } = usePlatforms(selectedPlatform);

  if (loading) return <></>;

  return (
    <HStack marginBottom={8}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {`${selectedPlatform?.name || "Platforms"}`}
            <Icon as={BsChevronDown as any} />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms.map((platform) => (
                <Menu.Item
                  onClick={() => setSelectedPlatform(platform)}
                  key={platform.id}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </HStack>
  );
};

export default FiltersBox;
