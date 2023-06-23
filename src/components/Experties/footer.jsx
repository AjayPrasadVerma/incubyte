import classses from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classses.footer}>
        <h1>Ready to Scale Up?</h1>
        <p>
          Experience the incubyte advantage today. Let us help you navigate the
          challenges and scale up your operations smoothly and efficiently.
        </p>
        <button>Contact Us</button>
      </div>
      <div className={classses.copyright}>&copy; 2023 Incubyte</div>
    </>
  );
};

export default Footer;
