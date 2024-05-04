import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bookwiz</div>
      <div className={styles.text}>
        Bookwiz Bookclub © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;