import { motion } from "framer-motion";
import { profileInfo } from "../ulits/data";
import ResumeButton from "../resume/Resume";
import "./About.css";

export const About = () => {
  return (
    <div id="about-heading" className="about-container">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {profileInfo.greeting}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {profileInfo.name}
      </motion.h1>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {profileInfo.aboutMe}
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ResumeButton />
      </motion.div>
    </div>
  );
};
