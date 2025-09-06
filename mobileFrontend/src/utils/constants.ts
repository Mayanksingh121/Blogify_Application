import { Document , Heart, Views} from "./svgImages";
import imagesOBJ from "../assets/images";
import { IAboutCardItem } from "../types/homeScreen.types";

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
  },
  {
    title: "Understanding the Basics of Machine Learning",
    tag: "Artificial Intelligence",
    readTime: "6",
    author: "Ananya Gupta",
  },
  {
    title: "Why TypeScript is Taking Over JavaScript Projects",
    tag: "Web Development",
    readTime: "4",
    author: "Rohan Mehra", 
  },
  {
    title: "A Guide to Clean Code Practices",
    tag: "Programming",
    readTime: "7",
    author: "Neha Arora",  
  },
  {
    title: "The Impact of Cloud Computing on Modern Apps",
    tag: "Cloud",
    readTime: "5",
    author: "Karan Patel",
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

export const AboutCardData: IAboutCardItem[] = [
  {
    image: imagesOBJ.protection,
    color: "#7B61FF",
    title: "Complete Data Privacy",
    subTitle: "We don’t track or share your data",
    backgroundColor: "#EEE9FF",
    circleColor: "#DAD1FF"
  },
  {
    image: imagesOBJ.prohibited,
    color: "#FF6F61",
    title: "Ad-Free Experience",
    subTitle: "No ads, just content",
    backgroundColor: "#FFEDEB",
    circleColor: "#FFD4D1"
  },
  {
    image: imagesOBJ.lock,
    color: "#4A90E2",
    title: "Top-Notch Security",
    subTitle: "Protected with strong encryption",
    backgroundColor: "#E6F0FA",
    circleColor: "#D0E6FB"
  },
  {
    image: imagesOBJ.thunder,
    color: "#2ECC71",
    title: "Lightning-Fast Performance",
    subTitle: "Fast and smooth experience",
    backgroundColor: "#E8F8F2",
    circleColor: "#CFF3E2"
  }
];


export const BlogTypes = [
  "All", "Sports", "Short Reads", "Technology", "Nature"
]


export const blogTypes = ['Lifestyle', 'Tech', 'Travel', 'Self-Improvement'];

export const QuizQuestion = [
  {
    question: "What kind of content do you find yourself reading most often online?",
    options: [
      "Home & Style",
      "Tech Reviews",
      "Travel Guides",
      "Self-Help Tips"
    ]
  },
  {
    question: "If you had an hour of free time, what would you most likely do?",
    options: [
      "Watch Vlogs",
      "Try Software",
      "Plan Travel",
      "Read & Journal"
    ]
  },
  {
    question: "What type of social media content do you engage with the most?",
    options: [
      "Style & Food",
      "Tech Demos",
      "Travel Reels",
      "Life Advice"
    ]
  },
  {
    question: "Which of these best describes your ideal weekend?",
    options: [
      "Brunch & Decor",
      "Code & Games",
      "Road Trips",
      "Goal Setting"
    ]
  },
  {
    question: "What kind of blogs do you usually bookmark or save?",
    options: [
      "DIY & Tips",
      "Tech News",
      "Travel Hacks",
      "Time Management"
    ]
  }
];

