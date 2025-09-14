import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { PlatformItem } from "../hooks/useGames";

interface Props {
  platforms: PlatformItem[];
}

const iconMap = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

type PlatformSlug = keyof typeof iconMap;

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack flexWrap="wrap">
      {platforms?.map((platform) => {
        if (iconMap[platform.slug as PlatformSlug])
          return (
            <Icon
              key={platform.id ?? platform.slug}
              as={iconMap[platform.slug as PlatformSlug] as any}
              fontSize={20} // size control (e.g., 16px)
              aria-label={platform.slug}
              color="gray.400"
            />
          );
        return <></>;
      })}
    </HStack>
  );
};

export default PlatformIconList;
