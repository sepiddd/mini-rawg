import { Icon, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setSearchText: (value: string) => void;
}

const SearchInput = ({ setSearchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(ref?.current?.value || "");
      }}
      style={{ width: "100%" }}
    >
      <InputGroup startElement={<Icon as={BsSearch as any} />}>
        <Input
          ref={ref}
          variant="subtle"
          borderRadius={12}
          placeholder="Search in games"
          size="xl"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
