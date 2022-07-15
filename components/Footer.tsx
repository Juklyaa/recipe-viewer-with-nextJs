import React, { FC } from 'react';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

const Footer: FC = () => {
  const {footer, logo} = styles;

  return (
    <footer className={footer}>
      Footer {' '}
      Powered by{' '}
      <span className={logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </footer>
  );
};

export default Footer;
