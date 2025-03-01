# Find My Device UI Clone (Next.js + Bootstrap + Leaflet.js)

## 🌟 Overview
This project is a **Find My Device UI Clone** built using **Next.js** and **React.js**, with **Leaflet.js** for map visualization and **Bootstrap** for styling. It allows users to view a list of devices, see their locations on a map, and interact with them through actions like **Factory Reset** and **Ring Device**.

---

## 📂 Project Structure

```
find-my-device-bootstrap/
│── components/         # Reusable UI components
│   ├── DeviceList.js   # List of devices with search & filter
│   ├── DeviceDetails.js # Side panel with device details & actions
│   ├── Map.js          # Wrapper for Leaflet map
│   ├── MapOnly.js      # Renders the interactive Leaflet map
│── data/               # Stores dummy device data
│   ├── devices.js      # JSON file with device locations
│── pages/              # Next.js pages
│   ├── _app.js         # Global styles and Bootstrap import
│   ├── index.js        # Main dashboard (DeviceList + Map + DeviceDetails)
│── public/             # Static assets (Leaflet marker icons)
│   ├── marker-icon.png
│   ├── marker-icon-2x.png
│   ├── marker-shadow.png
│── styles/             # Global stylesheets
│   ├── globals.css     # Custom styling for dark mode & animations
│── package.json        # Dependencies & scripts
│── README.md           # Documentation
```

---

## 🔄 **Project Flow**

### **1️⃣ Device List (Left Panel)**
- Displays a list of **dummy devices** (from `data/devices.js`).
- Allows **searching and filtering** devices dynamically.
- Clicking a device **selects it** and opens the **Device Details Panel**.

### **2️⃣ Map View (Center)**
- Uses **Leaflet.js** to display **device locations on a map**.
- Devices are represented as **markers**, using data from `data/devices.js`.
- Clicking a marker **shows device info** in a popup.

### **3️⃣ Device Details Panel (Right Panel)**
- Displays **detailed information** about the selected device.
- Provides **two interactive actions**:
  - **Factory Reset** → Simulates action with a confirmation dialog.
  - **Ring Device** → Shows an alert that the device is ringing.
- Can be closed to return to the main dashboard.

### **4️⃣ Dark Mode & Animations**
- Bootstrap **dark theme applied** for a modern look.
- Smooth **animations** for panel transitions and UI interactions.

---

## 🚀 **Installation & Setup**

### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Run the Development Server**
```sh
npm run dev
```
- The app will be available at **`http://localhost:3000`**.

---

## 📌 **Future Enhancements**
✔️ Add real-time tracking using WebSockets.  
✔️ Store device data in a backend database.  
✔️ Implement user authentication for secured access.  

---

## 🎯 **Final Thoughts**
This **Find My Device UI Clone** is a **fully functional, responsive, and interactive** web app built with Next.js, React, Bootstrap, and Leaflet.js. It provides **aesthetic UI, smooth animations, and essential device-tracking features**.

Enjoy building and modifying it as needed! 🚀🔥
