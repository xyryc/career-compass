import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral-800 text-white rounded p-10 font-poppins mt-16">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Career</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="https://x.com/ANick20068930" target="_blank">
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/talath-un-nabi-anik/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/xyryc" target="_blank">
            <FaGithub />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Career
          Compass Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
