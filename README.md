# 📱 Mobile Application with Real-Time Notifications

This repository contains a full-stack mobile application built with **React Native** on the frontend, a **Node.js** backend, and **MongoDB** as the database. The app provides a smooth mobile experience with **real-time features powered by WebSockets** and **secure authentication with Google OAuth & JWT**.

---

## 🚀 Features

- **Cross-Platform Mobile App**: Works on both iOS and Android.  
- **Authentication Options**:  
  - Standard **email/password login** with JWT.  
  - **Google OAuth login** for quick and secure sign-in.  
- **Real-Time Notifications**: WebSocket integration for instant in-app updates (alerts, messages, activity updates).  
- **Productive Backend**: Node.js server with REST APIs and WebSocket endpoints.  
- **Database Layer**: MongoDB for reliable and scalable data storage.  
- **Persistent Sessions**: User state is saved locally for seamless app relaunches.  
- **Scalable Architecture**: Modular and future-proof code structure.  

---

## 🏗️ Tech Stack

### Frontend (Mobile)
- **React Native** (cross-platform framework)  
- **WebSocket client** for live updates  
- **Google Sign-In SDK** (OAuth integration)  
- **AsyncStorage / SecureStorage** for local persistence  
- Modern UI components with responsive design  

### Backend (Server)
- **Node.js + Express** (API & WebSocket server)  
- **Socket.IO / WS** (real-time communication)  
- **MongoDB + Mongoose** (database and ORM)  
- **JWT Authentication** (email/password)  
- **Google OAuth 2.0** (social login)  

---

## ⚙️ How It Works

### User Authentication
- Users can **sign up with email/password** or **sign in with Google**.  
- Backend issues a **JWT token** after successful authentication.  
- Token is stored securely on the device for session persistence.  

### Data Storage
- MongoDB stores user accounts, sessions, and app data.  

### Real-Time Notifications
- The mobile app maintains a **WebSocket connection** with the backend.  
- When the server triggers an event (new message, alert, or activity), the user **instantly receives an in-app notification**.  

---

## 📂 Project Structure

/frontend # Web frontend still in work
/mobileFrontend # Mobile Application frontend 
/backend # Node.js + Express server with WebSocket & OAuth support
