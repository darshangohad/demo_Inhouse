import {
  faArrowTurnRight,
  faCommentDots,
  faImage,
  faNewspaper,
  faPaperPlane,
  faThumbsUp,
  faToolbox,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Posts_Data = [
  {
    name: "Notice 1",
    about_avatar:
      "Description about the notice",
    about_post:
      "🚨 Announcement 🚨  About Post ",
    time: "3w",
    post_picture:
    "../img/notices.jpeg",
    icons: [
      {
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        text: "Like",
      },
      {
        icon: <FontAwesomeIcon icon={faCommentDots} />,
        text: "Comment",
      },
      {
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        text: "Send",
      },
    ],
  },
  {
    name: "Notice 2",
    about_avatar:
      "Description about the notice",
    avatar:
      "../img/profile.jpeg",
    about_post:
      "🚨 Announcement 🚨  About Post ",
    time: "3w",
    post_picture:
    "../img/notices.jpeg",
    icons: [
      {
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        text: "Like",
      },
      {
        icon: <FontAwesomeIcon icon={faCommentDots} />,
        text: "Comment",
      },
      {
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        text: "Send",
      },
    ],
  },
];

export const NAVBAR_ICONS = [
  {
    icon: <FontAwesomeIcon className="fa-solid photo" icon={faImage} />,
    text: "Photo",
  },
  {
    icon: <FontAwesomeIcon className="fa-solid video" icon={faVideo} />,
    text: "Video",
  },
  {
    icon: <FontAwesomeIcon className="fa-solid job" icon={faToolbox} />,
    text: "Job",
  },
  {
    icon: <FontAwesomeIcon className="fa-solid article" icon={faNewspaper} />,
    text: "Write aritcle",
  },
];

export const WHO_TO_CONNECT = [
  {
    name: " Student 1",
    username: "deveshverma",
    avatar: "../img/profile.jpeg",
  },
  {
    name: " Student 2",
    username: "dasjideepak",
    avatar: "../img/profile.jpeg",
  },

  {
    name: " Student 3",
    username: "saurabhyadav",
    avatar: "../img/profile.jpeg",
  },
  {
    name: " Student 4",
    username: "sudhanshukumar",
    avatar: "../img/profile.jpeg",
  },
];
