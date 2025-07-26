import { ImageSourcePropType } from "react-native";

export interface AboutCardItem {
    image: ImageSourcePropType;
    color: string;
    title: string;
    subTitle: string;
    backgroundColor: string;
    circleColor: string;
  }