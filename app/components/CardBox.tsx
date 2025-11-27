import styles from "./CardBox.module.css"
import Link from "next/link";

interface CardBoxProps{
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
}

export default function CardBox({ icon, title, description, buttonText, href}: CardBoxProps) {
    return (
        <div className={styles.Box}>
            <div className={styles.agency}>
                <img className={styles.svg} src={icon} alt={title} width={50} height={50} /> {title}
            </div>
            <div className={styles.boxDetails}>
                {description}
            </div>
            <Link href={href} className={styles.BoxBtn}>
                {buttonText}
            </Link>
        </div>
    );
}