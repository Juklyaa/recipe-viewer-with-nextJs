import Link from 'next/link';
import styles from '../styles/components.module.css';

const Header = () => {
  const { container, navItem, active, nav } = styles;

  return (
    <header className={container}>
        <div>
          <Link href="/">
            <img src="/home.ico" alt="go home" width={30} height={30} />
          </Link>
        </div>
        <nav className={nav}>
          <div className={`${navItem}`}>
            <img src="/person.ico" aria-hidden="true" alt="log in" width={30} height={30}/>
            <span>James Bond</span>
          </div>
          <Link href="/favorites">
            <a className={`${navItem} ${active}`}>
              <img src="/favorite.ico" aria-hidden="true" alt="favorite" width={30} height={30}/>
              <span>Favorite recipes</span>
            </a>
          </Link>
        </nav>
    </header>
  );
};

export default Header;
