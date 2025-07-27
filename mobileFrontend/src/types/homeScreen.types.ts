import { ImageSourcePropType } from "react-native";

export interface IAboutCardItem {
    image: ImageSourcePropType;
    color: string;
    title: string;
    subTitle: string;
    backgroundColor: string;
    circleColor: string;
}

export interface IFlatListFilter {
  activeBlog: string;
  handleChange: (ele:string)=>void
}