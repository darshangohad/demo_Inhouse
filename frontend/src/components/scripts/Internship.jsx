import "../styles/Internship.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faBell,
  faCommentDots,
  faGraduationCap,
  faHouseChimney,
  faToolbox,
  faSquare,
  faEarth,
  faHeart,
  faSortDown,
  faLightbulb,
  faThumbsUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NAVBAR_ICONS, Posts_Data, WHO_TO_CONNECT } from "../../Data/internshipData";

export const Internship = () => {
  return (
    <>
    <nav>
        <div className="navContainer" >
          <div className="navLeftSide">
            <div className="logo">
              <img
                src="../img/logo.png"
                alt="logo"
              />
            </div>
            <input className="inputField" type="text" placeholder="Search" />
          </div>
          <div className="navMiddleSide">

            <Link to={"/notice"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faBell} />
              <h4 className="text">Notice</h4>
            </Link>
            <Link to={"/internship"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />
              <h4 className="text">InternShip</h4>
            </Link>
            <Link to={"/placement"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faToolbox} />
              <h4 className="text">Placement</h4>
            </Link>
            <Link to={"/messaging"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faCommentDots} />
              <h4 className="text">Messaging</h4>
            </Link>
            <Link to={"/home"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faHouseChimney} />
              <h4 className="text">Home</h4>
            </Link>
            <Link to={"/logout"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faSortDown} />
              <h4 className="text">Logout</h4>
            </Link>
          </div>
        </div>
      </nav>


      <div className="main">
        <div className="homeContainer">
          <div className="leftSide">
            <div className="profileDiv">
              <div className="backGroundDiv">
                <img
                  src="../img/profile.jpeg"
                  alt=""
                  className="avatarImg"
                />
                <h4 className="avatarName">Name</h4>
                <p className="avatarAbout">
                  Description of Student / Bio / Graduate Year / Skills
                </p>
                
                <div className="hr"></div>
                <div className="items">
                  <h4>
                    <FontAwesomeIcon className="bookmark" icon={faBookmark} />
                    My items
                  </h4>
                </div>
              </div>
            </div>
            
          </div>
          <div className="middleSide">
            {Posts_Data.map((el, i) => (
              <UserPosts
                key={i}
                avatar={el.avatar}
                name={el.name}
                about_avatar={el.about_avatar}
                about_post={el.about_post}
                post_picture={el.post_picture}
                time={el.time}
                likes={el.likes}
                icons={el.icons}
              />
            ))}
          </div>
          <div className="rightSide">
            <div className="rightContainer">
              <h3 className="connectHeading">Who to Message</h3>
              <hr className="connectLine" />
              {WHO_TO_CONNECT.map((el, i) => (
                <WhoToconnect
                  key={i}
                  name={el.name}
                  username={el.username}
                  avatar={el.avatar}
                />
              ))}
              <hr />
              <div className="showMorediv">
                <h4>
                  Show more <FontAwesomeIcon icon={faAngleDown} />{" "}
                </h4>
              </div>
            </div>
            <footer className="footer">
              <div>
                <span>About</span>
                <span>Accessibility</span>
                <span>Help Center</span>
              </div>
              <div>
                <span>
                  Privacy & Terms{" "}
                  {<FontAwesomeIcon className="downArrow" icon={faAngleDown} />}
                </span>
                <span>Ad Choices</span>
              </div>
              <div>
                <span>Advertising </span>
                <span>
                  Business Services{" "}
                  {<FontAwesomeIcon className="downArrow" icon={faAngleDown} />}
                </span>
              </div>
              <div>
                <span>Get the LinkedIn app</span>
                <span>More</span>
              </div>
              <div className="corporation">
                <span className="linked">
                  Linked <span className="in">in</span>
                </span>
                <span>LinkedIn corporation © 2022</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarIcons = (props) => {
  return (
    <div className="btnicon">
      <span>{props.icon}</span>
      <span className="icontext">{props.text}</span>
    </div>
  );
};


function UserPosts(props) {
  return (
    <div className="postsMainDiv">
      <div className="useDetails">
        <div className="avatarDetails">
          <img className="userAvatar" src={props.avatar} alt="" />
          <div>
            <h4>{props.name}</h4>
            <p>{props.about_avatar}</p>
            <div className="postime">
              <p>{props.time}</p>
              <div className="dot"></div>
              <FontAwesomeIcon className="earthIcon" icon={faEarth} />
            </div>
          </div>
        </div>
        <div className="followbtn">
          <p>+</p>
          <h5>Follow</h5>
        </div>
      </div>
      <div className="aboutPost">
        <p>{props.about_post}</p>
      </div>
      <div className="postPicture">
        <img src={props.post_picture} alt="" />
      </div>
      <div className="likes">
        <div className="likeIcon">
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <div className="lightIcon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div className="lightIcon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <p>{props.likes}</p>
      </div>
      <div className="hr"></div>
      <div className="viewerReactionMain">
        {props.icons.map((e, i) => (
          <div key={i} className="viewerReaction">
            <h5>{e.icon}</h5>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const WhoToconnect = (props) => {
  return (
    <div className="whoToConnect_container">
      <div className="account">
        <div className="img_src">
          <img src={props.avatar} alt="profile" />
        </div>
        <div className="connect_user_name">
          <h3>{props.name}</h3>
        </div>
      </div>

      <button className="connect_btn">Message</button>
    </div>
  );
};
