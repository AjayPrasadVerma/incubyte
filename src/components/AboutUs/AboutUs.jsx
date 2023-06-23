import classes from "./AboutUs.module.css";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <>
      <div className={classes.about}>
        <h2>About Us</h2>
        <p>
          With over 3 years of experience, we at incubyte specialize in setting
          up captive development centers of growing startups, addressing key
          challenges and providing tailor-made solutions for your business
          needs.
        </p>
      </div>
      <AboutUsCard />
    </>
  );
};

export default AboutUs;
