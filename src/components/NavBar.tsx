import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const NavBar = () => (
  <HStack>
    <Image width={100} src={logo} alt="mini rawg" />
  </HStack>
);

export default NavBar;
