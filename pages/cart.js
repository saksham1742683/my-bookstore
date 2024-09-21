import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove item from cart
  const handleRemoveFromCart = (bookId) => {
    const updatedCart = cart.filter((item) => item.id !== bookId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul className={styles.cartList}>
            {cart.map((book) => (
              <li key={book.id} className={styles.cartItem}>
                <img src={book.image} alt={book.title} className={styles.bookImage} />
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Price: ₹{book.price}</p>
                <button onClick={() => handleRemoveFromCart(book.id)} className={styles.removeButton}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total Price: ₹{totalPrice}</h2>
        </>
      ) : (
        <p>Your cart is empty. <Link href="/">Go back to the store.</Link></p>
      )}
    </div>
  );
};

export default Cart;
