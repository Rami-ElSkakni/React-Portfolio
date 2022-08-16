import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classes from "./Biography.module.css";
import Footer from "./Footer";
import Button from "../UI/Button";

export default function Biography() {
  return (
    <>
      <header
        className={`mt-5 border border-dark rounded-3 text-center m-auto p-3 ${classes.header} `}
        style={{ backgroundColor: "#313134" }}
      >
        <h1 className="text-white fs-6 text text-center">
          Hello! I am a Web Developer in the making!
        </h1>
      </header>
      <div className={`mt-5 ${classes.container}`}>
        <section
          className={`d-flex justify-content-between mt-3 ${classes.title}`}
        >
          <div className="f-flex flex-column">
            <h2 className={`text-white fs-3 text-right mt-3 ${classes.name}`}>
              Rami Sakakini
            </h2>
            <p className={`text-white ${classes.name}`}>
              Web Developer/ Web Designer
            </p>
          </div>
          <div>
            <img
              src={require("../Images/Rami.jpg")}
              alt="Pic of myself"
              className={classes.profileimg}
            />
          </div>
        </section>
        <section>
          <h3
            className="text-white fs-5 mt-5 border-bottom border-4 d-inline-block"
            style={{ borderBottomColor: "#81E6D9" }}
          >
            Work
          </h3>
          <p className={`text-white ${classes.description}`}>
            From when I were a teenager I was interested in Web development,
            especially the front side of it since I prefer visuals and instantly
            seeing the changes that I am doing. I'm currently doing an
            internship that is teaching me new things and allowing me to sharpen
            my skills. After it, I would like to graduate from Computer Science
            and start my career.
          </p>
          <div className="text-center">
            <Link to="/projects">
              <Button>
                My Projects
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  aria-hidden="true"
                  style={{ width: "1em", height: "1em", color: "black" }}
                >
                  <path
                    fill="currentColor"
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  ></path>
                </svg>
              </Button>
            </Link>
          </div>
        </section>
        <section>
          <h3 className="text-white fs-5 mt-5 border-bottom border-4 d-inline-block">
            Bio
          </h3>
          <div className="d-flex flex-column">
            <p className="text-white fw-light">
              <span className="pe-4 fw-bold">2020</span> Graduated From Houssam
              Eddine El Hariri High School
            </p>
            <p className="text-white fw-light">
              <span className="pe-4 fw-bold">2020 - present</span>Studying
              Computer Science at BAU
            </p>
            <p className="text-white fw-light">
              <span className="pe-4 fw-bold">2022 - Summer</span>Internship at
              Go.Media
            </p>
          </div>
        </section>
        <section>
          <h3 className="text-white fs-5 mt-5 border-bottom border-4 d-inline-block">
            On the Web
          </h3>
          <div className="d-flex flex-column">
            <p className={classes.socials}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                aria-hidden="true"
                focusable="false"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "#60A29B" }}
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
              <a
                href="https://github.com/Rami-ElSkakni"
                className={classes.link}
              >
                Rami ElSkakini
              </a>
            </p>
            <p className={classes.socials}>
              <LinkedInIcon style={{ color: "#60A29B" }} />
              <a
                href="https://www.linkedin.com/in/rami-el-skakini-8404b01b6/"
                className={classes.link}
              >
                Rami ElSkakini
              </a>
            </p>
          </div>
        </section>
        <div className="text-center mb-5">
          <Link to="/contact">
            <Button>
              Contact Me{" "}
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-onkibi"
                aria-hidden="true"
                style={{ width: "1em", height: "1em", color: "black" }}
              >
                <path
                  fill="currentColor"
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                ></path>
              </svg>
            </Button>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
