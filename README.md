# Dashboard Application – Agencies & Contacts Viewer
This project is a full-stack dashboard application built with Next.js 16 and Clerk authentication.

Users can browse agency data and employee contacts, with a daily viewing limit and a clean UI designed for clarity and performance.
# 🚀 Features

## 🔐 User Authentication (Clerk)
Users must sign in to access the dashboard.

Clerk handles sign-in, sign-up, and session management.
## 🏢 Agencies Dashboard
Authenticated users can view all agencies.

Data is displayed in a clean, scrollable table.
## 👥 Contacts Viewer With Daily Limit
Users can view up to 50 contacts per day.

Scrolling through the table automatically counts each viewed contact.

Once the daily limit is reached:

  -A modal appears asking the user to upgrade (no payment system required).

  -Additional contacts are blurred.
# 📅 Daily Reset
View counter resets every day automatically using localStorage with date tracking.
# 🛠 Technical Stack
Next.js 16 (App Router, Turbopack)

Clerk Authentication

CSS Modules for styling

IntersectionObserver for tracking which rows are viewed

LocalStorage for persistent daily usage tracking

Vercel Deployment
# 🧩 System Architecture
User → Clerk Authentication → Dashboard Home
         |
         ↓
  Agencies Page ← Fetch Local CSV → Display Table
         |
         ↓
  Contacts Page → IntersectionObserver → Track Viewed Rows (localStorage)
         |
         ↓
Modal Triggered After 50 Views → Blur Remaining Contacts
