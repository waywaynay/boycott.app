importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyBPBx-OzY7G51wBrdojD7mH-jSpHZPMNww",
    authDomain: "waywaynay-f20f6.firebaseapp.com",
    projectId: "waywaynay-f20f6",
    storageBucket: "waywaynay-f20f6.appspot.com",
    messagingSenderId: "1019520664520",
    appId: "1:1019520664520:web:8e842cdeb808e05ebd76fd",
    measurementId: "G-YHKCLEVWK2"

});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});