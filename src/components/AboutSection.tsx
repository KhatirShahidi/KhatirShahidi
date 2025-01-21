import React, { ReactElement } from 'react';
import styles from '../styles/components/AboutSection.module.scss';

import SectionHeader from './SectionHeader';
import ProfilePic from './ProfilePic';
import Button from './Button';
import ScrollingText from './ScrollingText';

interface Props {
  contactRef: any;
}

function AboutSection({ contactRef }: Props): ReactElement {
  return (
    <section className={styles.container}>
      <SectionHeader title="About" align="right" />

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <ProfilePic />
        </div>

        <div className={styles.aboutWrapper}>
          <p>
            Driven by curiosity and a love for continuous growth, I’m an
            aspiring software engineer with a knack for problem-solving and a
            passion for crafting meaningful solutions. Drawing from my
            experience as a fitness coach and community builder, I bring a
            disciplined, goal-oriented mindset to every challenge. Beyond
            coding, I’m a dedicated fitness enthusiast and a proud family man
            who values balance and purpose in life. My technical journey focuses
            on building responsive, user-friendly applications, leveraging
            modern technologies like React and Node.js. Whether it’s optimizing
            code or inspiring others through fitness, I thrive on making a
            positive impact.
          </p>

          <div className={styles.scrollerContainer}>
            <h1>I am a</h1>

            <ScrollingText
              text="Aspiring Software Engineer &middot; "
              direction="left"
            />
            <ScrollingText
              text="Passionate Fitness Enthusiast &middot; "
              direction="right"
            />
            <ScrollingText
              text="Devoted Family Man &middot; "
              direction="left"
            />
          </div>

          <Button
            onClick={() => {
              contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
              });
            }}
            type="button"
            text="Say Hello"
            isPrimary
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
