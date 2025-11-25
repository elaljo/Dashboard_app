import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <>
            <div className={styles.AppName}> Dashboard </div>
            <ul className={styles.ul}>
                <li> Home </li>
                <li> Agencies </li>
                <li> Contacts </li>
            </ul>
            <div>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </>

    )
}