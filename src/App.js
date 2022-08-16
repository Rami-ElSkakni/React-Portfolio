import React, { Suspense } from "react";

import { Switch, Route } from "react-router-dom";
import NavbarHeader from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from './UI/LoadingSpinner'

const Projects = React.lazy(() => import("./pages/Projects"));
const Skills = React.lazy(() => import("./pages/Skills"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div>
      <NavbarHeader />
      <AnimatePresence>
        <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;
