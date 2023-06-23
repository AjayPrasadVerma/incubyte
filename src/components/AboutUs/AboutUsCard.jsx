import BrainIcon from "../Icon/BrainIcon";
import EducationIcon from "../Icon/EducationIcon";
import Handshake from "../Icon/Handshake";
import MentorshipIcon from "../Icon/MentorshipIcon";
import classes from "./AboutUsCard.module.css";

const AboutUsCard = () => {
  return (
    <>
      <div className={classes.content}>
        <div className={classes.card}>
          <Handshake />
          <h2>A Collaborative program</h2>
        </div>
        <div className={classes.card}>
          <BrainIcon />
          <h2>Innovative Program</h2>
        </div>
        <div className={classes.card}>
          <MentorshipIcon />
          <h2>Mentorshipm</h2>
        </div>
        <div className={classes.card}>
          <EducationIcon />
          <h2>Education and Training</h2>
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
