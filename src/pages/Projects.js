import React from "react";
import Project from "../components/Project";
import { Container } from "react-bootstrap";
import classes from "../components/Project.module.css";
import { motion } from "framer-motion";

const ProjectItems = [
  {
    id: "p1",
    name: "React Food App",
    description:
      "This project is a fully functional food app where the customer can add food to his cart, edit them, and submit his order. All the meal items are on a backend firebase and are fetched from the database.",
    imageName: "FoodApp",
    languages: ["ReactJS", "Firebase"],
    url: "https://github.com/Rami-ElSkakni/React-foodApp",
    websiteUrl: "https://rami-foodapp.netlify.app"
  },
  {
    id: "p2",
    name: "React Shopping Cart",
    description:
      "This is a project where some items are rendered out and the user can change and manipluate his cart as he wishes.",
    imageName: "shoppingcart",
    languages: ["ReactJS", "Firebase", "Bootstrap"],
    url: "https://github.com/Rami-ElSkakni/React--Shopping-Cart",
    websiteUrl: ""
  },
  {
    id: "p3",
    name: "Clothing Website",
    description:
      "This is a website that displays different clothes that the user wants to purchase. There is a login page, checkout page, and a payment page.",
    imageName: "clothingSite",
    languages: ["Javascript", "PHP", "MySQL"],
    url: "https://github.com/Rami-ElSkakni/Clothing-Front-End-Website",
    websiteUrl: ""
  },
  {
    id: "p4",
    name: "Movie Database",
    description:
      "This was a project where displayed Movies in a database that were fetched using PHP and displayed on a website with filtering options",
    imageName: "MovieDatabase",
    languages: ["Javascript", "PHP", "MySQL"],
    url: "https://github.com/Rami-ElSkakni/DataBase-Frontend-Project",
    websiteUrl: ""
  },
];

export default function Projects() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <header
        className={`mt-5 border border-dark rounded-3 text-center m-auto p-3 ${classes.header}`}
        style={{ backgroundColor: "#313134" }}
      >
        <h1 className="text-white fs-5">My Projects</h1>
      </header>
      <Container className="w-50 text-center">
        <section className="d-flex flex-wrap justify-content-center gap-5">
          {ProjectItems.map((items) => {
            return (
              <Project
                key={items.id}
                name={items.name}
                description={items.description}
                imageName={items.imageName}
                languages={items.languages}
                url={items.url}
                websiteUrl={items.websiteUrl}
              />
            );
          })}
        </section>
      </Container>
    </motion.div>
  );
}
