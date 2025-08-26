const baseImgUrl = "https://media.rawg.io/media";

export const cropImage = (src: string, width: number, height: number) => {
  const newURL =
    src.indexOf(baseImgUrl) >= 0
      ? `${baseImgUrl}/crop/${width}/${height}${src.replace(baseImgUrl, "")}`
      : src;

  return newURL;
};
