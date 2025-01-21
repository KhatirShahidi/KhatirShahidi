import React, { ReactElement } from 'react';
import styles from '../styles/components/ProfilePic.module.scss';

interface Props {}

function ProfilePic({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img
        src="/images/ks_art.webp"
        className={`${styles.secondary} ${styles.left}`}
      />
      <img
        src="/images/ks_art.webp"
        className={`${styles.secondary} ${styles.right}`}
      />

      <img src="/images/ks_art.webp" alt="Small doodle of myself" />

      <img
        src="/images/ks_art2.webp"
        alt="Alternative doodle of myself"
        className={styles.easterEgg}
      />
    </div>
  );
}

export default ProfilePic;
