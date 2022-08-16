import React from "react";
import Biography from "../components/Biography";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Biography />
    </motion.div>
  );
}
