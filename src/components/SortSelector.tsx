import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setSlectedOrder: (order: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ selectedOrder, setSlectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (item) => item.value === selectedOrder
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label}
          <Icon as={BsChevronDown as any} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((item) => (
              <Menu.Item
                key={item.value}
                onClick={() => setSlectedOrder(item.value)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
