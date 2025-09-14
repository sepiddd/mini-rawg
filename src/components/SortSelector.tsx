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
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: {selectedOrder}
          <Icon as={BsChevronDown as any} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {/* <Menu.Item onClick={() => setSlectedOrder(null)}>
              Relevence
            </Menu.Item> */}
            {/* <Menu.Item onClick={() => setSlectedOrder("added")}>
              Date added
            </Menu.Item> */}
            {/* <Menu.Item onClick={() => setSlectedOrder("name")}>Name</Menu.Item> */}
            {/* <Menu.Item onClick={() => setSlectedOrder("released")}>
              Release date
            </Menu.Item> */}
            {/* <Menu.Item onClick={() => setSlectedOrder("metacritic")}>
              Popularity
            </Menu.Item> */}
            {/* <Menu.Item onClick={() => setSlectedOrder("rating")}>
              Average rating
            </Menu.Item> */}

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
