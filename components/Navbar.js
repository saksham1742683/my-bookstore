import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Load cart count from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartCount(JSON.parse(storedCart).length);
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">READERS</Link>
      </div>
      <div className={styles.search}>
        <input type="search" placeholder="Search your fav" />
        <button>Search</button>
      </div>
      <div className={styles.cart}>
        <Link href="/cart">
          <span className={styles.cartButton}>
            Cart ({cartCount}) {/* Display the cart count */}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
