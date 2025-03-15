# Digantara_assessment

🚀 Multi-Step Form with Validation & Persistence
A dynamic, responsive, and user-friendly multi-step form built with HTML, CSS, and JavaScript.
The form supports step-based navigation, advanced validation, localStorage persistence, and a progress indicator.

📌 Features
✔️ Multi-step navigation with smooth transitions & animations
✔️ Advanced validation (email, phone, required fields)
✔️ Progress indicator (stepper UI for better UX)
✔️ LocalStorage persistence (resume after refresh)
✔️ Fully responsive and mobile-friendly
✔️ Optimized for scalability & future enhancements

🛠 Tech Stack
HTML5 (Structure)
CSS3 (Styling & Animations)
JavaScript (ES6) (Form logic, validation, localStorage handling)

🏗️ Project Setup & Usage
1️⃣ Clone the Repository
SSH
git clone https://github.com/Shivupujari2003/Digantara_assessment.git
cd Digantara_assessment
2️⃣ Open in Browser
Simply open the index.html file in any modern web browser or if you are using vs-code click on open with live server.

📝 Usage Guide
Fill out each step of the form and click "Next".
The form validates inputs before allowing progression.
If you leave and return, the form remembers your progress.
Click "Submit" on the final step to complete the form.

🎨 Design Decisions & Scalability Enhancements

🔹 Design Decisions
1️⃣ Optimized & Scalable Design
Modular Code Structure: The JavaScript code is well-structured, separating concerns like validation, navigation, and localStorage handling.
Reusable Components: CSS styles and JavaScript functions are designed to be easily reusable for future extensions.
Progressive Enhancement: The form works even without JavaScript but enhances user experience when JS is enabled.

2️⃣ Advanced Validation
Custom JavaScript validation is implemented for email, phone number, and required fields.
Prevents users from moving to the next step if validation fails.
Uses real-time feedback to guide users on input errors.

3️⃣ Improved User Experience
Step-based navigation with a clear progress indicator.
Real-time validation & error handling to prevent incorrect inputs.
Smooth animations & transitions for better usability.

4️⃣ LocalStorage Persistence
Saves user progress automatically, so they can resume later.
Form data is persisted across page refreshes.
Clears data upon successful submission to maintain a clean state.

🔹 Scalability & Production-Grade Enhancements
To make this form scalable & production-ready, these enhancements can be implemented:

✅ Backend Integration

Connect to a server-side API to store responses in a database.
Implement server-side validation for security.
✅ Enhanced Storage & Session Handling

Replace localStorage with sessionStorage for better security.
Implement auto-save functionality to prevent accidental data loss.
✅ Multi-Language & Accessibility Support

Implement i18n (Internationalization) to support multiple languages.
Improve accessibility (A11Y) using ARIA attributes and screen reader compatibility.
✅ UI/UX Enhancements

Add Dark Mode for improved usability.
Allow users to customize themes for branding.
✅ Security Best Practices

Sanitize user input to prevent Cross-Site Scripting (XSS).
Use HTTPS & Content Security Policy (CSP) for data security.
🔄 Future Enhancements
✔️ Backend Integration – Store responses in a database
✔️ Session-based Storage – Enhance data security
✔️ Multi-language Support – Expand to international users
✔️ Dark Mode & Theming – Improve UI customization

👨‍💻 Author
🔗 Shivaraj KP

📜 License
This project is open-source and available under the MIT License.
