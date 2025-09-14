const baseImgUrl = "https://media.rawg.io/media";

export const cropImage = (src: string) => {
  const newURL =
    src?.indexOf(baseImgUrl) >= 0
      ? `${baseImgUrl}/crop/600/400${src.replace(baseImgUrl, "")}`
      : src;

  return newURL;
};
