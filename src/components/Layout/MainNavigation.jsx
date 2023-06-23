import React from "react";
import classes from "./MainNavigation.module.css";
import SubHeader from "./SubHeader";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Incubyte</h1>
        <div className={classes.left}>
          <div>Our Solution</div>
          <div>Quick Turnaround</div>
          <div>Quality Assurance</div>
          <div>Our Advantage</div>
          <div>Contact Us</div>
        </div>
      </header>
      <SubHeader />
    </React.Fragment>
  );
};

export default MainNavigation;
