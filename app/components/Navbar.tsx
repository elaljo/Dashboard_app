import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <>
            <Link href='/'> <div className={styles.AppName}>Dashboard</div> </Link>
            <ul className={styles.ul}>
                <Link href='/agencies'> <li className={styles.li}> Agencies </li> </Link>
                <Link href='/contacts'> <li className={styles.li}> Contacts </li> </Link>
            </ul>
            <div className={styles.buttons}>
                <SignedOut>
                    <SignInButton>
                        <button className={styles.signBtn}>
                            SIGN IN
                        </button>
                    </SignInButton>
                    <SignUpButton>
                        <button className={styles.signBtn}>
                            SIGN UP
                        </button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton showName/>
                </SignedIn>
            </div>
        </>

    )
}