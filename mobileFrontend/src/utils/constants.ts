import { colors } from "react-native-swiper-flatlist/src/themes";
import { Document , Heart, Views} from "./svgImages";

export const textInputsForCreateProfile = [
  {
    label: 'Name',
    placeholder: 'Enter your name',
    value: 'name'
  },
  {
    label: 'Phone Number',
    placeholder: 'Enter your Phone Number',
    value: 'phoneNo'
  },
  {
    label: 'Password',
    placeholder: 'Enter your Password',
    value: 'password'
  },
  {
    label: 'Confirm Password',
    placeholder: 'Confirm your Password',
    value: 'confirmPassword'
  },
];

export const genders = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Others', value: 'Others'},
];


export const DUMMY_DATA = [
  {
    title: "The Future of AI in Software Development",
    tag: "Technology",
    readTime: "5",
    author: "Mayank Singh",
    startColor: "#8b36ea",
    midColor: "#5c4aea",
  },
  {
    title: "Understanding the Basics of Machine Learning",
    tag: "Artificial Intelligence",
    readTime: "6",
    author: "Ananya Gupta",
    startColor: "#1e8449",
    midColor: "#27ae60",
  },
  {
    title: "Why TypeScript is Taking Over JavaScript Projects",
    tag: "Web Development",
    readTime: "4",
    author: "Rohan Mehra",
    startColor: "#004e92", 
    midColor: "#000428",     
  },
  {
    title: "A Guide to Clean Code Practices",
    tag: "Programming",
    readTime: "7",
    author: "Neha Arora",
    startColor: "#8e2de2",  
    midColor: "#4a00e0",     
  },
  {
    title: "The Impact of Cloud Computing on Modern Apps",
    tag: "Cloud",
    readTime: "5",
    author: "Karan Patel",
    startColor: "#2c3e50",   
    midColor: "#34495e", 
  }
];


export const DASHBOARD_ICONS : any= {
  Document: {
    name: Document,
    color: '#dbe9fe'
  },
  Heart: {
    name: Heart,
    color: '#fee2e1'
  },
  Views: {
    name: Views,
    color: '#dcfce6'
  }
}

