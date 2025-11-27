"use client";

import { useEffect } from "react";
import styles from "./LimitModal.module.css";

interface LimitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LimitModal({ isOpen, onClose }: LimitModalProps) {
  useEffect(() => {
    if (isOpen)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.icon}>⚠️</div>
          <h2 className={styles.title}>Daily Limit Reached</h2>
          <p className={styles.message}>
            You've reached your daily limit of 50 contacts. Please upgrade to see more.
          </p>
          <button className={styles.button} onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
