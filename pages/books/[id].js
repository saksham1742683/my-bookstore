import { useRouter } from "next/router";
import books from "../../data/books";
import styles from "../../styles/BookDetail.module.css";
// import Image from "next/image";

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((b) => b.id === id); // Find the book by ID

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={book.image}
          // width={450}
          // height={450}
          alt={book.title}
          className={styles.bookImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>Price: ₹{book.price}</p>
        <p>{book.description}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <p>Pages: {book.pages}</p>
        <p>Genre: {book.genre}</p>
        <p>Ratings: {book.ratings}/5</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
        <button className={styles.addToFavouriteButton}>
          Add to Favourite
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
