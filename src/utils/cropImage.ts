const baseImgUrl = "https://media.rawg.io/media";
import imagePlaceholder from "../assets/image-placeholder/no-image-placeholder.webp";

export const cropImage = (src: string) => {
  if (!src) return imagePlaceholder;
  const newURL =
    src?.indexOf(baseImgUrl) >= 0
      ? `${baseImgUrl}/crop/600/400${src.replace(baseImgUrl, "")}`
      : src;

  return newURL;
};
