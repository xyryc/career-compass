# Career Compass

**Career Compass** is a website designed to help users with career guidance. It offers personalized services, useful resources, and tools to make career decisions easier and more effective.

## Live Site

[Career Compass](https://career-compass-2abf6.web.app/)

---

## Features

- **Dynamic User Experience**

  - Interactive homepage with modern UI components using **swiper.js**, **react-fast-marquee**, and **AOS animation** for smooth scrolling effects and transitions.

- **Authentication System**

  - Google login, user registration, profile update, and password reset functionalities powered by **Firebase Authentication**.
  - Password reset email functionality for seamless user recovery.
  - Show/hide password functionality during registration.
  - Validation for passwords, ensuring secure account creation.

- **Private Routes**

  - Protected routes for My Profile, Service Details, and Appointment pages ensure a secure user experience.
  - Users remain logged in even after page reloads, using Firebase's `onAuthStateChange`.

- **Appointments Management**

  - Users can book appointments for services, view their scheduled appointments directly from their appointment tab.
  - Data persists using **localStorage**, ensuring a smooth user experience.

- **Responsive Design**

  - Fully responsive design optimized for all devices.

- **User-Friendly Navigation**
  - Enhanced navigation experience with intuitive routing and React components.

---

## Additional Features

- **Feedback/Comment Section**

  - Allows users to leave feedback or comments on each service details page, enhancing interactivity and user engagement.

- **Toast Notifications**

  - Real-time feedback and alerts using **react-hot-toast**.

- **Services & Workshops**

  - Explore career-focused workshops, events, and programs tailored to various professional needs.
  - Each service includes details like instructor details, session duration, category, ratings and more.

- **404 Page**

  - Custom error page to handle invalid routes.

- **Dynamic Title**
  - Page titles change dynamically based on the active route implemented using **react-helmet-async**.

---

## Technologies Used

- **Frontend Framework**: React.js
- **CSS Framework**: TailwindCSS
- **Component Libraries**: DaisyUI, React Icons
- **Routing**: React Router
- **State Management**: React Context API
- **Authentication**: Firebase
- **Data Persistance**: Local Storage
- **Animation**: AOS Animation
- **Carousel & Scrolling**: Swiper.js, React-Fast-Marquee
- **Authentication**: Firebase Authentication
- **Notification**: React Hot Toast
- **Dynamic Title**: React-Helmet-Async

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/xyryc/career-compass.git
   cd career-compass
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add Firebase configuration:

   - Create a `.env.local` file in the root directory and add your Firebase config keys:

   ```bash
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_project_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser:
   ```bash
   http://localhost:5173/
   ```

---

## Contribution

Feel free to fork the repository, make improvements, and submit a pull request. For major changes, open an issue first to discuss the proposed changes.
