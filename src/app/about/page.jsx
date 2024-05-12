import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  //console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Bookwiz</h2>
        <h1 className={styles.title}>
        Unleash the magic of reading with BookWiz Book Club!
        </h1>
        <p className={styles.desc}>
        Welcome to BookWiz Book Club, where literary enthusiasts gather to explore the enchanting world of books! With a passion for storytelling and a love for lively discussions, our club offers a vibrant community for readers of all backgrounds. From timeless classics to contemporary bestsellers, we curate a diverse selection of reads that promise to spark imagination, ignite curiosity, and provoke thought. Join us for enriching conversations, meaningful connections, and the joy of discovering new literary treasures. Together, let's unlock the magic of storytelling and celebrate the boundless power of books!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Read</h1>
            <p>Achieve your reading goals</p>
          </div>
          <div className={styles.box}>
            <h1>Share</h1>
            <p>Share your reading experience</p>
          </div>
          <div className={styles.box}>
            <h1>Socialize</h1>
            <p>Get to know other bookworms</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/bookclub.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;