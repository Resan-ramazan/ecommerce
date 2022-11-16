import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" footer-container">
      <p>©2020 Resan Headphones All right reserved</p>
      <p className="icons">
        <Link href="https://www.instagram.com/ramazannalkoyunn/">
          <AiFillInstagram href="https://www.instagram.com/ramazannalkoyunn/" />
        </Link>
        <Link href="https://twitter.com/RamazanAlkoyunn">
          <AiOutlineTwitter />
        </Link>
        <Link href="https://github.com/Resan-ramazan">
          <AiOutlineGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/ramazanalkoyun/">
          <AiOutlineLinkedin />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
