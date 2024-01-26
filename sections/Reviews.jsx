'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { reviews } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Reviews = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| reviews" textStyles="text-center" />
      <TitleText title={<>What they say?</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {reviews.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Reviews;
