import React from "react";
import {motion} from 'framer-motion'
import "./Back.css";
export default function Back() {
  return (
    <div className="intro">
      <motion.h1 
        animate={{x:0, opacity: 1}} 
        initial={{x:-2000, opacity:.2}}
        transition={{delay:.3}}
        className="intro-name"
           >
        “Il n'est aucune chose qui vaille plus que la santé”
      </motion.h1>
      <motion.p 
      animate={{x:0, opacity: 1}} 
      initial={{x:-2000, opacity:.2}}
      transition={{delay:.3}}
      className="back-text"
      >
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem
      </motion.p>
    </div>
  );
}
