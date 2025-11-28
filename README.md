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

  A modal appears asking the user to upgrade (no payment system required).

  Additional contacts are blurred.
