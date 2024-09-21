import { useRouter } from "next/router";
import books from "../../data/books"; // Adjust the path as necessary
import styles from "../../styles/BookDetail.module.css"; // Create a CSS module for styles

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((b) => b.id === id); // Find the book by ID

  if (!book) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <div className={styles.container}>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>Price: ₹{book.price}</p>
      <img src="/myBook.jpg" alt={book.title} className={styles.bookImage} />
      <p>{book.description}</p> {/* Assuming books data includes a description */}
    </div>
  );
};

export default BookDetail;
