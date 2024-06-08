# Advanced Dashboard with Next.js and Tailwind CSS

## Description

This project implements a secure and responsive web application using Next.js and Tailwind CSS. It features a login page and a protected advanced dashboard that includes user profile information, recent activities, and statistics. The dashboard is only accessible to authenticated users.

## Features

- **Login Page**: Allows users to log in with a username and password.
- **Protected Dashboard**: Accessible only to authenticated users. Displays user profile, recent activities, and statistics.
- **Responsive Design**: Ensured through Tailwind CSS, the application is responsive and looks good on both desktop and mobile devices.
- **Logout Functionality**: Users can log out and be redirected to the login page.
- **Middleware Protection**: Ensures that only authenticated users can access the dashboard.
- **Session Management**: Authentication state is persisted across page reloads using cookies.

## Approach

1. **Authentication**: Implemented a simple hardcoded authentication mechanism using an API route for login and logout.
2. **Protected Routes**: Used Next.js middleware to protect the dashboard route and redirect unauthenticated users to the login page.
3. **State Management**: Managed authentication state using cookies to persist the user's login state across page reloads.
4. **Styling**: Utilized Tailwind CSS for quick and efficient styling of the components to ensure a responsive design.
5. **Componentization**: Broke down the dashboard into reusable components such as Navbar, Sidebar, UserProfile, RecentActivities, and Statistics for better code organization and maintainability.

### Challenges

- **State Persistence**: Ensuring that the authentication state persisted across page reloads required careful handling of cookies and server-side checks.
- **Middleware Configuration**: Configuring the middleware to correctly handle route protection and redirects based on authentication state was critical for security.
- **Responsive Design**: Ensuring the application looked good on various screen sizes required detailed styling adjustments with Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Ojas13-git/geekster-dashboard.git
   cd geekster-dashboard
   
2.**Install dependencies:**

   ```sh
   npm install
   or
   yarn install
   ```

3.**Set up environment variables:**
   
4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev



