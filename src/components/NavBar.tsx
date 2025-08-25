import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => (
  <HStack>
    <Image width={100} src={logo} alt="mini rawg" />
    <Text>Nav bar</Text>
  </HStack>
);

export default NavBar;
