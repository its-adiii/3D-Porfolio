# 3D Portfolio Website

A stunning 3D portfolio website built with React, Three.js, and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service
3. Create an email template
4. Get your credentials:
   - Public Key
   - Service ID
   - Template ID
5. Update the credentials in `src/components/Contact.jsx`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   // ...
   emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     formRef.current,
     "YOUR_PUBLIC_KEY"
   )
   ```

### 3. Add 3D Models
1. Download the following 3D models:
   - Computer model: Place `scene.gltf` and related files in `public/desktop_pc/`
   - Earth model: Place `scene.gltf` and related files in `public/planet/`

   You can find suitable models on [Sketchfab](https://sketchfab.com/):
   - For computer: Search for "Gaming PC" or "Desktop Computer"
   - For Earth: Search for "Earth Globe"

2. Make sure to download models in GLTF format

### 4. Add Images
1. Tech Stack Icons (in `src/assets/tech/`):
   - HTML, CSS, JavaScript icons
   - React, Node.js, Three.js icons
   - Other framework/tool icons

2. Company Logos (in `src/assets/company/`):
   - Add logos of companies you've worked with

3. Project Screenshots (in `src/assets/`):
   - Add screenshots or previews of your projects

### 5. Run the Development Server
```bash
npm run dev
```

## Features
- Interactive 3D elements
- Responsive design
- Modern UI/UX
- Contact form with EmailJS
- Animated sections
- Project showcase
- Skills visualization

## Technologies Used
- React.js
- Three.js
- Tailwind CSS
- Framer Motion
- EmailJS
- React Three Fiber
- React Three Drei
