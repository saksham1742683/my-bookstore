import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topFooter}>
          <div className={styles.aboutUs}>
            <h3>About Us</h3>
            <p>Readers Bookstore is your one-stop destination for all kinds of books. We aim to provide a diverse range of titles for every reader's interest.</p>
          </div>

          <div className={styles.customerSupport}>
            <h3>Customer Support</h3>
            <p>Need help? Reach out to our support team:</p>
            <p>Email: <a href="mailto:support@readersbookstore.com">support@readersbookstore.com</a></p>
            <p>Phone: +123-456-7890</p>
          </div>

          <div className={styles.newsletter}>
            <h3>Subscribe to our Newsletter</h3>
            <p>Get the latest updates, offers, and new arrivals:</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomFooter}>
          <p>&copy; {new Date().getFullYear()} Readers Bookstore. All Rights Reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
          <p>
            Follow us: 
            <a href="#" className={styles.socialLink}>Facebook</a> | 
            <a href="#" className={styles.socialLink}>Twitter</a> | 
            <a href="#" className={styles.socialLink}>Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
