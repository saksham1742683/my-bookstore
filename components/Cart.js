import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  // Get the cart from local storage or initialize it empty
  const [cart, setCart] = useState([]);

  const handleRemoveFromCart = (bookId) => {
    const updatedCart = cart.filter((item) => item.id !== bookId);
    setCart(updatedCart);
  };
  // console.log(item.image);
  console.log("saksham");

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/">Go back to shop</Link>
        </p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              {/* <Image
                src={item.image ||  "/images/myBook.jpg"}
                width={100}
                height={100}
                alt="saksa"
                className={styles.cartImage}
              /> */}
              <div>
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <p>Price: ₹{item.price}</p>
                <button
                  className={styles.button}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
