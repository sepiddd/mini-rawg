import { Icon, Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<Icon as={BsSearch as any} />}>
      <Input
        variant="subtle"
        borderRadius={12}
        placeholder="Search in games"
        size="xl"
      />
    </InputGroup>
  );
};

export default SearchInput;
