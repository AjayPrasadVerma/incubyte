import classes from "./Experties.module.css";

const Experties = () => {
  return (
    <div className={classes.experties}>
      <h2>Our Experties</h2>
      <div className={classes.content}>
        <div className={classes.card}>
          <h2>Technical Resources Oprimization</h2>
          <p>
            Meet your hiring hiring needs on time and manage your resourse costs
            efficiently. Our incubator program provides immediate access to a
            pool of talented professionals ready to transform your innovative
            ideas into reality.
          </p>
        </div>
        <div className={classes.card}>
          <h2>Launch Your POC Quickly</h2>
          <p>
            In the startup world, time is money. We provide an environ,ent
            designed to quickely set up your proof-of-concept, testing your
            ideas in the market swiiftly and efficiently.
          </p>
        </div>
        <div className={classes.card}>
          <h2>High-Quality, Scalable, and Secure Software</h2>
          <p>
            We prioritize quality as much as speed. Our seasoned developers ans
            testers ensure the software we build for you is of high quality,
            scalable, and secure.
          </p>
        </div>
        <div className={classes.card}>
          <h2>Regulatory Guidan</h2>
          <p>
            We stay abreast of the the ever-changing regulatory landscape,
            providing timely advice to ensure your startup's operations stay
            within legal boundaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experties;
