const firebaseConfig = {
    apiKey: "AIzaSyB6wj6Pd-Hl9odNgmZI8lqX45TJzMpXngU",
    authDomain: "kwitter-27859.firebaseapp.com",
    databaseURL: "https://kwitter-27859-default-rtdb.firebaseio.com",
    projectId: "kwitter-27859",
    storageBucket: "kwitter-27859.appspot.com",
    messagingSenderId: "51408295710",
    appId: "1:51408295710:web:de59ed2521274ab6ed1b0f"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

function send() {
   sendmsg =  document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
    name : user_name,
    message : sendmsg,
    like : 0
   });
   document.getElementById("msg").value = "";
}