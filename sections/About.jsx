'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|About ASD Studios" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Embark on a journey into the future of development with
        <span className="font-extrabold text-white"> ASD Studios</span> where we
        redefine the cutting edge. Immerse yourself in the next frontier of technology and
        latest technologies and cutting-edge methodologies. Unleash the potential of your
        projects with {' '}
        <span className="font-extrabold text-white">
          ASD Studios
        </span>{' '}
        your gateway to a{' '}
        <span className="font-extrabold text-white">dynamic, revolutionary,
          and cutting-edge development experience.
        </span>
        Scroll down and step into the future of frontend and gaming innovation.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
