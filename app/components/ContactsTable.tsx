"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import LimitModal from "./LimitModal";
import styles from "../contacts/contacts.module.css";

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  title: string;
  department: string;
}

interface ContactsTableProps {
  contacts: Contact[];
}

const DAILY_LIMIT = 50;
const STORAGE_KEY = "contacts_viewed_indices";
const STORAGE_DATE_KEY = "contacts_viewed_date";

export default function ContactsTable({ contacts }: ContactsTableProps) {
  const [viewedCount, setViewedCount] = useState(0);
  const [viewedIndices, setViewedIndices] = useState<Set<number>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastViewedDate = localStorage.getItem(STORAGE_DATE_KEY);
    
    if (lastViewedDate !== today) {
      localStorage.setItem(STORAGE_KEY, "[]");
      localStorage.setItem(STORAGE_DATE_KEY, today);
      setViewedIndices(new Set());
      setViewedCount(0);
    } else {
      try {
        const savedIndices = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        ) as number[];
        const indicesSet = new Set(savedIndices);
        setViewedIndices(indicesSet);
        setViewedCount(indicesSet.size);
        if (indicesSet.size >= DAILY_LIMIT) {
          setShowModal(true);
        }
      } catch (error) {
        localStorage.setItem(STORAGE_KEY, "[]");
        setViewedIndices(new Set());
        setViewedCount(0);
      }
    }
  }, []);
  const saveViewedIndices = useCallback((newIndices: Set<number>) => {
    const indicesArray = Array.from(newIndices);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(indicesArray));
    setViewedCount(newIndices.size);
    setViewedIndices(newIndices);
  }, []);
  const handleRowView = useCallback((index: number) => {
    setViewedIndices((prevIndices) => {
      if (prevIndices.has(index)) return prevIndices;
      
      if (prevIndices.size >= DAILY_LIMIT) return prevIndices;
      
      const newIndices = new Set(prevIndices);
      newIndices.add(index);
      saveViewedIndices(newIndices);
      
      if (newIndices.size >= DAILY_LIMIT) {
        setShowModal(true);
      }
      
      return newIndices;
    });
  }, [saveViewedIndices]);

  useEffect(() => {
    if (viewedCount >= DAILY_LIMIT) {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(
                entry.target.getAttribute("data-row-index") || "0",
                10
              );
              handleRowView(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
    }
    const rows = rowRefs.current.filter(Boolean);
    rows.forEach((row) => {
      if (row && observerRef.current) {
        observerRef.current.observe(row);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [contacts.length, handleRowView, viewedCount]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Contacts Details</h1>
        {viewedCount < DAILY_LIMIT && (
          <div className={styles.limitInfo}>
            {viewedCount} / {DAILY_LIMIT} contacts viewed today
          </div>
        )}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Title</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact: Contact, index: number) => {
                const isBlurred = viewedCount >= DAILY_LIMIT && !viewedIndices.has(index);
                
                return (
                  <tr
                    key={index}
                    ref={(el) => {
                      rowRefs.current[index] = el;
                    }}
                    data-row-index={index}
                    className={isBlurred ? styles.blurredRow : ""}
                  >
                    <td>{index + 1}</td>
                    <td>{contact.first_name}</td>
                    <td>{contact.last_name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.title}</td>
                    <td>{contact.department}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <LimitModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
}
