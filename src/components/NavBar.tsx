import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  setSearchText: (value: string) => void;
}

const NavBar = ({ setSearchText }: Props) => (
  <HStack padding={4}>
    <Image width={70} src={logo} alt="mini rawg" />
    <SearchInput setSearchText={setSearchText} />
  </HStack>
);

export default NavBar;
