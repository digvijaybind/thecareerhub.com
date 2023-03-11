importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB0VOfFBGtR-7M9sKxkzEYJLUjybJ43gzI",
  authDomain: "ogcrm-c4b61.firebaseapp.com",
  databaseURL: "https://ogcrm-c4b61.firebaseio.com",
  projectId: "ogcrm-c4b61",
  storageBucket: "ogcrm-c4b61.appspot.com",
  messagingSenderId: "1048981745632",
  appId: "1:1048981745632:web:d31ec01bf4aa479b588585",
  measurementId: "G-S6GJ5P544T"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  console.log(payload);
  var body = { };
  try {
    console.log(JSON.parse(payload.notification.body));
    body = JSON.parse(payload.notification.body);
  } catch(err) {}

  const title = payload.notification.title;
  var url = '';
  if(body.model === 1) url = '/lead/preview/' + body.id;
  else if(body.model === 2) url = '/contat/preview/' + body.id;
  else if(body.model === 3) url = '/sales-order/preview/' + body.id;
  else if(body.model === 4) url = '/customer/preview/' + body.id;
  else if(body.model === 5) url = '/call/preview/' + body.id;
  else if(body.model === 6) url = '/meeting/preview/' + body.id;
  
  const options = { body: title, icon: '/fevicon.ico', actions: [{action: url, title: title}]};
  self.registration.showNotification(title, options);
});