import Image from "next/image"
import styles from "./about.module.css";


const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/18759215/pexels-photo-18759215/free-photo-of-streetlights-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/> 
            </div>
            
        </div>
    )
}

export default AboutPage