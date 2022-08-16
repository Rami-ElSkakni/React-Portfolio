import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <ContactForm />
    </motion.div>
  );
}
