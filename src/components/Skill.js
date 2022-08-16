import React from "react";
import classes from "./Skill.module.css";

export default function Skill(props) {
  return (
    <div className={`${classes.card}`}>
      <header className="skill-1 text-white fs-4">{props.titleLogo}<span className="mx-2">{props.title}</span></header>
      <div className={`text-white d-flex flex-row mt-3 ${classes.list}`}>
        <div className="d-flex flex-column">
          {props.logo.map((logo) => {
            return (
              <div className="text-white text-start mx-2 d-inline">{logo}</div>
            );
          })}
        </div>
        <div>
          {props.list.map((element) => {
            return <div className="text-white text-start">{element}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
