# My Professional Portfolio

A modern, responsive, and high-performance portfolio website built with **React**, **Vite**, and **Bootstrap**. This project showcases my skills in web development, database design, and game mechanics.

---

## Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** SASS / SCSS, Bootstrap 5, Custom CSS
- **Interactivity:** React Bootstrap, React-medium-image-zoom
- **Email Service:** EmailJS (Integration for contact form)
- **Deployment:** [Live Website](https://personal-portfolio-front-end.vercel.app/)

---

## Project Structure

The project follows a modular component-based architecture:

```text
├── public/                                  # Static assets (Downloads, ZIP files, Favicon)
├── src/
│   ├── assets/                              # Global assets
│   │   ├── fonts/                           # Custom typography
│   │   ├── images/                          # Project screenshots and icons
│   │   └── styles/                          # SASS/CSS modules
│   ├── components/                          # Reusable React components
│   │   ├── AboutMe/                         # Information about me
|   │   ├── App.jsx                          # Main application entry point
│   │   ├── ContactForm/                     # Form logic with EmailJS
│   │   ├── Contacts/                        # Contact section layout
│   │   ├── DesktopPresentation/             # Landing hero desktop section
│   │   ├── Footer/                          # Copyright and link to source code
│   │   ├── MobileMenu/                      # Mobile menu on topbar
│   │   ├── MobilePresentation/              # Landing hero mobile section
│   │   ├── Projects/                        # Main Projects container & Carousel
│   │   │   └── projects/                    # Individual project details
│   │   │       ├── DBProject.jsx
│   │   │       ├── GameProject.jsx
│   │   │       └── UxUiProject.jsx
│   │   └── TopNavBar/                       # Navigation with scroll spying
│   ├── global.css                           # Global variables and resets
│   ├── isMobile.js                          # Custom hook to define adaptability
│   └── main.jsx                             # React DOM rendering
├── .gitignore                               # Files ignored by Git
├── package.json                             # Dependencies and scripts
└── vite.config.js                           # Vite configuration
```

## Key Features

### 1. Interactive Project Showcases
- **E-commerce Database:** Detailed relational schema management with downloadable SQL assets. Focus on data integrity and business logic.
- **Crystal of Fate (Game):** A room-based Tower Defense showcasing procedural enemy generation logic and strategic unit deployment.
- **Internal Carousels:** Optimized UX using nested carousels with disabled autoplay to allow for comfortable technical reading.

### 2. Advanced Technical Implementation
- **Image Zooming:** Integrated `react-medium-image-zoom` to allow recruiters to inspect technical diagrams and database schemas in high resolution.
- **Modular Styling:** Scalable CSS architecture using a mix of Global Styles and component-specific stylesheets for better maintainability.
- **Dynamic Assets:** Strategic use of the `public` directory for secure and reliable binary file downloads (ZIP, PDF).

### 3. Responsive Design & Adaptability
- **Fluid Layout:** Built with CSS Flexbox to allow elements to resize proportionally according to the screen width.
- **Smart Navigation:** Implementation of a dynamic `TopNavBar` that adapts automatically:
      - **Desktop:** Full-width navigation with direct links and interactive hover effects.
      - **Mobile (< 500px):** A sleek hamburger menu featuring a Background Blur (backdrop-filter) overlay to focus user attention and a scroll-lock mechanism for a clean, app-like feel.
- **Conditional Rendering:** Leveraged custom React Hooks (`useIsMobile`) to serve optimized components based on the viewport (e.g., simplified carousels for mobile to improve performance).

#### Technical Specifications
- **Primary Breakpoint:** 500px (Switch to mobile-optimized UI).
- **Viewport Management:** Meta tag configurations to prevent layout shifting and unintended zooming on mobile browsers.

### 4. Contact Integration
- **Direct Messaging:** Fully functional contact form powered by **EmailJS**.
- **Automated Feedback:** Real-time UI feedback for message status (sending, success, error) and automated email replies.

---

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/tuo-username/nome-repo.git](https://github.com/tuo-username/nome-repo.git)
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Environment Variables:**
    Create a `.env` file in the root directory to store your credentials securely.
   ```text
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## Technical Insights

- **Vite Performance:** Chosen for its lightning-fast Hot Module Replacement (HMR) and optimized build process.
- **Data Handling:** The database project ZIP is served from the `public` directory to ensure binary integrity during download.
- **Component Lifecycle:** Used React `useRef` and `useState` hooks to manage EmailJS form states and UI feedback loops.

Developed with 💻 and ☕ by Luca