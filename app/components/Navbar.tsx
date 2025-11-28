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

export default function Navbar() {
    return (
      <nav className={styles.container}>
        <div className={styles.left}>
          <Link href="/"><div className={styles.AppName}>Dashboard</div></Link>
        </div>
  
        <div className={styles.center}>
          <ul className={styles.ul}>
            <Link href="/agencies"><li className={styles.li}>Agencies</li></Link>
            <Link href="/contacts"><li className={styles.li}>Contacts</li></Link>
          </ul>
        </div>
  
        <div className={styles.right}>
          <SignedOut>
            <SignInButton>
              <button className={styles.signBtn}>SIGN IN</button>
            </SignInButton>
            <SignUpButton>
              <button className={styles.signBtn}>SIGN UP</button>
            </SignUpButton>
          </SignedOut>
  
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
      </nav>
    );
  }