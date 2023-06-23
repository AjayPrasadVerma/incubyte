import classes from "./SubHeader.module.css";
import creativeTeam from "../../assets/Creative team-pana 2.png";
import rightImg from "../../assets/Ellipse 1.png";
import topImg from "../../assets/Ellipse 2.png";

const SubHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes["main-image"]}>
        <img src={topImg} alt="__headerImg" />
      </div>
      <div className={classes.left}>
        <img src={rightImg} alt="__subheader" />
      </div>
      <div className={classes.right}>
        <img src={rightImg} alt="__subheader" />
      </div>
      <div className={classes.center}>
        <h1>
          Welcome to <span>Incubyte</span>
        </h1>
        <p>Building bridge to success in the tech ecosystem.</p>
        <div className={classes.centerImg}>
          <img src={creativeTeam} alt="_team" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
