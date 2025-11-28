# Dashboard Application – Agencies & Contacts Viewer
This project is a demo built for a take-home assignment, showcasing authentication, CSV data handling, row-tracking logic, and a clean dashboard experience.

It uses Next.js 16 and Clerk for a simple, modern, and secure setup.
# 🚀 Features

## 🔐 User Authentication (Clerk)
● Users must sign in to access the dashboard.

● Clerk handles sign-in, sign-up, and session management.
## 🏢 Agencies Dashboard
● Authenticated users can view all agencies.

Data is displayed in a clean, scrollable table.
## 👥 Contacts Viewer With Daily Limit
● Users can view up to 50 contacts per day.

● Scrolling through the table automatically counts each viewed contact.

● Once the daily limit is reached:

  • A modal appears asking the user to upgrade (no payment system required).

  • Additional contacts are blurred.
# 📅 Daily Reset
● View counter resets every day automatically using localStorage with date tracking.
# 🛠 Technical Stack
● Next.js 16 (App Router, Turbopack)

● Clerk Authentication

● CSS Modules for styling

● IntersectionObserver for tracking which rows are viewed

● LocalStorage for persistent daily usage tracking

● Vercel Deployment

# 📦 Installation & Setup
## 1️⃣ Clone Repository
● git clone https://github.com/your-username/your-repo.git

● cd your-repo
## 2️⃣ Install Dependencies
● npm install
## 3️⃣ Set Up Clerk
● Create a .env.local file:

• NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here

• CLERK_SECRET_KEY=your_key_here
## 4️⃣ Run Development Server
●npm run dev
