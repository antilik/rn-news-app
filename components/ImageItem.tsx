import { Image } from "react-native";

import { gStyle } from "../styles/styles";

interface IImgProps {
  imgSource: string;
}

export default function ImageItem({ imgSource }: IImgProps) {
  return(
    <Image
      style={gStyle.image}
      source={{ uri: imgSource }}
    />
  )
}
