import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevence
          <Icon as={BsChevronDown as any} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item>Relevence</Menu.Item>
            <Menu.Item>Date added</Menu.Item>
            <Menu.Item>Name</Menu.Item>
            <Menu.Item>Release date</Menu.Item>
            <Menu.Item>Popularity</Menu.Item>
            <Menu.Item>Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
