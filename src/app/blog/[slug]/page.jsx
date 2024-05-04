import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image 
                src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt=""
                fill 
                className={styles.img}
            />
            </div>
           <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                <Image 
                    className={styles.avatar}
                    src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="" 
                    width={50}
                    height={50}
                />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Afsana Abida</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.24</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Books on the bookshelf.
                </div>
           </div> 
        </div>
    )
}

export default SinglePostPage