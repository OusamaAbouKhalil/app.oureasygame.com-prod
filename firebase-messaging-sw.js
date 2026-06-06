// Firebase Cloud Messaging Service Worker
// This file is required to prevent Firebase Messaging registration errors on web
// 
// Note: This is a minimal service worker. Firebase Messaging is conditionally 
// disabled on web in the main app if Firebase web config is not available.

// Empty service worker - registers successfully without initializing Firebase
// This prevents the "failed-service-worker-registration" error
// Firebase Messaging functionality is handled conditionally in the main app

console.log('[firebase-messaging-sw.js] Service worker registered successfully');

