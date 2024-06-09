# Geekster Dashboard with Next.js and Tailwind CSS

## Description

This project implements a secure and responsive web application using Next.js and Tailwind CSS. It features a login page and a protected advanced dashboard.

## Features

- **Login Page**: Allows users to log in with a username and password.
- **Protected Dashboard**: Accessible only to authenticated users. 
- **Responsive Design**: Ensured through Tailwind CSS, the application is responsive and looks good on both desktop and mobile devices.
- **Logout Functionality**: Users can log out and be redirected to the login page which contains form validation for username and password.
- **Middleware Protection**: Ensures that only authenticated users can access the dashboard.
- **Session Management**: Authentication state is persisted across page reloads using cookies. The session reloads in 1 hour.

## Approach

1. **Authentication**: Implemented a simple hardcoded authentication mechanism using Next in-built API route for login and logout.
2. **Protected Routes**: Used Next.js middleware to protect the dashboard route and redirect unauthenticated users to the login page.
3. **State Management**: Managed authentication state using cookies to persist the user's login state across page reloads.
4. **Styling**: Utilized Tailwind CSS for quick and efficient styling of the components to ensure a responsive design.
5. **Componentization**: Broke down the dashboard into reusable components such as Sidebar, Table, Dynamic Columns for better code organization and maintainability.
6. **Extra functionalities**: Implemented a advance table with data and Dynamic columns.

### Challenges
- **Integrating the Next built in API**: I had never used it so reading the documentation and implementing it was a big task.
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
   ```

5. **Authentication details:**
   ```sh
   Username: admin
   password: admin123
   ```


**ScreenShots**

![image](https://github.com/Ojas13-git/geekster-dashboard/assets/79032848/958ba552-2e33-49ad-84f5-63600f942711)

![image](https://github.com/Ojas13-git/geekster-dashboard/assets/79032848/d8412ed6-def2-463b-8d4c-cc5a2ca468a2)

![image](https://github.com/Ojas13-git/geekster-dashboard/assets/79032848/fc23e2a5-5d15-4167-8be4-d2a0c083109f)

![image](https://github.com/Ojas13-git/geekster-dashboard/assets/79032848/ae4fa858-ff07-47df-8a3a-6a742cf88651)

![image](https://github.com/Ojas13-git/geekster-dashboard/assets/79032848/238723a1-f70f-4d6f-a900-c994402945c6)




