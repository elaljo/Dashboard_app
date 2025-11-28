"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/agencies", label: "Agencies" },
    { href: "/", label: "Home", isHome: true },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
      </div>
      <div className={styles.center}>
        <ul className={styles.ul}>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href} className={styles.navItemWrapper}>
                <Link
                  href={link.href}
                  className={`${styles.navItem} ${link.isHome ? styles.navItemHome : ""} ${isActive ? styles.navItemActive : ""}`}
                >
                  {link.isHome ? (
                    <span className={styles.navIcon} aria-label="Home" role="img">
                      ⌂
                    </span>
                  ) : (
                    <span className={styles.navLabel}>{link.label}</span>
                  )}
                  <span className={styles.navGlow} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.right}>
        <SignedOut>
          <SignInButton>
            <button className={styles.signINbtn}>Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className={styles.signUPbtn}>Sign up</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </div>
    </nav>
  );
}