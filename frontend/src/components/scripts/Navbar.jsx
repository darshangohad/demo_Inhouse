// import "../styles/Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faCommentDots,
//   faGraduationCap,
//   faHouseChimney,
//   faSortDown,
//   faToolbox,
//   faUserGroup,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <div className="navContainer" >
//           <div className="navLeftSide">
//             <div className="logo">
//               <img
//                 src="../img/logo.png"
//                 alt="logo"
//               />
//             </div>
//             <input className="inputField" type="text" placeholder="Search" />
//           </div>
//           <div className="navMiddleSide">

//             <Link to={"/notice"} className="link">
//               <FontAwesomeIcon className="fa-icon" icon={faBell} />
//               <h4 className="text">Notice</h4>
//             </Link>
//             <Link to={"/home"} className="link">
//               <FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />
//               <h4 className="text">InternShip</h4>
//             </Link>
//             <Link to={"/"} className="link">
//               <FontAwesomeIcon className="fa-icon" icon={faToolbox} />
//               <h4 className="text">Placement</h4>
//             </Link>
//             <Link to={"/"} className="link">
//               <FontAwesomeIcon className="fa-icon" icon={faCommentDots} />
//               <h4 className="text">Messaging</h4>
//             </Link>
//             <Link to={"/"} className="link">
//               <FontAwesomeIcon className="fa-icon" icon={faHouseChimney} />
//               <h4 className="text">Home</h4>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
