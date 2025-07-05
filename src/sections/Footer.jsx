import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/muhammad-saad-rasheed/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Muhammad Saad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
