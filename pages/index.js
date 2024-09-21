import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link"; 
import styles from "../styles/Home.module.css";
import books from "../data/books";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10); // Show 10 
  const [expanded, setExpanded] = useState(false); 
  const [popupVisible, setPopupVisible] = useState(false); 
  const [popupContent, setPopupContent] = useState(""); 

  // Load cart and pagination state from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const storedItemsToShow = localStorage.getItem("itemsToShow");
    const storedExpandedState = localStorage.getItem("expanded");

    // Check if values exist in localStorage
    if (storedItemsToShow) {
      setItemsToShow(Number(storedItemsToShow));
    }

    if (storedExpandedState) {
      setExpanded(JSON.parse(storedExpandedState));
    }
  }, []);

  // Show popup when item is added to cart
  const showPopup = (message) => {
    setPopupContent(message);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false); // Hide after 3 seconds
    }, 3000);
  };

  // Add book to cart
  const handleAddToCart = (bookId) => {
    const bookToAdd = books.find((book) => book.id === bookId);
    const updatedCart = [...cart, bookToAdd];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage

    // Show the pop-up
    showPopup(`"${bookToAdd.title}" has been added to your cart!`);
  };

  // Show more items
  const handleShowMore = () => {
    setItemsToShow(books.length);
    setExpanded(true);
    localStorage.setItem("itemsToShow", books.length); // Save pagination state
    localStorage.setItem("expanded", true); // Save expanded state
  };

  // Show less items
  const handleShowLess = () => {
    setItemsToShow(10);
    setExpanded(false);
    localStorage.setItem("itemsToShow", 10); // Save pagination state
    localStorage.setItem("expanded", false); // Save expanded state
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookstore</title>
        <meta
          name="description"
          content="A static bookstore built with Next.js"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Bookstore</h1>
        <ul className={styles.bookList}>
          {books.slice(0, itemsToShow).map((book) => (
            <li key={book.id} className={styles.bookItem}>
              <div className={styles.bookContainer}>
                {/* note as per next new rules a should not be in link */}
                <Link href={`/books/${book.id}`}>
                  <img
                    src={book.image || "/images/myBook.jpg"}
                    alt={book.title}
                    className={styles.bookImage}
                  />
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <p className={styles.bookAuthor}>{book.author}</p>
                  <p>Price: ₹{book.price}</p>
                </Link>
                <button
                  className={styles.button}
                  onClick={() => handleAddToCart(book.id)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        {!expanded ? (
          <button
            onClick={handleShowMore}
            className={styles.showPaginationButton}
          >
            Show more items
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className={styles.showPaginationButton}
          >
            Show less items
          </button>
        )}

        {/* Pop-up Notification */}
        {popupVisible && (
          <div
            className={`${styles.popup} ${popupVisible ? styles.visible : ""}`}
          >
            <h3>Cart Updated</h3>
            <p>{popupContent}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
