import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack padding={4}>
    <Image width={70} src={logo} alt="mini rawg" />
    <SearchInput />
  </HStack>
);

export default NavBar;
