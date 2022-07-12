// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '@styles/header.module.scss';

const Header = ({ items }) => {
  // const { headerContainer, link, nav } = styles;

  return (
    <header>
      HEADER
      {/*
      <Link href="/">
        <Image src="/favicon.ico" alt="go home" width={50} height={50} />
      </Link>
      <nav className={nav}>
        {items.map((item) => (
          <Link href={`/${item}`} key={item}>
            <a className={link}>{item}</a>
          </Link>
        ))}
      </nav>
      */}
    </header>
  );
};

export default Header;
