import React from "react";
import "./Hero.css";
import profile_img from "../../assets/user.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Dinesh Lokhande,</span> frontend developer based in Pune.
      </h1>
      <p>
        I am a frontend developer from Pune, Maharatshra with 2+ years of
        experience in multiple companies like Datamann, newton & powersun.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
